import { Component, Input } from '@angular/core';
import { TextBoxControl } from '../../../entity';
import { EntityBase } from '../../../../../../domain/src/lib/entity/entity-base';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {
  @Input() control: TextBoxControl<EntityBase>;
  form = this.controlContainer.control as FormGroup
  constructor(private controlContainer: ControlContainer) { }
}
