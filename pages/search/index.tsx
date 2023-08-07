import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Css from "./index.module.css";
import { Layout } from "@/components/layout";
import { Subtitle, SubtitleWine } from "@/ui/typography";

const ProductPage = () => {
  return (
    <Layout>
      <div className={Css.containerProducts}>
        <div className={Css.containerProductsTitle}>
          <SubtitleWine>Resultados de la búsqueda</SubtitleWine>
        </div>
        <div className={Css.containerProductsCards}></div>
      </div>
    </Layout>
  );
};

export default ProductPage;
