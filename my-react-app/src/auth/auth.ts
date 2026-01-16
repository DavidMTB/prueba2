export interface AuthUser {
  id: number;
  usuario: string;
  rol: 'admin' | 'user';
}

class Auth {
  private user: AuthUser | null = null;

  login(user: AuthUser) {
    this.user = user;
  }

  logout() {
    this.user = null;
  }

  isAuthenticated(): boolean {
    return this.user !== null;
  }

  getUser(): AuthUser | null {
    return this.user;
  }
}

export const auth = new Auth();
