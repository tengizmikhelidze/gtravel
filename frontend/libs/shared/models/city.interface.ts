import { Restaurant } from './restaurant.interface';
import { Sightseeing } from './sightseeing.interface';
import { Hotel } from './hotel.interface';
import { BaseEntity } from './base-entity.interface';

export interface City extends BaseEntity{
  name: string;
  area: number;
  population: number;
  populationDensity: number;
  description: string;
  sightseeing: Sightseeing;
  history: string;
  restaurants: Restaurant[];
  hotels: Hotel[];
  createdAt: string;
  updatedAt: string;
}
