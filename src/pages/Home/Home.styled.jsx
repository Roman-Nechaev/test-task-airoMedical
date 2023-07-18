import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 25px;
`;

export const WrapperList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  /* justify-content: center; */

  height: 650px;
  overflow: scroll;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(800px);
  scroll-snap-type: y mandatory;
`;
