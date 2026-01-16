interface User {
  id: number;
  usuario: string;
}

export const auth = {
  user: null as User | null,

  login(user: User) {
    this.user = user;
  },

  logout() {
    this.user = null;
  },

  getUser() {
    return this.user;
  },

  isAuthenticated() {
    return this.user !== null;
  }
};
