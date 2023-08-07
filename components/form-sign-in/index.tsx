import Css from "./index.module.css";
import { SubtitleWine } from "@/ui/typography";
import { TextFieldAl100 } from "@/ui/inputs";
import { ButtonGreenAl100 } from "@/ui/buttons";

type PropsFormSignIn = {
  title: string;
  label: string;
  nameButton: string;
  submit: any;
  placeHolder: string;
  nameInput?: string;
  loading: any;
};

export const FormSignIn = (props: PropsFormSignIn) => {
  return (
    <form className={Css.formContainer} onSubmit={props.submit}>
      <SubtitleWine>{props.title}</SubtitleWine>
      <TextFieldAl100
        name={props.nameInput}
        label={props.label}
        placeholder={props.placeHolder}
      ></TextFieldAl100>
      <ButtonGreenAl100 disabled={props.loading}>
        {props.nameButton}
      </ButtonGreenAl100>
    </form>
  );
};
