import styled from 'styled-components';

const Styles = {};

Styles.Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 14vh;
  min-width: 100vw;
  position: fixed;
  z-index: 999;
  padding: 0vh 5vh;
`;

Styles.NavItems = styled.p`
  font: normal normal 400 16px/7px 'Dosis', sans-serif;
  color: #fff;
`;

export default Styles;
