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

  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`
export const Left = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  max-width: 50%;

  @media only screen and (max-width: 1000px) {
    text-align: center;
    max-width: 100%;
  }

  @media only screen and (max-width: 550px) {
    > div {
      margin-top: 2rem;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }
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

  @media only screen and (max-width: 1000px) {
    max-width: 100%;
  }
  @media only screen and (max-width: 600px) {
    > svg {
      height: 100%;
    }
  }

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
    height: 30rem !important;
    animation: float 4s ease-in-out infinite;
  }
`

export const BasicInfos = styled.article`
  display: flex;
  flex-direction: column;
  padding: 4.375rem 0;
  align-items: center;
  gap: 5rem;
  height: fit-content;
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
    width: 60%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;

    @media only screen and (max-width: 1000px) {
      width: 75%;
      justify-content: center;
    }
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
  height: 11.5rem;

  position: relative;

  p {
    font-weight: 300;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.5);
    font-style: normal;
    font-weight: 300;
  }
  a > h5 {
    font-size: 1.25rem;
    font-weight: 500;
    text-decoration: underline;
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

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
    max-width: 45%;

    @media only screen and (max-width: 1000px) {
      max-width: 100%;
      text-align: center;
    }
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

      @media only screen and (max-width: 550px) {
        flex-direction: column;
        gap: 1rem;
        align-items: center;
      }
    }
  }

  video {
    max-width: 45%;
    box-shadow: 8px -1px 300px -96px rgba(255, 255, 255, 1);
    border-radius: 0.5rem;

    @media only screen and (max-width: 900px) {
      max-width: 100%;
    }
  }
`
