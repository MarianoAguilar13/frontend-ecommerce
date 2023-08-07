import React from "react";
import { Layout } from "@/components/layout";
import Css from "./index.module.css";
import { Title } from "@/ui/typography";

const Thanks = () => {
  return (
    <Layout>
      <div className={Css.containerThanks}>
        <Title>Gracias por su compra, que tenga un buen día!!!</Title>
      </div>
    </Layout>
  );
};

export default Thanks;
