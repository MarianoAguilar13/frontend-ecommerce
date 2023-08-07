import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Css from "./index.module.css";
import { Layout } from "@/components/layout";
import { Subtitle, SubtitleWine, TextLargeWine } from "@/ui/typography";
import { CardProductSearch } from "@/components/card-product-search";
import { useSearch } from "@/hooks/hooks";
import { ButtonGreen } from "@/ui/buttons";
import { Spinner } from "@/components/spinner";

const ProductPage = () => {
  const router = useRouter();
  const [results, setResults] = useState([]);
  const [pagination, setPagination] = useState({
    offset: 0,
    limit: 0,
    total: 0,
  });
  const [offset, setOffset] = useState(Number);
  const [limit, setLimit] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  //funcion para poder usar el async await dentro del useEffect
  async function search(query: string) {
    const dataProduct = await useSearch(query as string, offset, limit);

    if (dataProduct) {
      setResults(dataProduct.results);
      setPagination(dataProduct.pagination);
    }
  }

  useEffect(() => {
    if (router.query.q) {
      setOffset(0);

      const query = router.query.q;

      search(query as string);
    }
  }, [router]);

  const verMas = async (e: any) => {
    e.preventDefault();

    const query = router.query.q;
    if (offset + 5 < pagination.total) {
      //le sumo 5 mas al offset para traerme mas resultados

      console.log(offset);

      const dataProduct = await useSearch(query as string, offset + 5, limit);
      //lo tengo que poner despues porque como tarda en actualizarse, para el proximo
      //click ya llega a sumar bien
      const newOffset = offset + 5;
      setOffset(newOffset);

      if (dataProduct) {
        setResults(results.concat(dataProduct.results));
        setPagination(dataProduct.pagination);
      }
    }
  };

  return (
    <Layout>
      <div className={Css.containerProducts}>
        <div className={Css.containerProductsTitle}>
          <SubtitleWine>Resultados de la búsqueda</SubtitleWine>
        </div>
        <div className={Css.containerNumTotalResultados}>
          <TextLargeWine>Total de resultados: {pagination.total}</TextLargeWine>
        </div>
        <div className={Css.containerProductsCards}>
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
    </Layout>
  );
};

export default ProductPage;
