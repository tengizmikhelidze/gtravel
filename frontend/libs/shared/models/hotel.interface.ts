import { BaseEntity } from './base-entity.interface';

export interface Hotel  extends BaseEntity {
  name: string;
  rating: number;
  address: string;
  imageUrl: string[];
  price: number | null;
  description: string;
  createdAt: string;
  updatedAt: string;
}
