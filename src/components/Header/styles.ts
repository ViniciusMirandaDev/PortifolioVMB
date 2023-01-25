import styled from 'styled-components'

export const Container = styled.header`
  color: #fff;
  width: 100%;
  height: 6rem;
  padding: 1.25rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 8px 6px -6px rgba(255, 255, 255, 0.2);

  > svg {
    height: 41px;
    width: 321px;

    @media only screen and (max-width: 500px) {
      padding-right: 2rem;
    }
  }
`

export const Navbar = styled.nav`
  display: flex;
  gap: 3.125rem;
  align-items: center;
`
export const NavItems = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 2rem;
  align-items: center;
  > li {
    > a {
      font-family: Poppins, sans-serif;
      font-weight: 600;
      font-size: 1.25rem;
      display: block;
      transition: 0.6s;
      &:hover,
      &:focus {
        text-shadow: 2px 2px 6px rgba(244, 244, 244, 0.25);
        transform: scale(1.1);
        color: ${props => props.theme.colors.primary.normal};
      }
    }
  }
  .active {
    a {
      color: ${props => props.theme.colors.primary.normal} !important;
      text-shadow: 2px 2px 6px rgba(244, 244, 244, 0.25);
      font-weight: 700;
      display: inline-block !important;
    }
  }
`

export const NavItemsMobile = styled.ul`
  position: absolute;
  height: fit-content;
  width: 100vw;
  background-color: #1a1a29;
  z-index: 1;
  left: 0;
  top: 0;
  margin-top: 6.1rem;
  display: flex;
  list-style-type: none;
  flex-direction: column;
  align-items: center;

  > &:last-child {
    border-bottom: none !important;
  }
  > li {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    width: 100%;
    text-align: center;

    > a {
      font-family: Poppins, sans-serif;
      font-weight: 600;
      font-size: 1.5rem;
      display: block;
      transition: 0.6s;
      padding: 1rem 0;
      &:hover,
      &:focus {
        text-shadow: 2px 2px 6px rgba(244, 244, 244, 0.25);
        transform: scale(1.1);
        color: ${props => props.theme.colors.primary.normal};
      }
    }
  }
  .active {
    a {
      color: ${props => props.theme.colors.primary.normal} !important;
      text-shadow: 2px 2px 6px rgba(244, 244, 244, 0.25);
      font-weight: 700;
      display: inline-block !important;
    }
  }
`
