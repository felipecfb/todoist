import React from 'react';

import CheckIcon from '../../assets/check.png';
import TrashIcon from '../../assets/trash.png';
import { Container, Task, TaskContent, Icon, Check, IconCheck } from './styles';

export function TaskList() {
  return (
    <Container>
      <Task>
        <Check>
          <IconCheck src={CheckIcon} alt="" />
        </Check>
        <TaskContent>Comprar pão</TaskContent>
        <Icon src={TrashIcon} alt="" />
      </Task>
    </Container>
  )
};
