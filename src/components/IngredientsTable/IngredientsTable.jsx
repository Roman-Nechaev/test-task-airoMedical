import PropTypes from 'prop-types';

import {
  Container,
  Table,
  WrapperTable,
  Title,
  Yeast,
} from './IngredientsTable.styled';

const IngredientsTable = ({ ingredients }) => {
  return (
    <Container>
      <Title>Ingredients:</Title>
      <WrapperTable>
        <div>
          <Table>
            <caption>Malt</caption>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Unit</th>
              </tr>
              {ingredients.malt.map(({ name, amount }, index) => (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{amount.value}</td>
                  <td>{amount.unit}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <div>
          <Table>
            <caption>Hops</caption>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Unit</th>
                <th>Add</th>
              </tr>
              {ingredients.hops.map(({ name, amount, add }, index) => (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{amount.value}</td>
                  <td>{amount.unit}</td>
                  <td>{add}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </WrapperTable>
      <Yeast>Yeast: {ingredients.yeast}</Yeast>
    </Container>
  );
};

IngredientsTable.propTypes = {
  ingredients: PropTypes.object,
};

export default IngredientsTable;
