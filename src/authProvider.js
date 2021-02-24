export const authProvider = {
  login: ({ email, password }) => {
    const request = new Request('/api/users/signin?isAdminPanelLogin=true', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((auth) => {
        localStorage.setItem('auth', JSON.stringify(auth));
      })
      .catch(() => {
        throw new Error('Network error');
      });
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('auth');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem('auth') ? Promise.resolve() : Promise.reject(),
  logout: () => {
    localStorage.removeItem('auth');
    return Promise.resolve();
  },
  getIdentity: () => {
    try {
      const {
        user: { id, firstName, lastName },
      } = JSON.parse(localStorage.getItem('auth'));
      return Promise.resolve({ id, fullName: `${firstName} ${lastName}` });
    } catch (error) {
      return Promise.reject(error);
    }
  },
  getPermissions: () => Promise.resolve(),
};
