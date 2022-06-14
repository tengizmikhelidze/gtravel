import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RegionSlugs } from '../../../../../slugs';
import { Router } from '@angular/router';
import { RegionService } from '../../../../../services/src/lib/region/region.service';
import { CitiesService } from '../../../../../services/src/lib/cities/cities.service';

@Component({
  selector: 'app-georgia-map',
  templateUrl: './georgia-map.component.html',
  styleUrls: ['./georgia-map.component.scss']
})
export class GeorgiaMapComponent {
  RegionSlugs = RegionSlugs;
  @ViewChildren('regionPath') regionPath: QueryList<ElementRef>

  constructor(private router: Router,
              private regionService: RegionService,
              private citiesService: CitiesService) {
    this.regionService.getAll().subscribe()
    this.citiesService.getAll().subscribe()
  }

  mouseOverOnRegion($event: MouseEvent) {
    this.regionPath.forEach(regionPath => {
      if($event.target !== regionPath.nativeElement) {
        regionPath.nativeElement.classList.add('opacity-03');
      }
    })
  }

  mouseLeaveOnRegion($event: MouseEvent) {
    this.regionPath.forEach(regionPath => {
      regionPath.nativeElement.classList.remove('opacity-03')
    })
  }

  regionClick(slug: string) {
    this.router.navigate(['regions', slug])
  }
}
