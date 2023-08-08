import { atom } from "recoil";

export const productId = atom({
  key: "productID",
  default: {
    id: "",
  },
});

export const dataProduct = atom({
  key: "dataProduct",
  default: {
    key: "",
    id: "",
    description: "",
    title: "",
    price: "",
    linkImg: "",
  },
});

export const userEmailSesion = atom({
  key: "userEmail",
  default: {
    email: "",
  },
});
