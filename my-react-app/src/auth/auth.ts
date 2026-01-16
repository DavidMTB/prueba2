class Auth {
  private tokenKey = 'auth_token';
  private userKey = 'auth_user';
  
  login(token: string, user: any) {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }
  
  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  }
  
  isAuthenticated() {
    return !!localStorage.getItem(this.tokenKey);
  }
  
  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
  
  getUser() {
    const userStr = localStorage.getItem(this.userKey);
    return userStr ? JSON.parse(userStr) : null;
  }
}

export const auth = new Auth();