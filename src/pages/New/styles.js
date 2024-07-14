import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    gap: 30px;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "link"
    "content";

    > a {
        grid-area: link;
        margin: 0 126px;
    }
    > main {
        max-height: 650px;
        grid-area: content;
        overflow-y: scroll;
        margin: 0 126px;

        
    }
    > main::-webkit-scrollbar {
        width: 0.8rem;
    }

    > main::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 0.8rem;
    }

    .tags {
        width: 100%;
        display: flex;
        align-items: center;
        
        gap: 15px;
        justify-content: start;
        flex-wrap: wrap;
        padding: 14px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        border-radius: 10px;
    }
`;

export const Form = styled.form`
    width: 100%;

    padding-right: 10px;
    > header {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: space-between;

    }
    > section {
        display: flex;
        gap: 25px;
        margin: 25px 0;
    }
    > .buttons {
         display: flex;
         gap: 25px;

        button:nth-child(1) {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            color: ${({ theme }) => theme.COLORS.PINK};
        }  
    }
`;
