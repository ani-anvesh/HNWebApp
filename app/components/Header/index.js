/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import Styles from './styledComponets';

function Header() {
  return (
    <Styles.Flex>
      <h1 style={{ color: '#fff' }}>Anvesh</h1>
      <div>
        <Styles.NavItems>Anvesh</Styles.NavItems>
      </div>
    </Styles.Flex>
  );
}

export default memo(Header);
