import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CarrouselBackgrounds } from '../entity/backgrounds';
import { EnvironmentConfigurationService } from '../../../../../../../libs/core/src/lib/environment-manager';
import { Carousel } from '../entity/carousel';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'frontend-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements AfterViewInit{
  readonly arrowLeft: IconDefinition = faArrowCircleLeft;
  readonly arrowRight: IconDefinition = faArrowCircleRight;
  backgrounds: CarrouselBackgrounds[] = [
    {
      url: this.environmentManager.readConfig().baseHref + `./assets/images/nature/carrousel/1.jpg`
    } ,
    {
      url: this.environmentManager.readConfig().baseHref + `./assets/images/nature/carrousel/2.jpg`
    },
    {
      url: this.environmentManager.readConfig().baseHref + `./assets/images/nature/carrousel/3.jpg`
    }
  ]

  carousel: Carousel = {
    length: this.backgrounds.length,
    prevIndex: 0,
    currentIndex: 0
  }
  intervalId: any = null;

  constructor(private environmentManager: EnvironmentConfigurationService) {
  }

  ngAfterViewInit() {
    this.carouselIntervalManager(true, 5000)
  }

  changeCarousel(action: 'next' | 'prev') {
    this.carouselIntervalManager(false);

    let oldCarouselOptions = Object.assign(this.carousel)
    this.carousel.prevIndex = this.carousel.currentIndex;

    if(action === 'next'){
      this.carousel.currentIndex += 1;
      if(this.carousel.currentIndex >= this.carousel.length){
        this.carousel.currentIndex = 0;
      }
    } else if(action === 'prev'){
      this.carousel.currentIndex -= 1;
      if(this.carousel.currentIndex <= 0){
        this.carousel.currentIndex = this.carousel.length - 1;
      }
    } else {
      //rollback changes
      this.carousel = oldCarouselOptions;
    }

    this.carouselIntervalManager(true, 5000);
  }

  carouselIntervalManager(flag: boolean, time?: number) {
    if(flag)
      this.intervalId =  setInterval(()=>{this.changeCarousel('next')}, time);
    else
      clearInterval(this.intervalId);
  }
}
