import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Flex } from 'rebass/styled-components';

import { useSearchStore } from '../App/stores';

function NavLink({ to, exact, sx, ...props }) {
  const match = useRouteMatch({ path: to, exact });
  const search = useSearchStore((state) => state.search);

  return (
    <Flex
      as={Link}
      to={to === '/search' ? { pathname: to, search } : to}
      sx={{
        alignItems: 'center',
        px: [2, 3, 3, 4],
        bg: !!match && 'background',
        color: match ? 'text' : 'inherit',
        fontSize: [0, 1, 1, 2],
        fontWeight: 'semibold',
        textDecoration: 'none',
        textTransform: 'uppercase',
        ':hover': { color: 'text', bg: 'background' },
        ...sx,
      }}
      {...props}
    />
  );
}

export default NavLink;
