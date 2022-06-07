import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routeRegionSlugParamKey } from '../regions-routing.module';
import { RegionService } from '../../../../../../../libs/shared/services/src/lib/region/region.service';

@Component({
  selector: 'frontend-component',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent {
  regionSlug: string = this.activatedRoute.snapshot.params[routeRegionSlugParamKey]
  constructor(private activatedRoute: ActivatedRoute,
              private regionService: RegionService) {
    this.regionService.getOneWithSlug(this.regionSlug)
      .subscribe()
  }

}
