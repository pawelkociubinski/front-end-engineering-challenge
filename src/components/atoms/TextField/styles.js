import styled from "styled-components";

export const Container = styled.div`
  background-color: #FFFFFF;
  border-radius: 6px;
  border: 1px solid #DDDDDD;
  display: flex;
  font-size: 16px;
  height: 52px;
  overflow: hidden;
  width: 100%;
`;

export const StyledTextField = styled.input`
  background-color: transparent;
  border: 0;
  height: 100%;
  outline: none;
  padding: 0 15px;
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
