import { Component, Input } from '@angular/core';
import { Control, ControlValueTypes } from '../../../entity';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent<T> {
  @Input() control: Control<ControlValueTypes,T>;
  form = this.controlContainer.control as FormGroup
  constructor(private controlContainer: ControlContainer) { }
}
