/* @flow */
// Dependencies
import React, { Fragment } from 'react';
// Custom
import Icon from '../../atoms/Icon';
import Link from './Link';
import Avatar from '../../atoms/Avatar';
// Constants
import * as routes from '../../../constants/routes';
// Styles
import { Container, Logo, Ul, Li, Name, AvatarWrapper, Nav, Center } from './styles';

type Props = {
  changeRoute: any,
  links: any,
  user: any,
}

const Navigation = (props: Props) => {
  const { links, changeRoute, user } = props;

  return (
    <Container>
      <Center>
        <Link
          route={routes.HOME_PAGE}
          changeRoute={changeRoute}
        >
          <Fragment>
            <Logo
              icon="logo"
              size={30}
            />
            <Name>LIFE SCIENCES</Name>
          </Fragment>
        </Link>
        <Ul>
          {links.map((link) => (
            <Link
              {...link}
              changeRoute={changeRoute}
            >
              <Li>BROWSE</Li>
            </Link>
          ))}
        </Ul>
      </Center>
      <AvatarWrapper>
        <Avatar small initials={user.initials} />
      </AvatarWrapper>
    </Container>
  )
}
export default Navigation;
