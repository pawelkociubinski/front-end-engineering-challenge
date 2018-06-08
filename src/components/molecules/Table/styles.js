import styled from 'styled-components';
import Icon from '../../atoms/Icon';

const documentColor = {
  excel: '#388E3C',
  word: '#1976D2',
  pdf: '#FF3D22',
}

export const Container = styled.div`
  background-color: #F9F9F9;
  border-radius: 6px;
  border: 1px solid #E2E2E2;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  overflow: hidden;
  padding: 10px;
  width: 100%;
`;

export const Row = styled.div`
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 6px;
  box-shadow: 0 0.0625rem 0.25rem 0 rgba(0, 0, 0, 0.2);
  display: flex;
  height: 110px;
  margin-bottom: 10px;
  padding: 10px 20px;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  justify-content: space-between;
`;

export const File = styled(Icon)`
  fill: ${(props) => documentColor[props.type]};
  margin-right: 20px;
`;

export const Favorite = styled(Icon)`
  fill: ${(props) => props.stared ? "#FFB14A" : "#616161"};
  margin-right: 10px;
`;

export const More = styled(Icon)`
  fill: #616161;
`;

export const Details = styled.div`
  display: flex;
`;

export const Column = styled.div`
  width: 50%;
`;

export const Name = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #2C95DD;
`;

export const Bold = styled.span`
  font-weight: 700;
  margin-right: 5px;
`;

export const Property = styled.div`
  font-size: 12px;
  color: #212121;
  font-weight: 400;
`;
