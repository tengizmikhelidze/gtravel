import { BaseEntity } from './base-entity.interface';

export interface ResultList<T extends BaseEntity> {
  items: T[];
  count: number;
}
