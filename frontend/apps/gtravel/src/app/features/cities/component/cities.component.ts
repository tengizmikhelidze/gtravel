import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routeCitySlugParamKey } from '../cities-routing.module';
import { City, Dish, Hotel, Region, Restaurant, Sightseeing } from '@libs/models';
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
  imgGalleryData: string[] = [];
  imgGalleryAlreadyPicked: number[] = [0,1,2];
  hotelsData: Hotel[] = [];
  restaurantData: Restaurant[] = [];
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
          this.imgGalleryData = this.getImgGalleryData(data)
          this.restaurantData = this.getRestaurantsData(data);
          this.hotelsData = this.getHotelData(data);
          this.city = data
          this.loading = false;
        }
      )
  }

  private getImgGalleryData(data: City): string[]{
    let temp: string[] = [];
    temp.push(data.sightseeing.imageUrl)
    return temp
  }

  private getHotelData(data: City): Hotel[]{
    let temp: Hotel[] = [];
    data.hotels.forEach(hotel=>{
      temp.push(hotel)
    })
    return temp
  }

  private getRestaurantsData(data: City): Restaurant[] {
    let temp: Restaurant[] = [];
    data.restaurants.forEach(rest=>{
      temp.push(rest)
    })
    return temp;
  }

  onError(target) {
    target.onerror = null;
    target.src = this.imagePlaceholder;
  }

  onImgGalleryError(target){
    let found = false;
    for(let index=0; index<this.imgGalleryData.length; index++){
      if(!this.imgGalleryAlreadyPicked.includes(index)){
        this.imgGalleryAlreadyPicked.push(index);
        target.onerror = null;
        target.src = this.imgGalleryData[index];
        found = true;
        break;
      }
    }
    if(!found){
      this.onError(target)
    }
  }
  arrayFromNumber(num: number): any[]{
    return new Array(num);
  }
}
