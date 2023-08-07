import Css from "./index.module.css";
import { SubtitleWine, TextNormalWine } from "@/ui/typography";
import { InputAlCien } from "@/ui/inputs";
import { ButtonGreenAl100 } from "@/ui/buttons";

type PropsFormSignIn = {
  title: string;
  nameButton: string;
  submit: any;
  placeHolder: string;
  nameInput?: string;
  loading: any;
};

export const FormCode = (props: PropsFormSignIn) => {
  return (
    <form className={Css.formContainer} onSubmit={props.submit}>
      <SubtitleWine>{props.title}</SubtitleWine>
      <InputAlCien
        name={props.nameInput}
        placeholder={props.placeHolder}
      ></InputAlCien>
      <TextNormalWine className={Css.textCenter}>
        Te envíamos un código a tu mail
      </TextNormalWine>
      <ButtonGreenAl100 disabled={props.loading}>
        {props.nameButton}
      </ButtonGreenAl100>
    </form>
  );
};
