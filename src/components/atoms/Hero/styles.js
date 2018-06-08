import styled from 'styled-components';

import background from '../../../assets/images/sky.png';

export const Container = styled.div`
  align-items: center;
  background-image: url(${background});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 225px;
  width: 100%;
`;

export const H1 = styled.h1`
  margin: 0;
`;
