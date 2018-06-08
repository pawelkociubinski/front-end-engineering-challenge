/* @flow */
// Dependencies
import React from 'react';
// Custom
import Avatar from '../../atoms/Avatar';
// Styles
import { Container, Content, Wrapper, Title, AvatarWrapper } from './styles';

type Props = {|
  +content: any,
  +title: string,
  +initials?: string,
|}

const UserBox = (props: Props) => {
  const { content, title, initials } = props;

  return (
    <Container>
      <Wrapper>
        <AvatarWrapper>
          <Avatar initials={initials} />
        </AvatarWrapper>
      </Wrapper>
      <Content>
        <Title>{title}</Title>
        {content}
      </Content>
    </Container>

  );
};

export default UserBox;
