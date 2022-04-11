import React from "react"
import styled from "styled-components"
import { nippleVerseImg, welcomeImg, introBg } from "../assets"

const Intro = () => {
  return (
    <Wrapper>
      <div className="intro-background">
        <div className="bg-container">
          <img src={introBg} alt="Background" />
        </div>
      </div>
      <div className="container">
        <img className="welcome-img" src={welcomeImg} alt="Welcome" />
        <img
          className="nippleverse-img"
          src={nippleVerseImg}
          alt="Nippleverse"
        />
        <div id="about" className="glass-background intro-text">
          <h4>The world has chastised them from public view.</h4>
          <p>
            They belong to all of us yet we are ashamed of them because society
            taught us so. However, their power is too much to contain, they
            found refuge on the Ethereum blockchain and now they are ready to
            break free. With about 8,000,000,000 people in the world and only
            3333 unique entitties, only a few will be able to claim they were
            brave enough to #freeyaakthai and wear them as badges of honour.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  padding: 3rem 0;

  .intro-background {
    user-select: none;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;

    .bg-container {
      position: relative;
      &::after {
        content: "";
        background-image: linear-gradient(
          to bottom,
          rgba(24, 1, 52, 0),
          rgba(24, 1, 52, 0.7),
          #180134,
          rgba(24, 1, 52, 0.7),
          rgba(24, 1, 52, 0)
        );
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    img {
      display: block;
      object-fit: cover;
      min-height: 500px;
      max-height: 1300px;
    }
  }

  img {
    display: block;
    margin: 0 auto;
    width: 100%;

    &.welcome-img {
      user-select: none;
      pointer-events: none;
      max-width: 380px;
      margin-bottom: 2rem;
    }

    &.nippleverse-img {
      user-select: none;
      pointer-events: none;
      max-width: 400px;
      margin-bottom: 0;
      margin-top: -10rem;
    }
  }

  .intro-text {
    padding: 5rem 6rem;
    text-align: center;

    h4 {
      margin-bottom: 2rem;
    }

    p {
      color: #dcdcdc;
    }
  }

  @media screen and (max-width: 820px) {
    img {
      &.welcome-img {
        max-width: 240px;
        margin-bottom: 2rem;
      }

      &.nippleverse-img {
        max-width: 240px;
        margin-bottom: 4rem;
      }
    }

    .intro-text {
      padding: 2rem;
      border-radius: 25px;

      h4 {
        margin-bottom: 1rem;
      }
    }
  }
`

export default Intro
