import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    gap: 6px;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};

    border: none;
    font-size: 16px;

`;