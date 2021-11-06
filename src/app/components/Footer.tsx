import styled from 'styled-components';
import { ReactComponent as GithubIcon } from 'app/assets/github-icon.svg';
import { Link } from 'react-router-dom';
import React from 'react';

export const Footer = () => {
  return (
    <Content>
      <Item
        href="https://github.com/ryderdonahue/tiny-owl-pages"
        target="_blank"
        title="Github Page"
      >
        <GithubIcon />
        Github
      </Item>
    </Content>
  );
};

const Item = styled.a`
  color: ${p => p.theme.primary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  color: ${p => p.theme.text};
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
`;
