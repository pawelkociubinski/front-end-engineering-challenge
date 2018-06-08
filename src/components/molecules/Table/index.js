/* @flow */
// Dependencies
import React, { PureComponent } from 'react';
// Custom
import Item from './Item';
// Styles
import { Container } from './styles';
// Types
import type { Document } from '../../../types/models';

type Props = {
  collection: Array<Document>
}

const Table = (props: Props) => {
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
