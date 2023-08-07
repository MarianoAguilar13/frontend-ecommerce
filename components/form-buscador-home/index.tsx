import React, { useState } from "react";
import Css from "./index.module.css";
import { InputAlCien } from "@/ui/inputs";
import { ButtonWineAl100, ButtonGreenAl100 } from "@/ui/buttons";
import { Subtitle } from "@/ui/typography";

type PropsForm = {
  title: string;
  submit: any;
  placeholder: string;
  nameButton: string;
  nameInput: string;
};

export const FormBuscadorHome = (props: PropsForm) => {
  return (
    <form className={Css.fromBuscadorHome} onSubmit={props.submit}>
      <Subtitle>{props.title}</Subtitle>
      <InputAlCien
        name={props.nameInput}
        placeholder={props.placeholder}
      ></InputAlCien>
      <ButtonGreenAl100>{props.nameButton}</ButtonGreenAl100>
    </form>
  );
};
