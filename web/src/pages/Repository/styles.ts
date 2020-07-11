import styled from 'styled-components'
import { shade } from 'polished'
import { colors } from '../../styles/variables'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-size: 20px;
    display: flex;
    align-items: center;
    color: #a8a8b3;
    transition: all 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 8px;
    }
  }
`

export const Info = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      b {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    margin-top: 40px;

    li {
      &:not(:last-of-type) {
        margin-right: 80px;
      }

      b {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`

export const Issues = styled.div`
  margin-top: 40px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;

    display: flex;
    align-items: center;
    transition: all 0.2s;

    &:not(:last-of-type) {
      margin-bottom: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin: 0 16px;
      flex: 1;

      b {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`

export const AllIssuesBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px auto;
  width: 210px;
  height: 70px;
  background: ${colors.button};
  border-radius: 5px;
  border: 0;
  color: #fff;
  font-weight: bold;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background: ${shade(0.05, colors.button)};
  }
`
