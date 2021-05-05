export function setAccessToken(accessToken: string): void {
  window.localStorage.setItem('accessToken', accessToken);
}

export function getAccessToken(): string | null {
  return window.localStorage.getItem('accessToken');
}
