import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../enum/user.enum';

export class CreateUserDto {
  @ApiProperty({ default: 'name' })
  name: string;
  @ApiProperty({ enum: Role })
  roles: Role[];
}
