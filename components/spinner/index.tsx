import Css from "./index.module.css";
import { SubtitleWhite } from "@/ui/typography";

type PropsSpinner = {};

export const Spinner = (props: PropsSpinner) => {
  return (
    <div className={Css.spinnerContainer}>
      <SubtitleWhite>Cargando...</SubtitleWhite>
      <div className={Css.spinner}></div>
    </div>
  );
};
