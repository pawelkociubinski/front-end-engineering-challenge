import styled from "styled-components";

import Icon from '../Icon';

export const Container = styled.div`
  background-color: #FFFFFF;
  border-radius: 6px;
  border: 1px solid #DDDDDD;
  display: flex;
  font-size: 16px;
  height: 52px;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const StyledTextField = styled.input`
  background-color: transparent;
  border: 0;
  height: 100%;
  outline: none;
  padding: ${(props) => props.searchable ? "0 35px" : "0 15px"};
  width: 100%;

`;

export const GroupedTextFields = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${Container} {
    &:first-child {
      border-radius: 4px 4px 0 0;
    }
    &:last-child {
      border-radius: 0 0 4px 4px;
    }
  }
`;

export const Loupe = styled(Icon)`
  left: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const Close = styled.div`
  display: flex;
  height: 16px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
`;
