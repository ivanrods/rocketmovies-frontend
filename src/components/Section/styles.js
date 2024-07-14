import styled from "styled-components";

export const Container = styled.section`
    
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    > h2 {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 20px;
        font-weight: 400;
        
    }
`;