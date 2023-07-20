import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 25px;
`;

export const WrapperList = styled.div`
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
