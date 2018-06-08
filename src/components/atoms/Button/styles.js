import styled from 'styled-components';

export default {
  primary: {
    backgroundColor: '#2B4A71',
  },
  transparent: {
    backgroundColor: 'transparent',
  },
};

export const StyledButton = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 100px;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  font-size: 12px;
  font-weight: 600;
  height: 48px;
  justify-content: center;
  outline: none;
  overflow: hidden;
  padding: 0 40px;
  position: relative;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
