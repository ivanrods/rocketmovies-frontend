import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0px;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 105px 128px auto;
    grid-template-areas:
    "header"
    "line"
    "content";
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Line = styled.div`
    grid-area: line;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 8px 126px;
    > h1{
        font-size: 26px;
    }
  

`;
export const Content = styled.div`
    grid-area: content;
   
    > main {
        max-height: 650px;
        overflow-y: scroll;
        margin-right: 10px;
        margin: 0 126px;  
    }
     
     ::-webkit-scrollbar {
    width: 0.8rem;
    }

    ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.8rem;
  }
`;

export const NewMovie = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 13px 32px;
  border-radius: 8px;
`;