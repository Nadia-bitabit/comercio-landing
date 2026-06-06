const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export const apiService = {
  getProducts: async () => {
    const res = await fetch(`${BASE_URL}/productos`);
    return res.json();
  },

  getBanner: async () => {
    const res = await fetch(`${BASE_URL}/banner`);
    return res.json();
  },

  login: async (email: string, password: string) => {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return res.json();
  },

  getPerfil: async (token: string) => {
    const res = await fetch(`${BASE_URL}/perfil`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    return res.json();
  },

  register: async (userData: any) => {
    const res = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return res.json();
  },

  getSucursales: async () => {
    const res = await fetch(`${BASE_URL}/sucursales`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.json();
  }
};  
