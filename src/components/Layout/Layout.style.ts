import styled from "styled-components";

import bg from "./assets/bg.png";

export const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-image: url(${bg});
`;
