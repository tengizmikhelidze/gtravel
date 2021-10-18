import { FormGroup } from '@angular/forms';
import { isDate } from 'rxjs/internal-compatibility';
import { parseExactDate } from '../../../../tools/helpers/date.helper';

export function setFormValue(form: FormGroup, value: any, except: string[] | null = null, recursive:boolean = false){
  if(value && form){
    for(const key in form.controls){
      if((<FormGroup>form.get(key)).controls){
        if(recursive){
          setFormValue(form.get(key) as FormGroup, value[key], except, recursive);
        }
        continue;
      }
      if(except?.includes(key)){
        continue;
      }
      if(value[key] == null){
        form.get(key)?.reset();
      } else {
        if(isDate(value[key])){
          form.get(key)?.setValue(parseExactDate(value[key]));
        } else {
          form.get(key)?.setValue(value[key]);
        }
      }
    }
    form.markAllAsTouched();
    form.updateValueAndValidity();
  }
}
