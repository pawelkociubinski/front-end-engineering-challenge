import styled from 'styled-components';

import Icon from '../../atoms/Icon';

const BluePrint = styled.div`
  border-radius: 50%;
  height: 100%;
  width: 100%;
`;

const Svg = BluePrint.withComponent(Icon);

export const Unknown = Svg.extend`
  background-color: #FFFFFF;
  fill: #002556;
`;

export const Initials = BluePrint.extend`
  align-items: center;
  background-color: #2B4A71;
  color: #FFFFFF;
  display: flex;
  font-size: ${(props) => props.small ? "14px" : "24px"};
  font-weight: 300;
  justify-content: center;
`;
