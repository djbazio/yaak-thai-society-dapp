import React from "react"
import styled from "styled-components"
import {
  FeaturedBg,
  FeaturedBgBorder,
  FeaturedBgSmall,
  featuredBg,
  featuredGif,
  squareShapeLeft,
  squareShapeRight,
  topLeftFeaturedBg,
  topRightFeaturedBg,
  bottomLeftFeaturedBg,
  ButtonBg,
  allNftsH,
  allNftsV,
  nftGif,
} from "../assets"

const Featured = () => {
  return (
    <Wrapper>
      <div className="featured-background">
        <div className="bg-container">
          <img src={featuredBg} alt="Background" />
        </div>
      </div>

      <div className="featured-square-shapes">
        <img
          className="square-shape-right"
          src={squareShapeRight}
          alt="Square Shape"
        />
        <img
          className="square-shape-left"
          src={squareShapeLeft}
          alt="Square Shape"
        />
      </div>

      <div id="featured" className="container">
        <h1>Featured</h1>

        <div className="featured-banner">
          <div className="background">
            <FeaturedBg />
            <FeaturedBgBorder className="svg-border" />
            <img
              className="top-left-bg"
              src={topLeftFeaturedBg}
              alt="Top-Left Background"
            />
            <img
              className="bottom-left-bg"
              src={bottomLeftFeaturedBg}
              alt="Bottom-Left Background"
            />
            <img
              className="top-right-bg"
              src={topRightFeaturedBg}
              alt="Top-Right Background"
            />
          </div>
          <div className="background-small">
            <FeaturedBgSmall />
            <img
              className="bottom-left-bg-small"
              src={bottomLeftFeaturedBg}
              alt="Bottom-Left Background"
            />
          </div>

          <div className="img-container">
            <img src={featuredGif} alt="Featured GIF" />
          </div>
          <div className="text-container">
            <p>
            This collectible NFT features Tossakan, the Demon King of Langka 
            in his full armor, and all his weapons in his hands surrounding 
            him. Various gothic motifs and Thai patterns are delicately drawn 
            in the background while his profile stands out in a powerful stance, 
            and these patterns follow through to the obverse. This dramatic impression 
            of Tossakan is presented with elaborate detail, complete with a one-of-a-kind 
            copper frame that makes it the perfect display piece.
            </p>
            {/* <a href="https://www.medium.com" target="_blank"> */}
            <a href="#featured">
              <img src={ButtonBg} alt="read more" />
              <span>Read More</span>
            </a>
          </div>
        </div>

        <div className="glass-background featured-merch">
          <div className="nft-img-container">
            <img src={allNftsH} alt="NFTs" />
            <img className="nft-gif" src={nftGif} alt="NFT GIF" />
            <img className="nft-img-small" src={allNftsV} alt="NFTs" />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  position: relative;
  padding-top: 6rem;
  text-align: center;

  .featured-background {
    user-select: none;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -2;

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
      width: 100%;
      object-fit: cover;
      min-height: 1000px;
      max-height: 1920px;
    }
  }

  .featured-square-shapes {
    user-select: none;
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    img {
      position: absolute;
    }
    .square-shape-right {
      top: -3rem;
      right: 0;
    }
    .square-shape-left {
      top: 60%;
      left: 0;
    }
  }

  .svg-border {
    left: 1.4%;
    width: 80.5%;
    height: 98%;
  }

  .featured-banner {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 8rem 6rem;
    max-width: 1240px;
    margin: 0 auto;
    margin-bottom: 4rem;

    .top-left-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 400px;
      transform: translate(-50%, -50%);
    }

    .bottom-left-bg {
      width: 250px;
      position: absolute;
      bottom: 1rem;
      left: -3rem;
    }

    .top-right-bg {
      width: 250px;
      position: absolute;
      top: -1rem;
      right: -2rem;
      z-index: -1;
    }

    .bottom-left-bg-small {
      width: 75px;
      position: absolute;
      bottom: -2rem;
      left: -1rem;
    }

    .text-container {
      display: flex;
      flex-direction: column;
      text-align: start;
      width: 50%;

      & > a {
        margin: 16px 0;
        position: relative;
        display: flex;
        width: 240px;
        height: 88px;
        text-decoration: none;
        color: white;

        & > img {
          width: 100%;
        }

        & > span {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          top: 0;
          left: 0;
          align-items: center;
          justify-content: center;
        }
      }
    }

    .img-container {
      flex: 1;
      margin-right: 4rem;
      img {
        user-select: none;
        pointer-events: none;
        display: block;
        width: 100%;
        max-width: 400px;
        transform: scale(1.4);
      }
    }
  }

  p {
    color: #dcdcdc;
  }

  .featured-merch {
    padding: 5rem 6.2rem;
    font-size: 0;

    .nft-img-container {
      position: relative;
    }

    img {
      position: relative;
      user-select: none;
      pointer-events: none;
      display: block;
      width: 100%;
      height: 100%;
      z-index: 3;
    }
    .nft-img-small {
      display: none;
    }

    .nft-gif {
      width: 28.45%;
      height: 67.8%;
      position: absolute;
      border-radius: 0 0 3px 1px;
      bottom: 0;
      right: 0;
      z-index: 2;
    }
  }

  @media screen and (max-width: 1400px) {
    .featured-merch {
      margin-top: 6rem;
      padding: 0;
      overflow: visible;

      .nft-gif {
        width: 28.45%;
        height: 67.2%;
        bottom: 0;
        right: 0;
      }
    }
  }
  @media screen and (max-width: 1100px) {
    .featured-banner {
      padding: 6rem 4rem;

      .top-left-bg {
        width: 300px;
      }
      .bottom-left-bg,
      .top-right-bg {
        width: 200px;
      }
    }
  }

  @media screen and (max-width: 820px) {
    .featured-banner {
      justify-content: center;
      max-width: 450px;
      padding: 4rem 2rem;
      .text-container {
        width: 100%;
      }

      .img-container {
        flex: 0 1 auto;
        width: 100%;
        margin-right: 0;
        margin-bottom: 2rem;
        img {
          max-width: 180px;
          margin: 0 auto;
        }
      }
    }

    .featured-merch {
      max-width: 450px;
      margin: 0 auto;

      &.glass-background::before {
        background-color: transparent;
        backdrop-filter: none;
      }

      .nft-img-container {
        img {
          display: none;
        }
        .nft-img-small {
          display: block;
        }
        .nft-gif {
          position: static;
          width: 100%;
          display: block;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .featured-square-shapes {
      display: none;
    }
  }
`

export default Featured
