import { Component, Input, OnInit } from '@angular/core';
import { InputTypes } from './entity/input-types';

@Component({
  selector: 'custom-inputs',
  templateUrl: './custom-inputs.component.html',
  styleUrls: ['./custom-inputs.component.scss']
})
export class CustomInputsComponent {
  @Input() type: InputTypes = 'text';
  @Input() hideBorder : ['top', 'right', 'bottom', 'left'];
}
