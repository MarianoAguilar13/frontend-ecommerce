import styled from "styled-components";

export const ButtonBase = styled.button`
  border: none;
  border-radius: 8px;
  width: 163px;
  height: 37px;
  color: white;
  font-family: var(--poppins);
  font-size: 16px;
  font-weight: 700;
`;

export const ButtonBlue = styled(ButtonBase)`
  background-color: var(--azulino);
  color: whitesmoke;
`;

export const ButtonGreen = styled(ButtonBase)`
  background-color: var(--verdeLoro);
  color: whitesmoke;
`;

export const ButtonWine = styled(ButtonBase)`
  background-color: var(--wine);
  color: whitesmoke;
`;

export const ButtonBlueAl100 = styled(ButtonBlue)`
  width: 100%;
`;

export const ButtonGreenAl100 = styled(ButtonGreen)`
  width: 100%;
`;

export const ButtonWineAl100 = styled(ButtonWine)`
  width: 100%;
`;

export const ButtonComprar = styled(ButtonBase)`
  width: 100%;
  height: 65px;
  background-color: var(--azulino);
  font-size: 32px;
`;
/*
export const Paleta = () => {
  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "#4F7CAC",
        }}
      ></div>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "#91E5F6",
        }}
      ></div>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "#83ee9e",
        }}
      ></div>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "#4d4ab1",
        }}
      ></div>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "#14c46c",
        }}
      ></div>
    </div>
  );
};
*/
