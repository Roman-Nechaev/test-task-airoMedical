import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 25px;
  padding-bottom: 15px;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  text-decoration: underline;
  text-shadow: rgb(0, 0, 0) 1px 0px 1px, rgb(0, 0, 0) 0px 1px 1px,
    rgb(0, 0, 0) -1px 0px 1px, rgb(0, 0, 0) 0px -1px 1px;
`;

export const Yeast = styled.p`
  text-align: end;

  font-size: 20px;

  text-shadow: rgb(0, 0, 0) 1px 0px 1px, rgb(0, 0, 0) 0px 1px 1px,
    rgb(0, 0, 0) -1px 0px 1px, rgb(0, 0, 0) 0px -1px 1px;
`;

export const WrapperTable = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const Table = styled.table`
  margin: 0 auto;
  margin-top: 20px;
  min-width: 200px;
  margin-bottom: 20px;
  border: 5px solid #fff;

  border-top: 5px solid #ffffff;
  border-bottom: 3px solid #fff;
  text-align: center;

  border-collapse: collapse;
  text-shadow: rgb(0, 0, 0) 1px 0px 1px, rgb(0, 0, 0) 0px 1px 1px,
    rgb(0, 0, 0) -1px 0px 1px, rgb(0, 0, 0) 0px -1px 1px;

  font-size: 15px;
  background: #92a382 !important;

  caption {
    font-weight: bold;
    padding: 7px;
    font-size: 28px;
  }
  th {
    font-weight: bold;
    padding: 7px;
    background: #707172;
    border: none;
    font-size: 15px;
    border-top: 3px solid #fff;
  }
  td {
    padding: 7px;
    font-weight: bold;
    border: none;
    border-top: 3px solid #fff;
    border-bottom: 3px solid #fff;
    font-size: 12px;
  }
  tbody tr:nth-child(even) {
    background: #83ada3 !important;
  }
`;
