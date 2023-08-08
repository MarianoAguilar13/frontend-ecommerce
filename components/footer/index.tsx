import React, { useState } from "react";
import Css from "./index.module.css";
import { LinkAFooter } from "@/ui/links";
import { TextWhite } from "@/ui/typography";
import { TwitterLogo, InstagramLogo } from "@/ui/icons";
import { useRouter } from "next/navigation";

function Footer() {
  //este state lo utilizo para saber si aprete el boton para cerrar
  //o abrir la ventana, dependiendo si es true o false
  const [openWindow, setOpenWindow] = useState(false);
  const { push } = useRouter();
  const URL = "https://ecommerce-one-fawn.vercel.app";

  const desplegarVentana = () => {
    setOpenWindow(true);
  };

  const cerrarVentana = () => {
    setOpenWindow(false);
  };

  const cerrarSesión = (e: any) => {
    e.preventDefault();
    if (localStorage.getItem("Token")) {
      localStorage.setItem("Token", "");
      alert("Se ha cerrado sesión");
      push("/");
    }
  };

  return (
    <div className={Css.footer}>
      <div className={Css.footerNav}>
        <div className={Css.footerNavLinks}>
          <LinkAFooter href={URL + "/signin"}>Login</LinkAFooter>
          <LinkAFooter href={URL + "/profile"}>Mi perfil</LinkAFooter>
          <LinkAFooter href={URL + "/my-record"}>Mi historial</LinkAFooter>
          <LinkAFooter href={URL + "/search"}>Buscar</LinkAFooter>
          <LinkAFooter onClick={cerrarSesión}>Logout</LinkAFooter>
        </div>
        <div className={Css.footerNavMarca}>
          <TextWhite>@2023</TextWhite>
        </div>
      </div>
      <div className={Css.footerSocial}>
        <div className={Css.footerSocialLinks}>
          <TextWhite>Redes</TextWhite>
          <div className={Css.footerSocialLinksLink}>
            <TwitterLogo></TwitterLogo>
            <LinkAFooter> My E-commerce</LinkAFooter>
          </div>
          <div className={Css.footerSocialLinksLink}>
            <InstagramLogo></InstagramLogo>
            <LinkAFooter>My E-commerce</LinkAFooter>
          </div>
        </div>

        <div className={Css.footerSocialMarca}>
          <TextWhite>@2023</TextWhite>
        </div>
      </div>
    </div>
  );
}

export { Footer };
