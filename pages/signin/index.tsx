import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Css from "./index.module.css";
import { Layout } from "@/components/layout";
import { FormSignIn } from "@/components/form-sign-in";
import { FormCode } from "@/components/form-code";
import { useAuth, useAuthToken } from "@/hooks/hooks";
import { useRecoilState } from "recoil";
import { userEmailSesion } from "@/atoms/atoms";
import { Spinner } from "@/components/spinner";

const ProductPage = () => {
  const [codeOn, setCodeOn] = useState(false);
  const [emailUser, setEmailUser] = useRecoilState(userEmailSesion);
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  //cuando se envia el form, se llama al hook que crea el auth y envia el cod al mail
  //o solo envia el cod si ya se habia creado el auth
  const submitHandler = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    const email = e.target.email.value;

    const result = await useAuth(email);

    if (result) {
      setEmailUser({ email: email });
      setCodeOn(!codeOn);
    }

    setIsLoading(false);
  };

  const submitHandlerCode = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    const code = e.target.code.value;

    const result = await useAuthToken(emailUser.email, code);

    if (result) {
      localStorage.setItem("Token", result);
      setIsLoading(false);
      alert("Se ingresó correctamente a tu cuenta");
      push("/");
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("Token")) {
      alert(
        "Ya tienes uns sesión iniciada en curso, si quieres entrar con otra cuenta, por favor desconectese de la cuenta actual."
      );
      push("/");
    }
  }, []);

  return (
    <Layout>
      <div className={Css.containerProducts}>
        {isLoading && <Spinner></Spinner>}
        <div
          style={!codeOn ? { display: "inherit" } : { display: "none" }}
          className={Css.containerFormSignIn}
        >
          <FormSignIn
            loading={isLoading}
            submit={submitHandler}
            title="Ingresar"
            label="Email"
            nameInput="email"
            placeHolder="pepito@gmail.com"
            nameButton="Continuar"
          ></FormSignIn>
        </div>
        <div
          style={codeOn ? { display: "inherit" } : { display: "none" }}
          className={Css.containerFormCode}
        >
          <FormCode
            loading={isLoading}
            submit={submitHandlerCode}
            nameInput="code"
            title="Código"
            placeHolder="12345"
            nameButton="Ingresar"
          ></FormCode>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
