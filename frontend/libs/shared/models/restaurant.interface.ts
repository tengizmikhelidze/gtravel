import { BaseEntity } from './base-entity.interface';

export interface Restaurant  extends BaseEntity {
  name: string;
  rating: number;
  address: string;
  imageUrl: string[];
  description: string;
  createdAt: string;
  updatedAt: string;
}
