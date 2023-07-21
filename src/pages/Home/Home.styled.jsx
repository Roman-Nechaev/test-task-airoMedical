import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 25px;
`;

export const WrapperList = styled.ul`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  width: 650px;

  height: 570px;
  overflow: scroll;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(800px);
  scroll-snap-type: y mandatory;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const DeleteBtn = styled.button`
  position: fixed;
  top: 15px;
  right: 270px;
  font-weight: bold;
  padding: 10px;
  border-radius: 8px;
  outline: none;
  border: none;
  transition: 0.3s;
  z-index: 99;
  cursor: pointer;
  background: #ff0000;
  :hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.25);
  }
  sup {
    font-weight: bold;
    font-size: 15px;
    margin-left: 3px;
  }
`;
