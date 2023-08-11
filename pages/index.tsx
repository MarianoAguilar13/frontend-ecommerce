import Css from "./index.module.css";
import React, { useEffect, useState } from "react";
import { HeaderHome } from "@/components/header-home";
import { Footer } from "@/components/footer";
import { FormBuscadorHome } from "@/components/form-buscador-home";
import { CardProductSearch } from "@/components/card-product-search";
import { Subtitle, SubtitleWine } from "@/ui/typography";
import { productId } from "@/atoms/atoms";
import { useRouter } from "next/navigation";
import { searchUse } from "@/hooks/hooks";
import { ButtonGreen } from "@/ui/buttons";
import { Spinner } from "@/components/spinner";
import { asyncDb } from "@/hooks/hooks";

const Home = () => {
  const { push } = useRouter();
  const [results, setResults] = useState([]);
  const [pagination, setPagination] = useState({
    offset: 0,
    limit: 0,
    total: 0,
  });
  const [offset, setOffset] = useState(Number);
  const [limit, setLimit] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (e: any) => {
    e.preventDefault();

    const query = e.target.buscar.value;

    console.log(query);

    push(`/search/${query}`);
  };

  //funcion para poder usar el async await dentro del useEffect
  async function search(query: string) {
    const dataProduct = await searchUse(query as string, offset, limit);

    if (dataProduct) {
      setResults(dataProduct.results);
      setPagination(dataProduct.pagination);
    }
  }

  useEffect(() => {
    setOffset(0);
    asyncDb();
    search(" ");
  }, []);

  const verMas = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    if (offset + 3 < pagination.total) {
      //le sumo 5 mas al offset para traerme mas resultados

      console.log(offset);

      const dataProduct = await searchUse(" " as string, offset + 3, limit);
      //lo tengo que poner despues porque como tarda en actualizarse, para el proximo
      //click ya llega a sumar bien
      const newOffset = offset + 3;
      setOffset(newOffset);

      if (dataProduct) {
        setResults(results.concat(dataProduct.results));
        setPagination(dataProduct.pagination);
      }
    }

    setIsLoading(false);
  };

  return (
    <div className={Css.containerHome}>
      <HeaderHome></HeaderHome>
      <div className={Css.containerForm}>
        <div className={Css.containerFormMedidas}>
          <FormBuscadorHome
            placeholder="Chair"
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
        <div className={Css.containerProductosDestacadosCards}>
          {results.map((r: any) => (
            <CardProductSearch
              key={Math.floor(Math.random() * 1000000)}
              id={r.objectID}
              description={r.Description}
              title={r.Name}
              price={"$ " + r.UnitCost}
              linkImg={r.Images[0].url}
            ></CardProductSearch>
          ))}
        </div>
        {isLoading && <Spinner></Spinner>}
        <div className={Css.containerVerMasResultados}>
          <ButtonGreen disabled={isLoading} onClick={verMas}>
            Ver Más
          </ButtonGreen>
        </div>
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
