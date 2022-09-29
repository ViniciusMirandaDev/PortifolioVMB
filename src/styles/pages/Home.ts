import { rgba } from 'polished'
import styled from 'styled-components'

export const Content = styled.section`
  padding: 3.375rem 4rem;
  width: 100%;
  min-height: 25rem;
  background: linear-gradient(
    180deg,
    rgba(123, 97, 255, 0.11) 0%,
    rgba(26, 26, 41, 0) 100%,
    rgba(26, 26, 41, 0) 100%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Left = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  max-width: 50%;

  > h2 {
    font-weight: 600;
    font-size: 2rem;
  }

  > h1 {
    font-weight: 600;
    font-size: 3.25rem;
  }

  > p {
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 27px;
  }

  > div {
    margin-top: 3.25rem;
    display: flex;
    justify-content: space-between;
  }
`

export const Right = styled.figure`
  max-width: 50%;

  @keyframes float {
    0% {
      transform: translatey(0px);
      opacity: 0.6;
    }
    50% {
      transform: translatey(-15px);
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    }
  }

  > svg {
    width: 100%;
    height: 30rem;
    animation: float 4s ease-in-out infinite;
  }
`
