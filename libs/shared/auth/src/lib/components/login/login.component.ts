import { Component, OnInit } from '@angular/core';
import { EnvironmentConfigurationService } from '../../../../../../core/src/lib/environment-manager';
import { FormGroup } from '@angular/forms';
import { Control, TextBoxControl } from '../../../../../forms/src/lib/entity';
import { UserLogin } from '../../entity/user-login-entity';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  controls : Control<string, UserLogin>[] = [
    new TextBoxControl({
      key: 'userEmail',
      label: 'email',
      required: true,
      pattern: 'email'
    }),

    new TextBoxControl({
      key: 'userPassword',
      label: 'password',
      required: true,
      type: 'password'
    }),


  ]

  constructor(private environmentManager: EnvironmentConfigurationService) {
  }

  ngOnInit() {
  }

  get loginImgSrc(): string {
    return this.environmentManager.readConfig().baseHref + '/assets/login.jpg'
  };
}
