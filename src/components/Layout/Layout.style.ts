import styled from "styled-components";

import bg from "./assets/bg.png";

export const Wrapper = styled.div`
  --horizontal-padding: 80px;

  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-image: url(${bg});
  background-color: purple;
  color: white;
`;
