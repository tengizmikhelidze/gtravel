import { Component, OnInit } from '@angular/core';
import { EnvironmentConfigurationService } from '../../../../../../core/src/lib/environment-manager';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  get logoSvg(): string {
    return this.environmentManager.readConfig().baseHref + `./assets/logos/logo.svg`
  };

  constructor(private environmentManager: EnvironmentConfigurationService) {
  }

}
