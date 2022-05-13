import { BaseEntity } from './base-entity.interface';

export interface Dish  extends BaseEntity{
  name: string;
  composition: string;
  history: string;
  createdAt: string;
  updatedAt: string;
}
