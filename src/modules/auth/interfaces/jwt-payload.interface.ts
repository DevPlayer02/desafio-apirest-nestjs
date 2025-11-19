export interface MyJwtPayload {
  sub: string | number;
  name: string;
}

export interface JwtLoginPayload {
  sub: string | number;
  username: string;
}
