import React from "react"
import styled from "styled-components"
import { footerBg, footerBgSmall } from "../assets"

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-background">
        <img src={footerBg} alt="Footer Background" />
        <img
          className="small-bg"
          src={footerBgSmall}
          alt="Footer Background for Small Devices"
        />
      </div>
      <div className="container">
        <p>© Copyright {new Date().getFullYear()}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  position: relative;
  padding-top: 8rem;
  padding-bottom: 14rem;
  background-color: #32006e;
  font-weight: 300;
  text-align: center;

  .footer-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    user-select: none;
    pointer-events: none;
    z-index: 1;
    img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      object-fit: fill;
      max-height: 500px;

      &.small-bg {
        display: none;
      }
    }
  }
  .container {
    position: relative;
    z-index: 5;
  }
  @media screen and (max-width: 820px) {
    padding-top: 5rem;
  }
  @media screen and (max-width: 660px) {
    .footer-background {
      img {
        display: none;
        &.small-bg {
          display: block;
        }
      }
    }
  }
`

export default Footer
