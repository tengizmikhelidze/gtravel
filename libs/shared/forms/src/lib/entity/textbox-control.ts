import { Control } from './control';
import { ControlTypes } from './control-types';

export class TextBoxControl<T> extends Control<string, T>{
  controlType: ControlTypes = 'textBox';
}
