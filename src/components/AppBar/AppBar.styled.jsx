import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  margin: 0 auto;

  padding: 20px 60px;

  justify-content: center;

  min-width: 100%;
  z-index: 99;
  background: rgba(255, 255, 255, 0.085);
  backdrop-filter: blur(3px);

  align-items: center;
`;

export const LogoImg = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 6px;
`;

export const NavigateList = styled.nav`
  display: flex;
  justify-content: end;

  font-size: 1.3em;
  & .active {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #56e6d5,
      0 0 30px #56e6d5, 0 0 40px #56e6d5, 0 0 55px #56e6d5, 0 0 75px #56e6d5;
  }
`;

export const NavLinks = styled(NavLink)`
  color: #ffffff;

  transition: all 0.5s;

  :hover {
    color: #56e6d5;
  }
  sup {
    font-weight: bold;
    font-size: 18px;
    margin-left: 3px;
  }
`;
