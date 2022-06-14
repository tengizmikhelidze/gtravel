import {Component} from '@angular/core';
import { faBed, faBreadSlice, faMap, faTicket, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { EnvironmentConfigurationService } from '../../../../../../core/src/lib/environment-manager';
import { RegionService } from '../../../../../services/src/lib/region/region.service';
import { CitiesService } from '../../../../../services/src/lib/cities/cities.service';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';
import { City, Dish, Region } from '@libs/models';
import { Router } from '@angular/router';
import { DishesService } from '../../../../../services/src/lib/dishes/dishes.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  readonly faUser = faUserCircle
  readonly faMap = faMap
  readonly faKitchen = faBreadSlice
  readonly faHotel = faBed
  readonly faTicket = faTicket
  searchSuggestions: (Region | City | Dish)[] = [];
  searchSuggestionsFiltered: (Region | City | Dish)[] = [];
  selectedSearchItem: Region | City | Dish;

  get logoSvg(): string {
    return this.environmentManager.readConfig().baseHref + `./assets/logos/logo.svg`
  };

  constructor(private environmentManager: EnvironmentConfigurationService,
              private regionService: RegionService,
              private citiesService: CitiesService,
              private dishesService: DishesService,
              private router: Router) {
    combineLatest([this.regionService.getAll(), this.citiesService.getAll(), this.dishesService.getAll()])
      .pipe(
        tap(([regions, cities, dishes])=>{
          regions.items = regions.items.map(region=> {
            return {
              ...region,
              route: 'regions'
            }
          });
          cities.items = cities.items.map(cities=> {
            return {
              ...cities,
              route: 'cities'
            }
          });
          dishes.items = dishes.items.map(dishes=> {
            return {
              ...dishes,
              route: 'dishes'
            }
          });
          this.searchSuggestions = [...regions.items, ...cities.items, ...dishes.items]
        })
      )
      .subscribe()
  }

  search(event: any) {
      this.searchSuggestionsFiltered = this.searchSuggestions.filter((s) => s.name.includes(event.query));

  }

  changeRoute($event: Region | City) {
    this.router.navigate([$event.route, $event.slug])
      .then(() => {
        window.location.reload();
      });
  }
}
