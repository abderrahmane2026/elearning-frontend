import { create } from 'zustand'

export const userContext = create((set) => ({

   user: JSON.parse( window.localStorage.getItem('userr') || null),
  //role: 'saller',
  //role: "client",
  // role:"admin",
  updateUsers: (newUser) => set((state) => ({ user : newUser })),
}))
