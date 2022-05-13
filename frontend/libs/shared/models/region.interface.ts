import { Dish } from './dish.interface';
import { City } from './city.interface';
import { BaseEntity } from './base-entity.interface';

export interface Region extends BaseEntity{
  name: string;
  area: number;
  regionCenter: City;
  population: number;
  populationDensity: number;
  history: string;
  cuisine: string;
  description: string;
  cities: City[];
  dishes: Dish[];
  createdAt: string;
  updatedAt: string;
}
