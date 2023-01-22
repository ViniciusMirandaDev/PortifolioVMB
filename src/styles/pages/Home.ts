import { rgba } from 'polished'
import styled from 'styled-components'

export const Content = styled.section`
  padding: 3.375rem 0rem 0rem 0rem;
  width: 100%;
  min-height: 25rem;
  background: linear-gradient(
    180deg,
    rgba(123, 97, 255, 0.11) 0%,
    rgba(26, 26, 41, 0) 100%,
    rgba(26, 26, 41, 0) 100%
  );
  display: flex;
  flex-direction: column;
`

export const TopContent = styled.div`
  padding: 0 4rem;
  width: 100%;
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

export const BasicInfos = styled.article`
  display: flex;
  flex-direction: column;
  padding: 4.375rem 0;
  align-items: center;
  gap: 5rem;
  height: 25rem;
  position: relative;
  width: 100vw;
  h3 {
    font-weight: 600;
    font-size: 2rem;
  }

  .background-filter {
    height: -webkit-fill-available;
    width: 100vw;
    position: absolute;
    background: rgba(193, 0, 204, 0.06);
    filter: blur(50px);
    z-index: -1;
  }
  div {
    width: 65vw;
    display: flex;
    justify-content: space-between;
  }
`

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  box-shadow: 10px 10px 10px -1px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: flex-start !important;
  gap: 0.3rem;
  padding-top: 1.5rem;
  align-items: center;
  border-radius: 20px;
  max-width: 12.5rem;
  height: 10rem;
  position: relative;

  p {
    font-weight: 300;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.5);
    font-style: normal;
    font-weight: 300;
  }
  h5 {
    font-size: 1.25rem;
    font-weight: 500;
  }
  overflow: hidden;
`

export const BackgroundElipse = styled.span`
  position: absolute;
  width: 136.09px;
  height: 195px;
  z-index: -1;
  top: 4.5rem;
  right: -2.875rem;
  background: #7b61ff;
  opacity: 0.5;
  filter: blur(50px);
`

export const SocialSection = styled.section`
  background: linear-gradient(
    180deg,
    rgba(26, 26, 41, 0) 0%,
    rgba(123, 97, 255, 0.099) 100%,
    rgba(123, 97, 255, 0.123) 100%
  );
  width: 100vw;
  padding: 4.5rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10.875rem;

  section {
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
      &.primary {
        color: ${props => props.theme.colors.primary.normal};
      }
    }
    > div {
      margin-top: 3.25rem;
      display: flex;
      justify-content: space-between;
      gap: 3.75rem;
    }
  }
`
