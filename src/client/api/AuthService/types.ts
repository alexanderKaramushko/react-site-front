export interface AuthRequestPayload {
  password: string;
  username: string;
}

export interface AuthResponse {
  access_token: string;
}
