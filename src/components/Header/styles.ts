import styled from 'styled-components'

export const Container = styled.header`
  color: #fff;
  width: 100%;
  height: 6rem;
  padding: 1.25rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
