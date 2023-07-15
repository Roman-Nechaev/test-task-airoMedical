import styled from 'styled-components';

export const Container = styled.div``;

export const WrapperList = styled.ul`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin-top: 50px;
  text-align: center;
`;

export const DeleteAllBtn = styled.button`
  position: fixed;
  top: 15px;
  right: 370px;
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
`;
