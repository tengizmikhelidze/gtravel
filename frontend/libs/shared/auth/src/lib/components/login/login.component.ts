import { Component, OnInit } from '@angular/core';
import { EnvironmentConfigurationService } from '../../../../../../core/src/lib/environment-manager';
import { FormControl, FormGroup } from '@angular/forms';
import { getSeason } from '../../../../../tools/helpers/date.helper';

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
