import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Css from "./index.module.css";
import { Layout } from "@/components/layout";
import { FormProfile } from "@/components/form-profile";
import { me, meUpdateData } from "@/hooks/hooks";
import { Spinner } from "@/components/spinner";

const ProductPage = () => {
  const { push } = useRouter();
  const [newUser, setNewUser] = useState({
    direccion: "",
    tel: "",
    name: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  //pido los datos del user que tiene el token guardado en el localstorage
  //que es el ususario que inicio sesión
  const meAsync = async () => {
    const result = await me();
    console.log(result);

    const obj = {
      direccion: result.direccion,
      tel: result.tel,
      name: result.name,
    };

    setNewUser(obj);
  };

  useEffect(() => {
    const token = localStorage.getItem("Token");

    if (token) {
      meAsync();
    } else {
      alert(
        "No has iniciado sesión, primero inicia sesión para tener acceso a esta página"
      );
      push("/signin");
    }
  }, []);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const name = e.target.name.value;
    const direccion = e.target.direccion.value;
    const tel = e.target.tel.value;

    const result = await meUpdateData(name, direccion, tel);

    if (result.hasOwnProperty("error")) {
      setIsLoading(false);
      alert(
        "Ocurrió un error con la modificación de sus datos, intente nuevamente en unos segundos"
      );
    } else {
      setIsLoading(false);
      alert(result.message);
    }
  };

  return (
    <Layout>
      <div className={Css.containerProducts}>
        {isLoading && <Spinner></Spinner>}
        <FormProfile
          loading={isLoading}
          name={newUser.name}
          tel={newUser.tel}
          direccion={newUser.direccion}
          submit={submitHandler}
        ></FormProfile>
      </div>
    </Layout>
  );
};

export default ProductPage;
