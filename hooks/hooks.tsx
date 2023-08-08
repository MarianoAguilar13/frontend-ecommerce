import useSWR, { useSWRConfig } from "swr";
import useSWRInmutable from "swr";
import {
  fetchAPIGetNoAuth,
  fetchAPIPatchMe,
  fetchAPIPostAuth,
  fetchAPIPostAuthToken,
  fetchAPIPostMe,
  fetchAPICreateOrder,
  fetchApiMeOrders,
} from "./api";

const BASE_URL = "https://backend-ecommerce-virid.vercel.app/api/";

export const searchUse = async (
  query: string,
  offset: number,
  limit: number
) => {
  const result = await fetchAPIGetNoAuth(
    "search?query=" + query + "&offset=" + offset + "&limit=" + limit
  );
  if (result != null) {
    if (result.message) {
      alert(result.message);
      return null;
    } else {
      console.log("Este es el resultado completo de la busqueda: ", result);

      return result;
    }
  } else {
    alert("Ocurrió un error en su busqueda, pruebe nuevamente");
    return null;
  }
};

export const productData = (id: string, callback: any) => {
  fetch(BASE_URL + "products/" + id, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      if (result != null) {
        if (result.message) {
          alert(result.message);
        } else {
          console.log(result);

          callback(result);
        }
      } else {
        alert("Ocurrió un error insesperado pruebe con otro producto");
      }
    });
};

export const productName = async (id: string) => {
  const fetchApi = fetch(BASE_URL + "products/" + id, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });

  try {
    const res = await fetchApi;
    const resultado = await res.json();

    console.log(resultado);

    return resultado.object.Name;
  } catch (e: any) {
    console.log(e.error);
    return null;
  }
};

export const validateEmail = (mail: string) => {
  // Define our regular expression.
  var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  // Using test we can check if the text match the pattern
  if (validEmail.test(mail)) {
    return true;
  } else {
    return false;
  }
};

export const auth = async (email: string) => {
  const emailValidate = validateEmail(email);

  if (emailValidate) {
    const result = await fetchAPIPostAuth("auth", email);

    if (result.error) {
      alert(result.error);
      return null;
    } else {
      alert(result.message);
      return true;
    }
  } else {
    alert(
      "El email ingresado no es un email valido, por favor ingrese un email valido para continuar"
    );
    return null;
  }
};

export const authToken = async (email: string, code: string) => {
  const result = await fetchAPIPostAuthToken("auth/token", email, code);

  if (result) {
    if (result.message) {
      alert(result.message);
      return null;
    } else {
      return result.token;
    }
  } else {
    return null;
  }
};

export const me = async () => {
  const result = await fetchAPIPostMe("me");
  //result sera un usuario o un null dependiendo de lo que responda el back
  return result;
};

export const meUpdateData = async (
  name: string,
  direccion: string,
  tel: string
) => {
  const result = await fetchAPIPatchMe("me", name, direccion, tel);
  //result sera un objeto que tendra un message o un message + error
  return result;
};

export const createOrder = async (
  productId: string,
  direccion: string,
  name: string,
  price: string
) => {
  const result = await fetchAPICreateOrder(
    `order?productId=${productId}`,
    direccion,
    name,
    price
  );

  if (result.hasOwnProperty("error")) {
    alert(result.error);
    return null;
  } else {
    return result;
  }
};

export const meOrders = async () => {
  const result = await fetchApiMeOrders("me/orders");

  if (result.hasOwnProperty("message")) {
    alert(result.message);
    return null;
  } else {
    return result;
  }
};
