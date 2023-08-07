import styled from "styled-components";

export const Title = styled.h1`
  color: black;
  font-size: 48px;
  font-weight: bold;
  margin: 0;
  font-family: var(--poppins);
`;

export const Subtitle = styled.h3`
  color: black;
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  font-family: var(--poppins);
`;

export const SubtitleWine = styled(Subtitle)`
  color: var(--wine);
`;

export const SubtitleWhite = styled(Subtitle)`
  color: whitesmoke;
`;

export const TextCardProduct = styled.p`
  color: rgb(0, 0, 0);
  margin: 0;
  font-size: 48px;
  font-weight: bold;
  font-family: var(--poppins);
`;

export const TextExtraLarge = styled.p`
  color: black;
  font-size: 24px;
  font-weight: bold;
  font-family: var(--poppins);
`;

export const TextLarge = styled.p`
  color: black;
  font-size: 20px;
  font-family: var(--poppins);
`;

export const TextLargeWine = styled(TextLarge)`
  color: var(--wine);
`;

export const TextLargeBold = styled(TextLarge)`
  font-weight: 700;
`;

export const TextNormal = styled.p`
  color: black;
  font-size: 16px;
  font-family: var(--poppins);
`;

export const TextWhite = styled(TextNormal)`
  color: whitesmoke;
`;

export const TextNormalWine = styled(TextNormal)`
  color: var(--wine);
`;

export const TextNormalBold = styled(TextNormal)`
  font-weight: 700;
`;

export const TextMini = styled.p`
  color: black;
  font-size: 12px;
  font-family: var(--poppins);
`;
