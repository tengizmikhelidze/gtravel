import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { RegionService } from '../../../../../services/src/lib/region/region.service';

@Component({
  selector: 'app-georgia-map',
  templateUrl: './georgia-map.component.html',
  styleUrls: ['./georgia-map.component.scss']
})
export class GeorgiaMapComponent implements OnInit {

  @ViewChildren('regionPath') regionPath: QueryList<ElementRef>

  constructor(private regionService: RegionService) { }

  ngOnInit(): void {
    this.regionService.getAll()
      .subscribe((data)=>{console.log(data)})
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
}
