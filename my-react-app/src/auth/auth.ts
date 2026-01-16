export const auth = {
  isAuthenticated: false,
  role: null as 'admin' | 'user' | null,

  login(role: 'admin' | 'user') {
    this.isAuthenticated = true;
    this.role = role;
  },

  logout() {
    this.isAuthenticated = false;
    this.role = null;
  }
};
