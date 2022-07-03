import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routeRegionSlugParamKey } from '../regions-routing.module';
import { RegionService } from '../../../../../../../libs/shared/services/src/lib/region/region.service';
import { Dish, Hotel, Region, Sightseeing } from '@libs/models';
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
  imgGalleryData: string[] = [];
  imgGalleryAlreadyPicked: number[] = [0,1,2];
  hotelsData: Hotel[] = [];
  dishData: Dish[] = [];
  sightsData: Sightseeing[] = [];
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
          this.imgGalleryData = this.getImgGalleryData(data)
          this.hotelsData = this.getHotelData(data)
          this.dishData = this.getDishData(data)
          this.sightsData = this.getSightsData(data)
          this.region = data
          this.loading = false;
        }
      )
  }

  private getImgGalleryData(data: Region): string[]{
    let temp: string[] = [];
    data.cities.forEach(city=>{
      if(city?.sightseeing?.imageUrl){
        temp.push(city.sightseeing.imageUrl)
      }
    })
    return temp
  }

  private getHotelData(data: Region): Hotel[]{
    let temp: Hotel[] = [];
    data.cities.forEach(city=>{
      if(city.hotels.length > 0){
        city.hotels.forEach(hotel=>{
          temp.push(hotel)
        })
      }
    })
    return temp
  }

  private getDishData(data: Region): Dish[] {
    let temp: Dish[] = [];
    data.dishes.forEach(dish=>{
      if(dish){
        temp.push(dish)
      }
    })
    return temp;
  }

  private getSightsData(data: Region): Sightseeing[] {
    let temp: Sightseeing[] = [];
    data.cities.forEach(city=>{
      if(city.sightseeing){
        temp.push(city.sightseeing)
      }
    })
    return temp;
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

  onError(target) {
    target.onerror = null;
    target.src = this.imagePlaceholder;
  }

  arrayFromNumber(num: number): any[]{
    return new Array(num);
  }
}
