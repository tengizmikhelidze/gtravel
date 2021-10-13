import { Injectable } from '@angular/core';
import { AuthConfig } from '../entity/auth-config';

@Injectable({
  providedIn: 'root'
})
export abstract class AuthConfigService {
  abstract get(): AuthConfig | undefined;
}
