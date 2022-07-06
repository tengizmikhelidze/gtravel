import { BaseEntity } from './base-entity.interface';
import { TransportType } from './transport.interface';

export interface TravelSchedule extends BaseEntity{
  type: TransportType;
  startDestination: string;
  endDestination: string;
  address: string;
  workDays: string;
  workYours: string;
  ticketPrice: number;
  description: string;
  createdAt: string;
  updatedAt: string;
}
