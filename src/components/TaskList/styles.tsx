import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 2rem;
`

export const Task = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  padding-bottom: 1rem;
`

export const Check = styled.a`
  padding: 0.4rem;
  border: 1px solid #000;
  cursor: pointer;

  img {
    max-width: 10px;
  }
`

export const TaskContent = styled.div`
  font-size: calc(1rem + 0.15vw);
`

export const Trash = styled.a`
  cursor: pointer;
`

export const Icon = styled.img`
  max-width: 20px;
  cursor: pointer;
`
