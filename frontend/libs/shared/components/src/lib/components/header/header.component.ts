import {Component} from '@angular/core';
import { faBed, faBreadSlice, faMap, faTicket, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { EnvironmentConfigurationService } from '../../../../../../core/src/lib/environment-manager';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  readonly faUser = faUserCircle
  readonly faMap = faMap
  readonly faKitchen = faBreadSlice
  readonly faHotel = faBed
  readonly faTicket = faTicket

  get logoSvg(): string {
    return this.environmentManager.readConfig().baseHref + `./assets/logos/logo.svg`
  };

  constructor(private environmentManager: EnvironmentConfigurationService) {
  }
}
