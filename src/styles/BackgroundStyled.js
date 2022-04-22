import styled from "styled-components";
import { device } from "./mediaQuerys.js";


export const Launching = styled.h4 `
    color: var(--White);
    margin-top:10%;
    @media ${device.mobileGeneral}
    {
        margin-top:40%
    }
`
export const ContadorGen = styled.div`
    display: flex;
    justify-content: center;
    color: var(--Grayish-blue);
`
export const Numeros= styled.div`
    background: var(--Dark-desaturated-blue);
    color:var(--Soft-red);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;  
    width: 160px;    
    height: 160px;   
    margin: 0 20px;
    font-weight: 700;
    font-size: 50px;

    @media ${device.mobileGeneral}
    {
        width: 3rem;    
        height: 3rem;   
        margin: 0 20px;
        font-weight: 700;
        font-size: 2rem;
    }
`
export const LetrasNum = styled.div`
    margin-top: 10%;
    font-size: 1.5rem;
    @media ${device.mobileGeneral}
    {
        font-size: 0.5rem;
    }
`

export const Footer = styled.footer`
    bottom: 0;
    left:0;
    position: absolute;
    width: 100%;
`
export const ImgFooter = styled.img`
    z-index: -1;
    position: relative;
    width: 100%;
`
export const IconsFooter = styled.div`
    display: flex;
    justify-content:space-evenly;
    position: relative;
    z-index: 1;
    width: 40%;
    margin-left: 30%;
    margin-bottom: -10%;
`


