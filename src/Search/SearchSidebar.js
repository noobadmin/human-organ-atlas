import { Switch } from '@rebass/forms/styled-components';
import shallow from 'zustand/shallow';

import { useAppStore } from '../App/stores';
import { Card, Flex, Text, Button } from '../Primitives';
import { initialFiltersByName } from '../filters';
import FilterGroup from './FilterGroup';

// const ORDER = ['title', 'type', 'keywords'];
// const sortFilters = (a, b) => ORDER.indexOf(a?.name) - ORDER.indexOf(b?.name);

const GROUPS = {
  Patient: ['sex', 'age', 'size', 'weight'],
  Sample: ['organ', 'type', 'pathology', 'preparation'],
  Acquisition: ['technique', 'date'],
  Parameters: [
    'voxel_size',
    'average_energy',
    'surface_dose_rate',
    'integrated_dose',
  ],
};

function SearchSidebar() {
  const [loadOnScroll, toggleLoadOnScroll] = useAppStore(
    (state) => [state.loadOnScroll, state.toggleLoadOnScroll],
    shallow
  );

  return (
    <Flex column gap={[3, 3, 3, 4]}>
      {Object.entries(GROUPS).map(([title, group]) => (
        <FilterGroup
          key={group}
          title={title}
          filters={group.map((filterName) => initialFiltersByName[filterName])}
        />
      ))}
      <Card mb={3}>
        <Flex alignItems="center">
          <Button
            variant="base"
            sx={{
              py: [0, 0, 1],
              width: '100%',
              ':hover': { textDecoration: 'underline' },
            }}
            onClick={() => toggleLoadOnScroll()}
          >
            <Switch as="div" checked={loadOnScroll} tabIndex={-1} flex="none" />
            <Text ml={3}>Load more results on&nbsp;scroll</Text>
          </Button>
        </Flex>
      </Card>
    </Flex>
  );
}

export default SearchSidebar;
