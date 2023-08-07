import styled from "styled-components";
import { TextNormal } from "../typography";

export const LabelInput = styled(TextNormal)`
  margin: 0;
`;

export const LabelInputWine = styled(TextNormal)`
  margin: 0;
  color: var(--wine);
`;

export const InputNormal = styled.input`
  width: 163px;
  height: 37px;
  border: solid black 3px;
  border-radius: 8px;
  font-size: 18px;
`;

export const InputBuscar = styled(InputNormal)`
  width: 250px;
`;

export const InputAlCien = styled(InputNormal)`
  width: 100%;
`;

export const TextFieldNormal = ({
  label = "label",
  placeholder = "",
  name = "",
  value = "",
}) => {
  return (
    <label>
      <LabelInput>{label}</LabelInput>
      <InputNormal
        value={value}
        name={name}
        placeholder={placeholder}
      ></InputNormal>
    </label>
  );
};

export const TextFieldAl100 = ({
  label = "label",
  placeholder = "",
  name = "",
  valor = "",
}) => {
  return (
    <label>
      <LabelInputWine>{label}</LabelInputWine>
      <InputAlCien
        defaultValue={valor}
        name={name}
        placeholder={placeholder}
      ></InputAlCien>
    </label>
  );
};
