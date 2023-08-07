import Css from "./index.module.css";
import React from "react";

type PropsCardProduct = {
  name: string;
  cantidad: string;
  createDate: string;
  status: string;
  price: string;
};

export const RowProduct = (props: PropsCardProduct) => {
  return (
    <tr>
      <td className={Css.UnaTd}>{props.name}</td>
      <td className={Css.UnaTd}>{props.cantidad}</td>
      <td className={Css.UnaTd}>{props.price}</td>
      <td className={Css.UnaTd}>{props.createDate}</td>
      <td className={Css.UnaTd}>{props.status}</td>
    </tr>
  );
};
