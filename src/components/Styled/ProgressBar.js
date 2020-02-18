import styled from 'styled-components';

export const ProgressBar = styled.div`
  height: 8px;
  width: ${props => (props.width ? props.width : 0)};

  background: #0ccd98;
  border-radius: 5px;
`;
