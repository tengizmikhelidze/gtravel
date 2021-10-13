import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Control, ControlBase, ControlGroup, ControlValueTypes, createFormControl, createFormGroup } from '../entity';
import { EntityBase } from '../../../../domain/src/lib/entity/entity-base';

@Injectable({
  providedIn: 'root'
})
export class FormGroupService {

  addControlsTo(formGroup: FormGroup, controls: ControlBase<EntityBase>[]){
    controls.forEach(control => {
      if(control.key){
        if(!formGroup.get(control.key)){
          if(control.isGroup){
            formGroup.addControl(control.key, createFormGroup(control as ControlGroup<EntityBase>));
          } else {
            formGroup.addControl(control.key, createFormControl(control as Control<ControlValueTypes, EntityBase>));
          }
        }
      }
    })
  }

  removeControlsFrom(formGroup: FormGroup, controls: ControlBase<EntityBase>[]){
    controls.forEach(control=>{
      if(control.key){
        formGroup.removeControl(control.key);
      }
    })
  }

}
