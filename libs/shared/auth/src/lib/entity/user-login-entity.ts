import { EntityBase } from '../../../../domain/src/lib/entity/entity-base';

export interface UserLogin extends EntityBase{
  userEmail: string,
  userPassword: string
}
