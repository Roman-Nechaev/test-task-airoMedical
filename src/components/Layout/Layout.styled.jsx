import styled from 'styled-components';

export const Background = styled.div`
  min-width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(
    to right,
    rgba(52.5, 52.5, 73.5, 1) calc((50vw - 170px) - 340px),
    rgba(52.5, 52.5, 73.5, 0.84) 50%,
    rgba(52.5, 52.5, 73.5, 0.84) 100%
  );
`;

export const Container = styled.div`
  padding-top: 60px;
  padding-left: 15px;
  padding-right: 15px;
`;
