import Css from "./index.module.css";
import React from "react";
import { TextNormal, Subtitle, TextCardProduct } from "@/ui/typography";
import { ButtonComprar } from "@/ui/buttons";
import { useCreateOrder, useMe } from "@/hooks/hooks";
import { useRouter } from "next/navigation";
import { title } from "process";

type PropsCardProduct = {
  title: string;
  price: string;
  linkImg: string;
  description: string;
  id: string;
  setLoading: any;
  loading: any;
};

export const CardProduct = (props: PropsCardProduct) => {
  const { push } = useRouter();

  const comprarClickHandler = async (e: any) => {
    e.preventDefault();
    if (localStorage.getItem("Token")) {
      props.setLoading(true);

      const id = props.id;

      const data = await useMe();
      const result = await useCreateOrder(
        id,
        data.direccion,
        props.title,
        props.price
      );

      props.setLoading(false);

      if (result) {
        const urlRedirection = result.url;
        alert(
          "Redireccionando a la página de mercado pago para realizar su pago"
        );
        push(urlRedirection);
      }
    } else {
      alert(
        "No has iniciado sesión, por favor primero deberas ingresar sesión para poder comprar algún producto. "
      );
      push("./signin");
    }
  };

  return (
    <div className={Css.cardContainer}>
      <div className={Css.cardContainerImgContainer}>
        <img
          className={Css.cardContainerImgContainerImg}
          src={props.linkImg}
          alt={props.title}
        />
      </div>
      <div className={Css.cardContainerDataContainer}>
        <div className={Css.cardContainerDataContainerTitle}>
          <Subtitle>{props.title}</Subtitle>
        </div>
        <div className={Css.cardContainerDataContainerPrice}>
          <TextCardProduct>{props.price}</TextCardProduct>
        </div>
        <div className={Css.cardContainerDataContainerButton}>
          <ButtonComprar disabled={props.loading} onClick={comprarClickHandler}>
            Comprar
          </ButtonComprar>
        </div>

        <div className={Css.cardContainerDataContainerDescription}>
          <TextNormal>{props.description}</TextNormal>
        </div>
      </div>
    </div>
  );
};
