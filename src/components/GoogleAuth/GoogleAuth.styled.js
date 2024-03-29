import styled from '@emotion/styled';
import { Button } from '@mui/material';

// export const ButtonGoogle = styled.button`
//   display: block;
//   border: none;

//   -webkit-box-shadow: none;
//   -moz-box-shadow: none;
//   box-shadow: none;
//   box-shadow: 0px 2px 2px rgba(9, 30, 63, 0.15);

//   transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);

//   :hover {
//     box-shadow: 0px 3px 3px rgba(10, 35, 70, 0.25);
//   }

//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   padding-right: 40px;

//   margin-left: auto;
//   margin-right: auto;
//   // margin-top: 40px;
//   // margin-bottom: 14px;
//   // .google-btn {
//   // display: inline-block;
//   position: relative;

//   width: 100%;
//   height: 40px;
// @media screen and (min-width: 768px){
//     width: 700px;
// }
//   background-color: ${({ theme }) => theme.BlueBtn};
//   cursor: pointer;

//   & svg {
//     display: inline-block;
//     // position: absolute;
//     left: 14px;
//     top: 9px;
//   }
//   a {
//     text-decoration: none;
//     color: #707375;
//     text-align: center;
//     font-weight: bold;
//     font-size: 16px;
//     line-height: 40px;
//     font-family: Roboto;
//   }
//  }
// `;

export const ButtonGoogle = styled(Button)`
  width: 100%;
`;
export const A = styled.a`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 700px;
  }
`;

export const InsideDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 15px;
`;
