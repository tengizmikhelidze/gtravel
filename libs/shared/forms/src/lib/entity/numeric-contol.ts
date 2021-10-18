import { Control } from './control';
import { ControlTypes } from './control-types';

export class NumericControl<T> extends Control<number, T>{
  controlType: ControlTypes = 'numeric';
  min?: number;
  max?: number;
  currency?: 'GEL';

  constructor(options:{
    value?:  number;
    key?: (keyof T) | undefined;
    label?: string;
    required?: boolean;
    controlType?: ControlTypes;
    type?: string;
    visible?: boolean;
    disabled?: boolean;
    currency?: 'GEL';
    min?: number;
    max?: number
  }={}) {
    super(options);

    this.min = options.min ?? this.min;
    this.min = options.min ?? this.min;
    this.currency = options.currency ?? this.currency;
  }
}
