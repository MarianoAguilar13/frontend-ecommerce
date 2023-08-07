import Css from "./index.module.css";
import React, { useEffect, useState } from "react";
import { HeaderHome } from "@/components/header-home";
import { Footer } from "@/components/footer";
import { FormBuscadorHome } from "@/components/form-buscador-home";
import { CardProductSearch } from "@/components/card-product-search";
import { Subtitle, SubtitleWine } from "@/ui/typography";
import { useSearch } from "@/hooks/hooks";
import { useProduct } from "@/hooks/hooks";
import { useRecoilState } from "recoil";
import { productId } from "@/atoms/atoms";
import { useRouter } from "next/navigation";

const Home = () => {
  const [results, setResults] = useState([]);
  const [pagination, setPagination] = useState([0, 5]);
  const { push } = useRouter();

  const submitHandler = async (e: any) => {
    e.preventDefault();

    const query = e.target.buscar.value;

    console.log(query);

    push(`/search/${query}`);
  };

  return (
    <div className={Css.containerHome}>
      <HeaderHome></HeaderHome>
      <div className={Css.containerForm}>
        <div className={Css.containerFormMedidas}>
          <FormBuscadorHome
            placeholder="Heladera"
            submit={submitHandler}
            title="E-Commerce Buscador"
            nameButton="Buscar"
            nameInput="buscar"
          ></FormBuscadorHome>
        </div>
      </div>
      <div className={Css.containerProductosDestacados}>
        <div className={Css.containerProductosDestacadosTitle}>
          <SubtitleWine>Productos destacados</SubtitleWine>
        </div>
        <div className={Css.containerProductosDestacadosCards}></div>
      </div>
      <Footer></Footer>
    </div>
  );
};
/*
 {results.map((r: any) => (
            <CardProductSearch
              key={r.objectID}
              id={r.objectID}
              description={r.Description}
              title={r.Name}
              price={"$ " + r.UnitCost}
              linkImg={r.Images[0].url}
            ></CardProductSearch>
          ))}
*/
export default Home;
