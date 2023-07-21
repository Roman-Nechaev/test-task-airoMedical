import { Header, NavLinks, NavigateList, LogoImg } from './AppBar.styled';
import logo from '../../assets/hops.png';
import { Link } from 'react-router-dom';

const AppBar = () => {
  return (
    <Header>
      <Link to="/">
        <LogoImg src={logo} alt="Logo" />
      </Link>
      <NavigateList>
        <NavLinks to="/">Recipe list</NavLinks>
      </NavigateList>
    </Header>
  );
};

export default AppBar;
