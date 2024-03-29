import styled from "@emotion/styled";

export const Container = styled.div`

    min-height: 500px;
    display: flex;
    flex-direction: column;
justify-content: flex-start;`

export const BtnContainer = styled.div`
display: grid;
margin-bottom: 20px;
grid-row-gap: 15px;
    @media screen and (min-width: 768px){
                margin-top: 20px;
    display:flex;
    justify-content: space-around;

}`



export const ContainerFilter = styled.div`
    @media screen and (min-width: 768px){
display:flex;
    align-items: flex-end;
    justify-content: center;
    }

    `