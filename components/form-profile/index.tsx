import Css from "./index.module.css";
import { SubtitleWine } from "@/ui/typography";
import { TextFieldAl100 } from "@/ui/inputs";
import { ButtonGreenAl100 } from "@/ui/buttons";

type PropsFormSignIn = {
  submit: any;
  name?: string;
  tel?: string;
  direccion?: string;
  loading: any;
};

export const FormProfile = (props: PropsFormSignIn) => {
  return (
    <form className={Css.formContainer} onSubmit={props.submit}>
      <SubtitleWine>Perfil</SubtitleWine>
      <TextFieldAl100
        valor={props.name}
        name="name"
        label="Nombre Completo"
        placeholder=""
      ></TextFieldAl100>
      <TextFieldAl100
        valor={props.direccion}
        name="direccion"
        label="Dirección"
        placeholder=""
      ></TextFieldAl100>
      <TextFieldAl100
        valor={props.tel}
        name="tel"
        label="Teléfono"
        placeholder=""
      ></TextFieldAl100>
      <ButtonGreenAl100 disabled={props.loading}>Guardar</ButtonGreenAl100>
    </form>
  );
};
