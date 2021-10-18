import { Component, OnInit } from '@angular/core';
import { EnvironmentConfigurationService } from '../../../../../../core/src/lib/environment-manager';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { Control, TextBoxControl } from '../../../../../forms/src/lib/entity';
import { UserLogin } from '../../entity/user-login-entity';
import { getSeason } from '../../../../../tools/helpers/date.helper';
import { FormGroupService } from '../../../../../forms/src/lib/services/form-group.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  getSeason= getSeason;
  form: FormGroup = new FormGroup({
    userEmail: new FormControl(''),
    userPassword: new FormControl(''),
    remember: new FormControl()
  });

  constructor(private environmentManager: EnvironmentConfigurationService) {
  }

  ngOnInit() {
  }

  get loginImgSrc(): string {
    return this.environmentManager.readConfig().baseHref + `./assets/${getSeason()}.jpg`
  };
}
