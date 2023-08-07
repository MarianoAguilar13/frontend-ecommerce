import Css from "./index.module.css";
import React, { useState } from "react";
import { TextExtraLarge, TextNormal } from "@/ui/typography";
import { useRecoilState } from "recoil";
import { productId } from "@/atoms/atoms";
import { useRouter } from "next/navigation";

type PropsCardProductSearch = {
  title: string;
  price: string;
  linkImg: string;
  id: string;
  description: string;
};

export const CardProductSearch = (props: PropsCardProductSearch) => {
  const [id, setId] = useRecoilState(productId);
  const { push } = useRouter();

  const clickHandler = (e: any) => {
    e.preventDefault();

    setId({ id: props.id });

    console.log(id);

    push("/product");
  };

  return (
    <div onClick={clickHandler} className={Css.cardContainer}>
      <div className={Css.cardContainerImgContainer}>
        <img
          className={Css.cardContainerImgContainerImg}
          src={props.linkImg}
          alt={props.title}
        />
      </div>
      <div className={Css.cardContainerDataContainer}>
        <div className={Css.cardContainerDataContainerTitle}>
          <TextNormal>{props.title}</TextNormal>
        </div>
        <div className={Css.cardContainerDataContainerPrice}>
          <TextExtraLarge>{props.price}</TextExtraLarge>
        </div>
      </div>
    </div>
  );
};
