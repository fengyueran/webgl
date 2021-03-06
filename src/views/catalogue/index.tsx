import React from 'react';
import styled from 'styled-components';

import { TreeSelect, Node } from 'src/components/tree-select';

const Container = styled.div`
  width: 300px;
  height: 100%;
  border-right: 1px solid #e8e8e8;
  flex-shrink: 0;
`;

interface Props {
  treeData: Node[];
  onSelect: (slected: any) => void;
}

export const Catalogue: React.FC<Props> = ({ treeData, onSelect }) => (
  <Container>
    <TreeSelect treeData={treeData} onSelect={onSelect} />
  </Container>
);
