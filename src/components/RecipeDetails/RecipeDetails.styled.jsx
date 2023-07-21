import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrapperCards = styled.div`
  display: flex;
  text-indent: 30px;
  min-height: 500px;
  font-weight: 400;

  justify-content: center;
  padding-top: 110px;
  padding-bottom: 20px;
`;

export const ImgWrapper = styled.div`
  height: 450px;
  padding: 20px;
  margin-top: 45px;

  background-color: #4bbbe464;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 30px;
`;

export const DetailImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const LinkBack = styled(Link)`
  position: fixed;
  padding: 10px;
  background-color: #ffffff67;
  border-radius: 30px;
  text-indent: 0;
  color: #ffffff;
  top: 95px;
  left: 55px;
  text-shadow: 1px 0 1px #000, 0 1px 1px #000, -1px 0 1px #000, 0 -1px 1px #000;

  cursor: pointer;
  transition: all 0.3s;
  :hover {
    color: #ff9100;
  }
`;

export const WrapperInfo = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.23);
  padding: 15px;

  margin-left: 60px;

  border-radius: 10px;
  width: 700px;

  min-height: 150px;
`;

export const Title = styled.h1`
  padding: 5px;
  text-align: center;
  text-decoration: underline;
  text-shadow: rgb(0, 0, 0) 1px 0px 1px, rgb(0, 0, 0) 0px 1px 1px,
    rgb(0, 0, 0) -1px 0px 1px, rgb(0, 0, 0) 0px -1px 1px;
`;

export const Desc = styled.p`
  padding-top: 8px;
  font-size: 18px;
`;

export const Tips = styled.p`
  padding-top: 10px;

  font-size: 18px;
  & span {
    color: #77d4c9;
    text-shadow: rgb(0, 0, 0) 1px 0px 1px, rgb(0, 0, 0) 0px 1px 1px,
      rgb(0, 0, 0) -1px 0px 1px, rgb(0, 0, 0) 0px -1px 1px;
  }
`;

export const FirstBrewed = styled.p`
  font-size: 15px;
  text-align: end;
  color: #ffffffcb;
  text-shadow: rgb(0, 0, 0) 1px 0px 1px, rgb(0, 0, 0) 0px 1px 1px,
    rgb(0, 0, 0) -1px 0px 1px, rgb(0, 0, 0) 0px -1px 1px;
`;
