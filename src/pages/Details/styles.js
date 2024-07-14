import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";

`;

export const Content = styled.div`
    width: 100%;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    > a {
        padding: 0px 126px;
    }
    >button:first-child {
        align-self: flex-start;
    }

     h1 {
        font-size: 38px;
        font-weight: 500;
        margin-right: 15px;
    }
    
    > main {
        display: flex;
        flex-direction: column;
        grid-area: content;
        max-height: 550px;
        overflow-y: scroll;
        margin: 24px 126px;
        padding-right: 20px;
        gap: 30px;
        p {
        font-size: 16px;
        text-align: justify;
        padding-top: 16px 5px;
        }
        section {
            display: flex;
            align-items: center;
            margin-right: 10px;

            svg {
                color: ${({ theme }) => theme.COLORS.PINK};
                
            }
            strong{ 
                font-weight: normal;
                margin-left: 10px;
            }
        }
    }
    > main::-webkit-scrollbar {
        width: 0.8rem;
    }

    > main::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 0.8rem;
    }
  
`;
export const Profile = styled.div`
    display: flex;
    align-items: center;
   
    margin-right: 15px;
    > img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }   
`;