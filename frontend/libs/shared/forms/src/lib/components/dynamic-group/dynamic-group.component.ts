import { Component, Input } from '@angular/core';
import { ControlGroup } from '../../entity';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-dynamic-group',
  templateUrl: './dynamic-group.component.html',
  styleUrls: ['./dynamic-group.component.scss']
})
export class DynamicGroupComponent<T> {
  @Input() group: ControlGroup<T>;
  form: FormGroup = this.controlContainer.control as FormGroup;
  constructor(private controlContainer: ControlContainer) { }
}
