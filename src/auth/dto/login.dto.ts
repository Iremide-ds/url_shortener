import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDetails {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}
