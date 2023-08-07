const BASE_URL = "https://backend-ecommerce-virid.vercel.app/api/";
//const BASE_URL = "http://localhost:3001/api/";

export async function fetchAPIGetNoAuth(url: string) {
  const fetchApi = fetch(BASE_URL + url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });

  try {
    const res = await fetchApi;
    const resultado = await res.json();

    return resultado;
  } catch (e: any) {
    console.log(e.error);
    return null;
  }
}

export async function fetchAPIPostAuth(url: string, email: string) {
  const fetchApi = fetch(BASE_URL + url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },

    body: JSON.stringify({
      email,
    }),
  });

  try {
    const res = await fetchApi;
    const resultado = await res.json();

    return resultado;
  } catch (e: any) {
    console.log(e.error);
    return null;
  }
}

export async function fetchAPIPostAuthToken(
  url: string,
  email: string,
  code: string
) {
  const fetchApi = fetch(BASE_URL + url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },

    body: JSON.stringify({
      email,
      code,
    }),
  });

  try {
    const res = await fetchApi;
    const result = await res.json();

    return result;
  } catch (e: any) {
    console.log(e.message);
    return null;
  }
}

export async function fetchAPIPostMe(url: string) {
  const token = "bearer " + localStorage.getItem("Token");

  const fetchApi = fetch(BASE_URL + url, {
    method: "GET",
    headers: {
      Authorization: token,
      "content-type": "application/json",
    },
  });

  try {
    const res = await fetchApi;
    const result = await res.json();
    return result;
  } catch (e: any) {
    console.log(e.error);

    return null;
  }
}

export async function fetchAPIPatchMe(
  url: string,
  name: string,
  direccion: string,
  tel: string
) {
  const token = "bearer " + localStorage.getItem("Token");

  const fetchApi = fetch(BASE_URL + url, {
    method: "PATCH",
    headers: {
      Authorization: token,
      "content-type": "application/json",
    },

    body: JSON.stringify({
      name,
      direccion,
      tel,
    }),
  });

  try {
    const res = await fetchApi;
    const result = res.json();
    return result;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function fetchAPICreateOrder(
  url: string,
  direccion: string,
  name: string,
  price: string
) {
  const token = "bearer " + localStorage.getItem("Token");

  const fetchApi = fetch(BASE_URL + url, {
    method: "POST",
    headers: {
      Authorization: token,
      "content-type": "application/json",
    },

    body: JSON.stringify({
      cantidad: 1,
      direccionDeEnvio: direccion,
      nameProduct: name,
      priceProduct: price,
    }),
  });

  try {
    const res = await fetchApi;
    const result = res.json();
    return result;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function fetchApiMeOrders(url: string) {
  const token = "bearer " + localStorage.getItem("Token");

  const fetchApi = fetch(BASE_URL + url, {
    method: "GET",
    headers: {
      Authorization: token,
      "content-type": "application/json",
    },
  });

  try {
    const res = await fetchApi;
    const result = res.json();
    return result;
  } catch (e) {
    console.log(e);
    return null;
  }
}
