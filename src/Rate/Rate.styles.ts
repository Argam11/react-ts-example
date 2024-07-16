import { styled } from "@linaria/react";

export const StyledRate = styled.div`
  display: flex;
  flex-direction: row-reverse;
  font-size: 20px;
  color: #fff;

  .rate-item {
    width: 20px;
    height: 20px;
    cursor: pointer;
    position: relative;
    transition: all 0.2s linear;

    &:hover ~ .rate-item {
      color: #fadb14;
    }

    &:hover {
      transform: scale(1.1);
    }

    svg {
      display: block;
      float: right;
    }

    &.active {
      color: #fadb14;

      & ~ .rate-item {
        color: #fadb14;
      }
    }
  }

  .rate-gap {
    width: 8px;

    &:hover ~ div {
      color: #fadb14;
    }
  }

  .rate-star-first {
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    overflow: hidden;
    transition: all 0.2s linear;

    &:hover,
    &:hover + div {
      color: #fadb14;
    }
  }

  .rate-star-second {
    height: 100%;
    transition: all 0.2s linear;

    &:hover {
      color: #fadb14;
    }

    &.active {
      color: #fadb14;
    }
  }
`;
