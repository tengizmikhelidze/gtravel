import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routeCitySlugParamKey } from '../cities-routing.module';
import { City } from '@libs/models';
import { faBed, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { EnvironmentConfigurationService } from '../../../../../../../libs/core/src/lib/environment-manager';
import { CitiesService } from '../../../../../../../libs/shared/services/src/lib/cities/cities.service';

@Component({
  selector: 'frontend-component',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent {
  readonly faUtensils = faUtensils;
  readonly faBed = faBed;
  citySlug: string = this.activatedRoute.snapshot.params[routeCitySlugParamKey]
  city: City = {} as City;
  loading : boolean = false;
  @ViewChild('dishGallery') dishGallery : ElementRef;

  get imagePlaceholder(): string {
    return this.environmentManager.readConfig().baseHref + `./assets/placeholders/placeholder-image.png`
  };

  constructor(private activatedRoute: ActivatedRoute,
              private citiesService: CitiesService,
              private environmentManager: EnvironmentConfigurationService) {
    this.loading = true;
    this.citiesService.getOneWithSlug(this.citySlug)
      .subscribe(
        (data)=>{
          this.city = data
          this.loading = false;
        }
      )
  }

  onError(target) {
    target.onerror = null;
    target.src = this.imagePlaceholder;
  }
}
