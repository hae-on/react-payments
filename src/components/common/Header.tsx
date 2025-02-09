import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  title: string;
  leading?: React.ReactElement;
}

const Header = ({ title, leading }: HeaderProps) => {
  return (
    <HeaderContainer>
      <LeadingIconWrapper>{leading}</LeadingIconWrapper>
      <TitleWrapper>{title}</TitleWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;

  height: 70px;

  align-items: center;
`;

const LeadingIconWrapper = styled.div`
  display: flex;
  width: 15%;

  justify-content: center;
  vertical-align: middle;
`;

const TitleWrapper = styled.h1`
  width: 85%;

  font-weight: 500;
  font-size: 20px;
  line-height: 19px;

  color: var(--black-color);
`;

export default Header;
