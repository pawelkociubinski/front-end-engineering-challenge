import styled from 'styled-components';

import Icon from '../../atoms/Icon';

export const Container = styled.div`
  align-items: center;
  background-color: #2c95dd;
  display: flex;
  height: 55px;
  padding: 0 20px;
  width: 100%;
  justify-content: space-between;
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(Icon)`
  fill: white;
`;

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  height: 55px;
  margin-left: 20px;
`;

export const Name = styled.span`
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;
  margin-left: 10px;
`;


export const AvatarWrapper = styled.div`
  height: 30px;
  width: 30px;
`;
