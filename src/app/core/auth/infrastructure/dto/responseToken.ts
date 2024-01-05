import { ApplicationByUserDto } from "./applicationByUser";

export interface ResponseTokenDto {
  idUser?: number;
  userName?: string;
  loginName?: string;
  email?: string;
  token?: string;
  application?: ApplicationByUserDto
}
