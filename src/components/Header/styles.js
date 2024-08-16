import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;
    padding: 24px 123px;
    gap: 64px;
    
    
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    
    > a img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
       
        margin-right: 16px;
        line-height: 24px;
        align-items: end;
        span {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        strong { 
           
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;

export const Logo = styled.button`
    border: none;
    background: none;
    margin-right: 20px;
  
    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 26px;
    }
`;

