import { ControlValueTypes } from './control-types';

export interface ControlBase<T> {
  isGroup: boolean;
  value?: ControlValueTypes;
  key: (keyof T) | undefined;
  label: string;
  order: number;
  visible: boolean;
  options: {key: string, value: string}[];
}
