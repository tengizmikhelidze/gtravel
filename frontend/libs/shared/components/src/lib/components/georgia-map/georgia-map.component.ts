import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RegionSlugs } from '../../../../../slugs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-georgia-map',
  templateUrl: './georgia-map.component.html',
  styleUrls: ['./georgia-map.component.scss']
})
export class GeorgiaMapComponent {
  RegionSlugs = RegionSlugs;
  @ViewChildren('regionPath') regionPath: QueryList<ElementRef>

  constructor(private router: Router) { }

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
