import Css from "./index.module.css";
import { Title } from "@/ui/typography";
import { Subtitle } from "@/ui/typography";
import { TextLarge, TextLargeBold } from "@/ui/typography";
import { TextNormal, TextNormalBold, TextMini } from "@/ui/typography";
import { ButtonBlue, ButtonGreen, ButtonWine } from "@/ui/buttons";
import { TextFieldNormal } from "@/ui/inputs";
import { HeaderBuscador } from "@/components/header-buscador";
import { HeaderHome } from "@/components/header-home";
import { Footer } from "@/components/footer";
import { FormBuscadorHome } from "@/components/form-buscador-home";
import { CardProductSearch } from "@/components/card-product-search";

const styleDiv = {
  margin: "0px",
};

const ViewComponents = () => {
  return (
    <div style={styleDiv}>
      <HeaderBuscador></HeaderBuscador>
      <HeaderHome></HeaderHome>
      <Title>Soy un título</Title>
      <Subtitle>Soy un subtitulo</Subtitle>
      <TextLarge>Soy un Texto large</TextLarge>
      <TextLargeBold>Soy un Texto Large Bold</TextLargeBold>
      <TextNormal>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,
        consectetur quos? Autem neque modi alias, laborum praesentium ducimus
        omnis fugiat laudantium aut, consequatur ad dolorem vel a doloremque.
        Laborum, beatae.
      </TextNormal>
      <TextNormalBold>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        repudiandae neque in nesciunt modi incidunt ut explicabo blanditiis
        perferendis, provident laudantium dolorum fugiat ab laboriosam
        praesentium omnis nemo sit architecto.
      </TextNormalBold>
      <TextMini>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officia
        voluptate voluptatum quod. Officiis fuga error laudantium ullam, at
        deserunt. Sit animi placeat labore cum odio veritatis ratione quibusdam
        tempore?
      </TextMini>

      <ButtonBlue
        onClick={(e) => {
          e.preventDefault();
          console.log("Soy el ButtonBlue y me hicieron click");
        }}
      >
        Button Blue
      </ButtonBlue>
      <ButtonGreen
        onClick={(e) => {
          e.preventDefault();
          console.log("Soy el ButtonGreen y me hicieron click");
        }}
      >
        Button Green
      </ButtonGreen>
      <ButtonWine
        onClick={(e) => {
          e.preventDefault();
          console.log("Soy el ButtonWine y me hicieron click");
        }}
      >
        Button Wine
      </ButtonWine>
      <TextFieldNormal
        label="Soy un TextFieldNormal"
        placeholder="TextFieldNormal"
      ></TextFieldNormal>
      <div className={Css.formContainer}>
        <FormBuscadorHome
          placeholder="Heladera"
          submit={(e: any) => {
            e.preventDefault();
            const valueInput = e.target.buscar.value;
            console.log(
              "Hola me hicieron un submit y se va a buscar: ",
              valueInput
            );
          }}
          title="E-Commerce Buscador"
          nameButton="Buscar"
          nameInput="buscar"
        ></FormBuscadorHome>
      </div>
      <CardProductSearch
        title="Heladera Gafa Hgf 357aw 281lts C/freezer Platino"
        price="$225.441"
        linkImg="https://www.torca.com.ar/images/58554-1.jpg"
      ></CardProductSearch>
      <Footer></Footer>
    </div>
  );
};

export default ViewComponents;
