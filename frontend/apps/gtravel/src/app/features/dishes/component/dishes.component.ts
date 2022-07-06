import { Component, ElementRef, ViewChild } from '@angular/core';
import { Dish } from '@libs/models';
import { ActivatedRoute, Router } from '@angular/router';
import { EnvironmentConfigurationService } from '../../../../../../../libs/core/src/lib/environment-manager';
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faBed,
  faTree,
  faUtensils
} from '@fortawesome/free-solid-svg-icons';
import { DishesService } from '../../../../../../../libs/shared/services/src/lib/dishes/dishes.service';
import { Carousel } from '../../main/entity/carousel';

@Component({
  selector: 'frontend-component',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent {
  readonly rightArrow = faArrowAltCircleRight;
  readonly leftArrow = faArrowAltCircleLeft;
  dishes: Dish[] = [];
  carousel: Carousel = {
    prevIndex: 0,
    currentIndex: 0,
    length: 10
  }
  loading : boolean = false;
  @ViewChild('dishGallery') dishGallery : ElementRef;
  dishModal: boolean = false;
  selectedDish: Dish;

  get imagePlaceholder(): string {
    return this.environmentManager.readConfig().baseHref + `./assets/placeholders/placeholder-image.png`
  };

  constructor(private activatedRoute: ActivatedRoute,
              private dishesService: DishesService,
              private router: Router,
              private environmentManager: EnvironmentConfigurationService) {
    this.loading = true;
    this.dishesService.getAll()
      .subscribe(
        (data)=>{
          this.dishes = data.items
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
    } else if(this.carousel.currentIndex + 1 === Math.ceil(this.dishes.length / 10) && step === 'next'){
      return;
    } else {
      this.carousel.prevIndex = this.carousel.currentIndex;
      step === 'next' ? ++this.carousel.currentIndex : --this.carousel.currentIndex;
    }
  }

  selectDish(dish: Dish) {
    this.selectedDish = dish
    this.dishModal = true;
  }

  closeDishModal() {
    this.dishModal = false;
  }
}
