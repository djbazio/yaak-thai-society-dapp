import React from "react"
import styled from "styled-components"
import {
  roadmapBg,
  roadmapBgBottom,
  RoadmapBg1,
  RoadmapBg2,
  phase1Line,
  phase2Line,
  phase3Line,
  phase4Line,
  phase1Bg,
  phase2Bg,
  phase3Bg,
  phase4Bg,
  phase5Bg,
} from "../assets"

const Roadmap = () => {
  return (
    <Wrapper>
      <div className="roadmap-background">
        <div className="bg-container">
          <img src={roadmapBg} alt="RoadMap Background" />
          <img src={roadmapBgBottom} alt="RoadMap Background Bottom" />
        </div>
      </div>
      <div id="roadmap" className="container">
        <h1>RoadMap</h1>
        <p className="roadmap-text">
          Below is a blueprint of our ambitions and objectives regarding the
          Yaak Thai Society.
          <br />
          We aim to be the biggest online, on-chain, Nipple community there is!
          <ul>
            <li>
              10% of the total amount of funds collected will be donated to a
              breast cancer charity with On-Chain proof. What does this mean?
              This means that in light of joining a fun and vibrant Yaak Thai
              community and owning your own on-chain Yaak Thai, you will also be
              supporting vital research for a deeply meaningful cause.
            </li>
            <li>
              5% of the total amount of funds collected will be used to
              strategically buy back and burn NFT's from weak hands in order to
              support the floor price.
            </li>
            <li>
              In addition to that, 50% of Royalty fees will be used to buy back
              and burn NFT's on a weekly basis.
            </li>
          </ul>
        </p>
        <div className="roadmap-steps">
          <div className="roadmap-steps-background">
            <RoadmapBg1 className="first-row" />
            <RoadmapBg2 className="second-row" />
          </div>

          <div className="phase-container">
            <div className="phase phase-1">
              <p>
                Phase <span>1</span>
              </p>
            </div>

            <div className="glass-background item">
              <p className="title">
                Phase 1 - The journey begins, welcome to the Yaak Thai Society! (0%
                Sold)
              </p>
              <ul className="text">
                <li>
                  A private discord channel gets unlocked for all Yaak Thai
                  Holders.
                </li>
                <li>Giveaway of 1/1 Yaak Thai Red.</li>
                <li>
                  The minting process begins for whitelisted users. 333 Yaak Thai
                  at 0.05 ETH will be available.
                </li>
                <li>One airdropped Yaak Thai to the first 69 buyers.</li>
                <li>
                  Owners receive a special seat for what will appear next in the
                  multiverse.
                </li>
                <li>
                  Community rewards - Eth and NFT rewards for active Discord
                  members.
                </li>
              </ul>
            </div>
          </div>

          <div className="phase-container">
            <div className="phase phase-2">
              <p>
                Phase <span>2</span>
              </p>
            </div>

            <div className="glass-background item">
              <p className="title">
                Phase 2 - Expanding the Yaak Thai Society. (25% Sold)
              </p>
              <ul className="text">
                <li>
                  Public sale begins. 3000 Yaak Thai at 0.069 ETH will be
                  available.
                </li>
                <li>
                  Community rewards - Eth and NFT rewards for active Discord
                  members.
                </li>
                <li>0.05 ETH to 15 random Yaak Thai Holders.</li>
                <li>2 Yaak Thai giveaway to 2 random Yaak Thai Holders.</li>
                <li>
                  We begin voting for the best-looking nipple on a weekly basis
                  where the winner will receive 0.02 Eth.
                </li>
              </ul>
            </div>
          </div>

          <div className="phase-container">
            <div className="phase phase-3">
              <p>
                Phase <span>3</span>
              </p>
            </div>

            <div className="glass-background item">
              <p className="title">
                Phase 3 - The age of recognition. (50% Sold)
              </p>
              <ul className="text">
                <li>
                  The top 15 most active members in our Discord will receive
                  0.05 Eth each.
                </li>
                <li>
                  At this point, we will conduct another Airdrop Raffle. The
                  prize will be an NFT from another cool project. It's a secret
                  for now!
                </li>
                <li>0.04 ETH to 25 random Nipple Holders.</li>
                <li>5 Nipples giveaway to 5 random Yaak Thai Holders.</li>
              </ul>
            </div>
          </div>

          <div className="phase-container">
            <div className="phase phase-4">
              <p>
                Phase <span>4</span>
              </p>
            </div>

            <div className="glass-background item">
              <p className="title">Phase 4 - Vincent Van Yaak Thai. (75% Sold)</p>
              <ul className="text">
                <li>
                  Use Yaak Thai in creative ways and post them on Twitter with the
                  #YaakThai hashtag. The winner gets a mystery prize!
                </li>
                <li>0.04 Eth to 40 random Yaak Thai Holders.</li>
                <li>8 Yaak Thai giveaway to 8 random Yaak Thai Holders.</li>
                <li>
                  Community rewards - Eth and NFT rewards for active Discord
                  members.
                </li>
              </ul>
            </div>
          </div>

          <div className="phase-container">
            <div className="phase phase-5">
              <p>
                Phase <span>5</span>
              </p>
            </div>

            <div className="glass-background item">
              <p className="title">
                Phase 5 - The ETHernal Yaak Thai. (100% Sold)
              </p>
              <ul className="text">
                <li>0.05 ETH to 60 random Yaak Thai Holders.</li>
                <li>10 Yaak Thai giveaway to 10 random Yaak Thai Holders.</li>
                <li>
                  Community rewards - Eth and NFT rewards for active Discord
                  members.
                </li>
                <li>
                  Yaak Thai Owners with special traits will be able to claim
                  tangible Yaak Thai Society merchandise.
                </li>
                <li>
                  We want to keep the party alive… this time in a Metaverse of
                  your choice!
                </li>
              </ul>
              <span>
                What does this mean? At 100% sales, we will let the community
                decide where they would like to see this party take place… and
                we will work to make it happen.
              </span>
            </div>
          </div>
        </div>
        <div className="roadmap-explanation">
          <p>
            This roadmap lists the events we are certain will take place after
            each phase is complete. <br />
            However, we have a lot more ideas and partnerships in the works that
            will come to fruition later on in our journey.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  position: relative;
  padding: 6rem 0;
  text-align: center;
  /* overflow: hidden; */

  .roadmap-explanation {
    font-weight: 600;
  }

  .roadmap-background {
    user-select: none;
    pointer-events: none;
    position: absolute;
    bottom: -35vw;
    left: 0;
    width: 100%;
    z-index: -1;
    overflow: visible;
    .bg-container {
      position: relative;
      &::after {
        content: "";
        background-image: linear-gradient(
          to bottom,
          rgba(45, 0, 103, 0),
          rgba(45, 0, 103, 0.7),
          #2d0067,
          rgba(45, 0, 103, 0.7),
          rgba(45, 0, 103, 0)
        );
        position: absolute;
        bottom: -400px;
        left: 0;
        width: 100%;
        height: 800px;
      }
    }

    img {
      display: block;
      object-fit: cover;
      width: 100%;
      /* max-height: 1600px; */

      &:last-of-type {
        position: absolute;
        bottom: 2.2%;
        z-index: -1;
      }
    }
  }

  .roadmap-text {
    max-width: 940px;
    margin: 0 auto;
    margin-bottom: 5rem;

    & > ul {
      margin-top: 3rem;
      text-align: start;

      & > li::before {
        content: "- ";
      }
    }
  }

  .roadmap-steps {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 5rem 0;

    .phase {
      display: none;
      justify-content: center;
      align-items: center;
      color: #190044;
      width: 67px;
      height: 67px;
      background-color: #fff;
      border-radius: 50%;
      line-height: 1;
      font-size: 0.85rem;
      font-weight: 500;
      padding-top: 4px;

      span {
        font-weight: 600;
        display: block;
        font-size: 1rem;
        margin-top: 0.3rem;
      }

      &::before {
        content: "";
        position: absolute;
        top: -4px;
        left: -4px;
        width: calc(67px + 8px);
        height: calc(67px + 8px);
        z-index: -1;
      }

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 33.5px;
        top: 67px;
        width: 2px;
        height: calc(100% - 67px + 2rem);
        z-index: -1;
      }

      &.phase-1 {
        &::before {
          background-image: url(${phase1Bg});
        }
        &::after {
          background-image: url(${phase1Line});
        }
      }
      &.phase-2 {
        &::before {
          background-image: url(${phase2Bg});
        }
        &::after {
          background-image: url(${phase2Line});
        }
      }
      &.phase-3 {
        &::before {
          background-image: url(${phase3Bg});
        }
        &::after {
          background-image: url(${phase3Line});
        }
      }
      &.phase-4 {
        &::before {
          background-image: url(${phase4Bg});
        }
        &::after {
          background-image: url(${phase4Line});
        }
      }
      &.phase-5 {
        &::before {
          background-image: url(${phase5Bg});
        }
      }
    }

    .roadmap-steps-background {
      user-select: none;
      pointer-events: none;
      position: absolute;
      left: -3rem;
      top: 1rem;
      width: calc(100% + 6rem);
      height: 100%;
      z-index: -1;
      .first-row {
        width: 100%;
      }
      .second-row {
        position: absolute;
        left: 0;
        top: 52%;
        width: 82%;
      }
    }

    .phase-container {
      position: relative;
      width: calc(33.3333% - 1rem);
      &:nth-child(2) {
        margin-left: 0;
        margin-right: auto;
      }

      &:nth-child(3) {
        margin-bottom: 8rem;
      }
      &:nth-child(4) {
        margin-right: 0;
        margin-left: auto;
      }
      &:nth-child(5),
      &:nth-child(6) {
        margin: 0 0.5rem;
      }
    }

    .item {
      padding: 2rem;
      text-align: left;

      .title {
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 180%;
        margin-bottom: 1.5rem;
      }

      .text {
        color: #c9b7df;
        font-size: 1rem;
        font-weight: 600;
        font-family: "Josefin Sans", sans-serif;

        li {
          &::before {
            content: "- ";
          }
        }
      }

      & > span {
        font-size: 1rem;
        color: #c9b7df;
        font-family: "Josefin Sans", sans-serif;
        font-weight: 600;
      }
    }
  }

  @media screen and (max-width: 1100px) {
    .roadmap-text {
      margin-bottom: 2rem;
    }
    .roadmap-steps {
      .roadmap-steps-background {
        top: 3rem;
        .second-row {
          top: 48%;
        }
      }
      .item {
        padding: 2rem 1rem;

        &:nth-child(3) {
          margin-bottom: 6rem;
        }

        .title {
          font-size: 1rem;
          line-height: 180%;
          margin-bottom: 1.5rem;
        }

        .text {
          font-size: 0.85rem;
          line-height: 170%;
        }
      }
    }
  }
  @media screen and (max-width: 820px) {
    padding-bottom: 0;
    .roadmap-steps {
      display: block;
      max-width: 450px;
      margin: 0 auto;
      padding: 0;
      .roadmap-steps-background {
        display: none;
      }

      .phase {
        display: flex;
      }

      .phase-container {
        display: flex;
        width: 100%;
        margin: 0 !important;
        margin-bottom: 2rem !important;

        &:last-of-type {
          margin-bottom: 0 !important;
        }
      }

      .item {
        padding: 1rem;
        flex: 1;
        margin-left: 1rem;
      }
    }

    .roadmap-explanation {
      margin-top: 36px;
    }
  }
`

export default Roadmap
