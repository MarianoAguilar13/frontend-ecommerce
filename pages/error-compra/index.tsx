import React from "react";
import { Layout } from "@/components/layout";
import Css from "./index.module.css";
import { Title } from "@/ui/typography";

const ErrorCompra = () => {
  return (
    <Layout>
      <div className={Css.containerThanks}>
        <Title>
          Su compra no se pudo realizar, por favor realice otro pedido, disculpe
          las molestias.
        </Title>
      </div>
    </Layout>
  );
};

export default ErrorCompra;
