/* @flow */
// Dependencies
import React, { PureComponent } from 'react';
// Custom
import Item from './Item';
// Styles
import { Container } from './styles';


const Table = (props) => {
  const { collection } = props;
  return (
    <Container>
      {collection.map((row) => (
        <Item {...row} />
      ))}
    </Container>
  );
}

export default Table;
