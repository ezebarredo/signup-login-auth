import { create } from "zustand";

const store = create((set) => ({
  token: null,
  setToken: (token: string) => {
    set((_state: any) => ({ token }));
  },
}));

export default store;
