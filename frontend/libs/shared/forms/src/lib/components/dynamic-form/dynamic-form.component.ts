import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Output,
  SimpleChanges
} from '@angular/core';
import { Control, ControlValueTypes } from '../../entity';
import { FormGroupService } from '../../services/form-group.service';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent<T> implements OnInit, AfterViewInit, OnChanges {
  @Input() controls: Control<ControlValueTypes, T>[] = [];
  @Input() hideControls = false;
  @Input() submittedFormCheck: boolean;
  @Input() value: any;

  @Output() submitted = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Output() valueChanges = new EventEmitter();

  public form: FormGroup;

  constructor(private formGroupService: FormGroupService<T>,
              private changeDetector: ChangeDetectorRef,
              @Optional() private controlContainer: ControlContainer) {
  }

  ngOnInit() {
    if(this.controlContainer?.control){
      this.form = this.controlContainer.control as FormGroup;
    } else {
      this.form = new FormGroup({});
      this.formGroupService.addControlsTo(this.form,this.controls);
    }
    if(this.submittedFormCheck && this.form){
      this.checkFormValidity(this.form);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.value && changes.value.previousValue && this.form){
      this.setValue(this.value);
    }
    if(changes.submittedFormCheck?.currentValue === true && this.form){
      this.checkFormValidity(this.form);
    }
  }

  ngAfterViewInit() {
    this.setValue(this.value);
  }

  checkFormValidity(formGroup: FormGroup) {
    if(formGroup){
      for(const control in formGroup.controls){
        if(formGroup.get(control) instanceof  FormControl){
          formGroup.get(control)?.markAsDirty();
          formGroup.get(control)?.updateValueAndValidity();
        } else if(formGroup.get(control) instanceof FormGroup && !!formGroup.get(control)){
          this.checkFormValidity(formGroup.get(control) as FormGroup)
        }
      }
    }
  }

  setValue(value: any){
    if(value){
      this.controls.forEach((control : Control<ControlValueTypes, T>)=>{
        if(control.key){
          if(value[control.key] == null){
            this.form.get(control.key.toString())?.reset();
          } else {
            this.form.get(control.key.toString())?.setValue(value[control.key]);
          }
        }
      })
    }
  }

  cancel(){
    this.cancelled.emit();
  }

  submit() {
    if(this.form.valid){
      this.submitted.emit(this.form.getRawValue());
    } else {
      this.checkFormValidity(this.form);
    }
  }
}
