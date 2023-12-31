import React, { useState, useEffect } from "react";
import Css from "./index.module.css";
import {
  ButtonBlue,
  ButtonGreen,
  ButtonGreenAl100,
  ButtonWine,
} from "@/ui/buttons";
import { InputNormal, InputBuscar, InputAlCien } from "@/ui/inputs";
import { LinkAHeader } from "@/ui/links";
import { Carrito } from "@/ui/icons";
import { TextWhite } from "@/ui/typography";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";
import { me } from "@/hooks/hooks";

function HeaderBuscador() {
  //este state lo utilizo para saber si aprete el boton para cerrar
  //o abrir la ventana, dependiendo si es true o false
  const [openWindow, setOpenWindow] = useState(false);
  const { push } = useRouter();
  const [token, setToken] = useState("");

  const useUser = () => {
    const { data, error } = useSWR("userData", async (id) => {
      const res = await me();
      const userData = res;
      return userData;
    });

    return { user: data };
  };
  //hook del useSWR
  const { user } = useUser();

  const desplegarVentana = () => {
    setOpenWindow(true);
  };

  const cerrarVentana = () => {
    setOpenWindow(false);
  };

  //cuando envia el form del buscador cambia la url por la de search y la query
  //para que la pag search busque mediante esa query
  const submitHandler = async (e: any) => {
    e.preventDefault();

    const query = e.target.buscar.value;

    console.log(query);

    push(`/search/${query}`);
  };

  const cerrarSesion = (e: any) => {
    e.preventDefault();
    if (localStorage.getItem("Token")) {
      localStorage.setItem("Token", "");
      alert("Se ha cerrado sesión");
      push("/");
    }
  };

  const iniciarSesion = (e: any) => {
    e.preventDefault();

    push("/signin");
  };

  const goToHome = (e: any) => {
    e.preventDefault();
    push("/");
  };

  useEffect(() => {
    if (localStorage.getItem("Token")) {
      setToken(localStorage.getItem("Token") as string);
    } else {
      setToken("");
    }
  }, []);

  return (
    <div className={Css.header}>
      <div className={Css.headerVisible}>
        <div className={Css.headerVisibleDesktop}>
          <div onClick={goToHome} className={Css.headerVisibleLogoContainer}>
            <Carrito></Carrito>
            <TextWhite className={Css.tituloLogo}>Compralo</TextWhite>
          </div>
          <form
            onSubmit={submitHandler}
            className={Css.HeaderFormBuscarDesktop}
          >
            <InputBuscar name="buscar" placeholder="Chair"></InputBuscar>
            <ButtonGreen className={Css.ButtonBuscar}>Buscar</ButtonGreen>
          </form>
          <div className={Css.headerLinks}>
            <ButtonBlue
              onClick={iniciarSesion}
              style={{
                display: token ? "none" : "initial",
              }}
            >
              Iniciar Sesión
            </ButtonBlue>
            <div
              style={{
                display: token ? "" : "none",
              }}
              className={Css.headerCerrarSesionContainer}
            >
              <TextWhite>{user ? user.email : ""}</TextWhite>
              <TextWhite
                onClick={cerrarSesion}
                className={Css.linkCerrarSesion}
              >
                Cerrar Sesión
              </TextWhite>
            </div>
          </div>
          <div className={Css.headerVisibleBotonDesplegarContainer}>
            <button
              onClick={desplegarVentana}
              className={Css.headerVisibleBotonDesplegar}
            >
              <div className={Css.headerVisibleBotonDesplegarBarras}></div>
              <div className={Css.headerVisibleBotonDesplegarBarras}></div>
              <div className={Css.headerVisibleBotonDesplegarBarras}></div>
            </button>
          </div>
        </div>
        <form onSubmit={submitHandler} className={Css.HeaderFormBuscarMobile}>
          <InputAlCien name="buscar" placeholder="Chair"></InputAlCien>
          <ButtonGreenAl100>Buscar</ButtonGreenAl100>
        </form>
      </div>
      <div
        className={Css.ventanaLinks}
        style={{ display: openWindow ? "flex" : "none" }}
      >
        <button onClick={cerrarVentana} className={Css.ventanaLinksBotonCerrar}>
          x
        </button>
        <LinkAHeader
          onClick={() => {
            cerrarVentana();
            push("/signin");
          }}
          className={Css.linkUno}
        >
          Login
        </LinkAHeader>
        <LinkAHeader
          onClick={() => {
            if (localStorage.getItem("Token")) {
              cerrarVentana();
              push("/profile");
            } else {
              cerrarVentana();
              push("/signin");
            }
          }}
          className={Css.linkDos}
        >
          Mi perfil
        </LinkAHeader>
        <LinkAHeader
          onClick={() => {
            cerrarVentana();
            push("/search");
          }}
          className={Css.linkTres}
        >
          Buscar
        </LinkAHeader>
        <LinkAHeader onClick={cerrarSesion} className={Css.linkCuatro}>
          Cerrar sesion
        </LinkAHeader>
      </div>
    </div>
  );
}

export { HeaderBuscador };
