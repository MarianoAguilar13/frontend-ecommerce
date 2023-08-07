import { useEffect, useState } from "react";
import Css from "./index.module.css";
import { Layout } from "@/components/layout";
import { Subtitle, SubtitleWine } from "@/ui/typography";
import { CardProduct } from "@/components/card-product";
import { productId } from "@/atoms/atoms";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { useCreateOrder, useMe, useProduct } from "@/hooks/hooks";
import { productData } from "@/atoms/atoms";
import { Spinner } from "@/components/spinner";

const ProductPage = () => {
  const [id, setId] = useRecoilState(productId);
  const [product, setProduct] = useRecoilState(productData);
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const callbackProduct = (obj: any) => {
    console.log("hola soy el objeto que sera la data: ", obj);

    const data = {
      key: obj.object.objectID,
      id: obj.object.objectID,
      description: obj.object.Description,
      title: obj.object.Name,
      price: obj.object.UnitCost,
      linkImg: obj.object.Images[0].url,
    };

    setProduct(data);
    setVisible(true);
  };

  useEffect(() => {
    if (id.id) {
      useProduct(id.id, callbackProduct);
    }
    setVisible(false);
  }, []);

  return visible ? (
    <Layout>
      <div className={Css.containerProducts}>
        {isLoading && <Spinner></Spinner>}
        <div className={Css.containerProductsCards}>
          <CardProduct
            setLoading={setIsLoading}
            loading={isLoading}
            key={product.key}
            id={product.id}
            description={product.description}
            title={product.title}
            price={"$ " + product.price}
            linkImg={product.linkImg}
          ></CardProduct>
        </div>
      </div>
    </Layout>
  ) : (
    <Layout>
      <div className={Css.containerProducts}>
        <div className={Css.containerProductsCards}></div>
      </div>
    </Layout>
  );
};

export default ProductPage;
