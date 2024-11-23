// import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { styled, createGlobalStyle } from "styled-components";
import RcSelect from "rc-select";
import "rc-select/assets/index.css";

// export const Name = styled.p`
//   color: red;
// `;

export const Select = styled(RcSelect)`
  color: red;
`;

export const className = css`
  color: yellow;
`;

console.log("className", className);

// export const Title = styled.div`
//   color: red;
// `;

// export const Handle = styled.div`
//   color: blue;
// `;

export const GlobalNavItemStyle = createGlobalStyle`
  .asd {
    color: blue;
  }
`;
