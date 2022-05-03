import React from "react";
import { Container, Content, Copyright, Icon, SocialMedia, Title, Image } from "./styles";

import IconGithub from '../../assets/icon-github.png'
import IconLinkedin from '../../assets/icon-linkedin.png'

export default function Footer() {
  return (
    <Container>
      <Copyright>
        <Title>Desenvolvido por <span>Felipe Bastos</span></Title>
        <Content>Criando meu primeiro todoist</Content>
      </Copyright>
      <SocialMedia>
        <Icon href="https://github.com/felipecfb" target="_blank">
          <Image src={IconGithub} alt="" />
        </Icon>
        <Icon  href="https://github.com/felipecfb" target="_blank">
          <Image src={IconLinkedin} alt="" />
        </Icon>
      </SocialMedia>
    </Container>
  );
}
