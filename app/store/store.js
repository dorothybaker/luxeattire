import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      cart: { clothes: [] },
      addCloth: (data) =>
        set((state) => {
          const existingCloth = state.cart.clothes.find(
            (cloth) => cloth._id === data._id
          );
          if (existingCloth) {
            const updatedClothes = state.cart.clothes.map((cloth) =>
              cloth._id === data._id
                ? { ...cloth, quantity: cloth.quantity + data.quantity }
                : cloth
            );
            return { cart: { clothes: updatedClothes } };
          } else {
            return { cart: { clothes: [...state.cart.clothes, { ...data }] } };
          }
        }),
      removeCloth: (id) =>
        set((state) => ({
          cart: {
            clothes: state.cart.clothes.filter((cloth) => !(cloth._id === id)),
          },
        })),
      getClothes: () => get().cart.clothes,
      resetCart: () => set(() => ({ cart: { clothes: [] } })),
    }),
    { name: "clothes-storage" }
  )
);
