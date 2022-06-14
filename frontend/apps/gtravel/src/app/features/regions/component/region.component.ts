import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routeRegionSlugParamKey } from '../regions-routing.module';
import { RegionService } from '../../../../../../../libs/shared/services/src/lib/region/region.service';
import { Region } from '@libs/models';
import { faBed, faTree, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { EnvironmentConfigurationService } from '../../../../../../../libs/core/src/lib/environment-manager';

@Component({
  selector: 'frontend-component',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent {
  readonly faUtensils = faUtensils;
  readonly faTree = faTree;
  readonly faBed = faBed;
  regionSlug: string = this.activatedRoute.snapshot.params[routeRegionSlugParamKey]
  region: Region = {} as Region;
  loading : boolean = false;
  @ViewChild('dishGallery') dishGallery : ElementRef;

  get imagePlaceholder(): string {
    return this.environmentManager.readConfig().baseHref + `./assets/placeholders/placeholder-image.png`
  };

  constructor(private activatedRoute: ActivatedRoute,
              private regionService: RegionService,
              private environmentManager: EnvironmentConfigurationService) {
    this.loading = true;
    this.regionService.getOneWithSlug(this.regionSlug)
      .subscribe(
        (data)=>{
          this.region = data
          this.loading = false;
        }
      )
  }

  onError(target) {
    target.onerror = null;
    target.src = this.imagePlaceholder;
  }
}
