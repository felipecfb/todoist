import styled from "styled-components";

export const Container = styled.footer`
  padding: 4rem;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-color: var(--gray-300);

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Copyright = styled.div`
  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const Title = styled.p`
  margin-bottom: 1rem;
  font-size: calc(1rem + 0.15vw);

  span {
    font-weight: bold;
  }
`;

export const Content = styled.span`
  font-size: calc(0.75rem + 0.1vw);
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Icon = styled.a`
  cursor: pointer;
`;

export const Image = styled.img`
  max-width: 50px;
  margin: 1rem 0;
`;
