import { ThreeDots } from 'react-loader-spinner';
import { WrapperSpin } from './SpinnersLoader.styled';

const SpinnersLoader = () => {
  return (
    <WrapperSpin>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        margin="0 auto"
        color="#1acedb"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </WrapperSpin>
  );
};

export default SpinnersLoader;
