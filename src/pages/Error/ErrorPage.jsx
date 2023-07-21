import notFound from '../../assets/not-found.png';

import { ImageError, Wrapper } from './ErrorPage.styled';

const ErrorPage = () => {
  return (
    <Wrapper>
      <ImageError src={notFound} alt="Page-Not-Found" />
    </Wrapper>
  );
};

export default ErrorPage;
