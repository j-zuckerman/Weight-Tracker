import styled from 'styled-components';

export const ProgressBar = styled.div`
  height: 25px;
  width: ${props => (props.width ? props.width : 0)};
  color: blue;
  background: blue;
`;
