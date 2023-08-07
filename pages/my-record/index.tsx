import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Css from "./index.module.css";
import { Layout } from "@/components/layout";
import { FormProfile } from "@/components/form-profile";
import { useMeOrders, useProductName } from "@/hooks/hooks";
import { RowProduct } from "@/components/row-product";

const MyRecord = () => {
  const { push } = useRouter();
  const [orders, setOrders] = useState([]);

  //pido los datos del user que tiene el token guardado en el localstorage
  //que es el ususario que inicio sesión
  const meOrders = async () => {
    const result = await useMeOrders();
    return result.orders;
    /*
    if (result) {
      //aca voy a obtener el nombre y el resto de informacion de las ordenes que
      // tengan el status de closed, ya que esas son las que se pagaron
      const arrayOrders = result.orders.map(async (r: any) => {
        const name = await useProductName(r.productId);

        r.name = name;

        return r;
      });
      console.log("este es el array a retornar: ", arrayOrders);

      return arrayOrders;
    }*/
  };

  const meOrdersAsync = () => {
    meOrders()
      .then((res) => res)
      .then((result) => {
        console.log("este es el resultado: ", result);
        console.log("fecha: ", result[0].createDate);
        setOrders(result);
      });
  };

  const conversorFecha = (seconds: number) => {
    const fecha = new Date(seconds);
    const dateFormat =
      fecha.getHours() + ":" + fecha.getMinutes() + ", " + fecha.toDateString();
    return dateFormat;
  };

  useEffect(() => {
    const token = localStorage.getItem("Token");

    if (token) {
      meOrdersAsync();
    } else {
      alert(
        "No has iniciado sesión, primero inicia sesión para tener acceso a esta página"
      );
      push("/signin");
    }
  }, []);

  return (
    <Layout>
      <div className={Css.page}>
        <div className={Css.container}>
          <table className={Css.table}>
            <caption>Historial de compras</caption>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Fecha compra</th>
                <th>Pago</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((r: any) => (
                <tr key={Math.floor(Math.random() * 1000000)}>
                  <td data-label="Nombre">{r.aditionalInfo.nameProduct}</td>
                  <td data-label="Cantidad">{r.aditionalInfo.cantidad}</td>
                  <td data-label="Precio">{r.aditionalInfo.priceProduct}</td>
                  <td data-label="Fecha compra">
                    {conversorFecha(r.createDate._seconds * 1000)}
                  </td>
                  <td data-label="Pago">
                    {r.status == "closed" ? "Pagó" : "Pago pendiente"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default MyRecord;
