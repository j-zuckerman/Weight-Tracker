import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';

export const FloatingActionButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledFloatingActionButton = styled(Fab)`
  background-color: #0ccd98;
  border-radius: 35px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 35px;
`;
