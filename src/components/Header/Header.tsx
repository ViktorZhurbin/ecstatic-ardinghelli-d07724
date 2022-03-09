import LogoIcon from "../../../assets/icons/logo.svg";

import { Logo, Wrapper } from "./Header.style";

export const Header = () => {
  return (
    <Wrapper>
      <Logo>
        <LogoIcon />
        Bitcasino.io
      </Logo>
    </Wrapper>
  );
};
