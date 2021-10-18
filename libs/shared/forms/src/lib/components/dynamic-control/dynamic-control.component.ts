import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { Control, ControlValueTypes } from '../../entity';

@Component({
  selector: 'form-dynamic-control',
  templateUrl: './dynamic-control.component.html',
  styleUrls: ['./dynamic-control.component.scss']
})

export class DynamicControlComponent<T> {
  form: FormGroup = this.controlContainer.control as FormGroup;

  @Input() control : Control<ControlValueTypes, T>;
  @Output() valueChanged = new EventEmitter();

  constructor(private controlContainer: ControlContainer) { }

  emitValueChanges(value: any){
    this.valueChanged.emit({key: this.control.key, value: value})
  }
}
