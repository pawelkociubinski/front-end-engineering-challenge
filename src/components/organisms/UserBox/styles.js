import styled from 'styled-components';

import Icon from '../../atoms/Icon';

export const Container = styled.div`
  border-radius: 6px;
  border: solid 1px #E2E2E2;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  margin: 100px auto;
  max-width: 360px;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  background-color: #FFFFFF;
  height: 50px;
  position: relative;
  width: 100%;
`;

export const Content = styled.div`
  align-items: center;
  background-color: #F8FBFD;
  box-shadow: inset 0 3px 5px -3px rgba(142, 142, 142, 0.5);
  display: flex;
  flex-direction: column;
  min-height: 250px;
  overflow: hidden;
  padding: 25px 20px 20px;
`;

export const Title = styled.div`
  color: #2C4A71;
  font-size: 16px;
  font-weight: 600;
  margin: 15px 0 25px;
`;

export const AvatarWrapper = styled.div`
  bottom: -50%;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  height: 54px;
  width: 54px;
`;
