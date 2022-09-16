/* eslint-disable prettier/prettier */
import { Role } from '../enum/user.enum';

export class CreateUserInterface {
  name: string;
  roles: Role[];
}
