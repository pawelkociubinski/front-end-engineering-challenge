/* @flow */
// Dependencies
import React, { PureComponent } from 'react';
// Styles
import { Row, File, Favorite, More, Content, Column, Details, Name, Bold, Property } from './styles';


const Item = (props) => {
  const { country, modified_by, updated_at, title, name, status, stared, document_type } = props;

  return (
    <Row>
      <File
        type={document_type}
        icon={document_type}
        size={50}
      />
      <Content>
        <div>
          <Name>{name}</Name>
          <Property><Bold>Title:</Bold> {title}</Property>
        </div>
        <Details>
          <Column>
            <Property><Bold>Modified By:</Bold> {modified_by}</Property>
            <Property><Bold>Status:</Bold> {status}</Property>
          </Column>
          <Column>
            <Property><Bold>Last Modified:</Bold> {updated_at}</Property>
            <Property><Bold>Country:</Bold> {country}</Property>
          </Column>
        </Details>
      </Content>
      <Favorite
        stared={stared}
        icon="star"
        size={20}
      />
      <More icon="more" size={20} />
    </Row>
  );
}

export default Item;
