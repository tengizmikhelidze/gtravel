import { Component } from '@angular/core';
import { EnvironmentConfigurationService } from '../../../../../../core/src/lib/environment-manager';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private environmentManager: EnvironmentConfigurationService) {
  }
  get loginImgSrc(): string {
    return this.environmentManager.readConfig().baseHref + '/assets/login.jpg'
  };
}
