import { Component, ElementRef, ViewChild } from '@angular/core';
import { Dish, Hotel } from '@libs/models';
import { ActivatedRoute, Router } from '@angular/router';
import { EnvironmentConfigurationService } from '../../../../../../../libs/core/src/lib/environment-manager';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from '../../main/entity/carousel';
import { HotelsService } from '../../../../../../../libs/shared/services/src/lib/hotels/hotels.service';

@Component({
  selector: 'frontend-component',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent {
  readonly rightArrow = faArrowAltCircleRight;
  readonly leftArrow = faArrowAltCircleLeft;
  hotels: Hotel[] = [];
  carousel: Carousel = {
    prevIndex: 0,
    currentIndex: 0,
    length: 10
  }
  loading : boolean = false;
  @ViewChild('dishGallery') dishGallery : ElementRef;
  dishModal: boolean = false;
  selectHotel: Hotel;

  get imagePlaceholder(): string {
    return this.environmentManager.readConfig().baseHref + `./assets/placeholders/placeholder-image.png`
  };

  constructor(private activatedRoute: ActivatedRoute,
              private hotelsService: HotelsService,
              private router: Router,
              private environmentManager: EnvironmentConfigurationService) {
    this.loading = true;
    this.hotelsService.getAll()
      .subscribe(
        (data)=>{
          this.hotels = data.items
          this.loading = false;
        }
      )
  }

  onError(target) {
    target.onerror = null;
    target.src = this.imagePlaceholder;
  }

  changeStep(step: 'prev' | 'next') {
    if(this.carousel.currentIndex === 0 && step==='prev'){
      return
    } else if(this.carousel.currentIndex + 1 === Math.ceil(this.hotels.length / 10) && step === 'next'){
      return;
    } else {
      this.carousel.prevIndex = this.carousel.currentIndex;
      step === 'next' ? ++this.carousel.currentIndex : --this.carousel.currentIndex;
    }
  }

  selectDish(hotel: Hotel) {
    this.selectHotel = hotel
    this.dishModal = true;
  }

  closeDishModal() {
    this.dishModal = false;
  }
}
