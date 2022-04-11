import React from "react"
import styled from "styled-components"
import {
  teamMemberBg,
  teamMember1,
  teamMember2,
  teamMember3,
  teamMember4,
  teamMember5,
  teamMember6,
} from "../assets"

const Team = () => {
  return (
    <Wrapper>
      <div id="team" className="container">
        <h1>Team</h1>
        <div className="team-members">
          <div className="team-member">
            <img src={teamMember1} alt="Member 1" />
            <p>KKPOB</p>
          </div>
          <div className="team-member">
            <img src={teamMember2} alt="Member 2" />
            <p>BOSS</p>
          </div>
          <div className="team-member">
            <img src={teamMember3} alt="Member 3" />
            <p>???</p>
          </div>
          <div className="team-member">
            <img src={teamMember4} alt="Member 4" />
            <p>BAZIO</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  padding: 6rem 0;
  padding-top: 10rem;
  text-align: center;

  .team-members {
    display: grid;
    grid-template: auto / 1fr 1fr 1fr 1fr ;
    column-gap: 10px;
    margin-bottom: 4.5rem;

    .team-member {
      background-image: url(${teamMemberBg});
      padding: 4rem 1rem 3rem 1rem;

      img {
        user-select: none;
        pointer-events: none;
        margin-bottom: 1rem;
      }

      p {
        line-height: 1;
      }
    }
  }

  /* .show-all {
        width: 100%;
        max-width: 255px;
        font-size: 1.4rem;
        font-weight: 600;
        padding: 1.25rem;
        background: #12fed9;
        border-radius: 45px;
    } */

  @media screen and (max-width: 1400px) {
    .team-members {
      .team-member {
        img {
          height: 120px;
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .team-members {
      grid-template: auto auto / 1fr 1fr 1fr;
      row-gap: 10px;
      max-width: 800px;
      margin: 0 auto;
      margin-bottom: 4.5rem;
      .team-member {
        img {
          height: auto;
        }
      }
    }
  }
  @media screen and (max-width: 820px) {
    padding-bottom: 2rem;
    .team-members {
      margin-bottom: 2rem;
      .team-member {
        img {
          height: 120px;
        }
      }
    }
    /* .show-all {
            max-width: 180px;
            font-size: 1.15rem;
            padding: 0.9rem;
            margin-bottom: 2rem;
        } */
  }
  @media screen and (max-width: 550px) {
    .team-members {
      grid-template: auto auto auto / 1fr 1fr;
    }
  }
`

export default Team
