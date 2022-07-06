import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Row } from 'src/components/flex-box';
import { Node } from 'src/components/tree-select';
import { Catalogue } from '../catalogue';
import { CanvasRoutes } from '../canvas-routes';
import { catalogueTree } from 'src/constants';

const Container = styled(Row)`
  width: 100vw;
  height: 100vh;
`;

export const Root = () => {
  const navigate = useNavigate();
  const onSelect = (selected: any) => {
    const value = selected && selected.value;
    if (value) {
      navigate(value);
    }
  };
  return (
    <Container>
      <Catalogue treeData={catalogueTree as Node[]} onSelect={onSelect} />
      <CanvasRoutes />
    </Container>
  );
};
