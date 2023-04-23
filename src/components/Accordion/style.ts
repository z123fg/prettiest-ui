import styled from "styled-components";

export const Wrapper = styled.div<{
    disabled?: boolean;
    square?: boolean;
    elevation: number;
    variant?: "elevation" | "outlined";
}>`
    width: 30%;
    text-align: left;
    background-color: #ffffff;
    box-shadow: ${({ elevation, variant }) => {
        if (variant === "outlined") return `0`;
        return `0px ${elevation}px ${
            2 * elevation
        }px rgba(0, 0, 0, 0.12), 
    0px ${elevation}px ${1}px rgba(0, 0, 0, 0.14), 
    0px ${elevation}px ${1.5 * elevation}px rgba(0, 0, 0, 0.20)`;
    }};
    border-radius: ${({ square }) => {
        if (square) return `0`;
        else return `4px`;
    }};
    transition: all 1s;
`;

export const AccordionRoot = styled.div<{
    expanded: boolean | undefined;
    expandState: boolean;
}>`
    padding: 8px 16px 16px;
`;

export const AccordionHead = styled.div`
    position: relative;
    padding: 8px 16px 16px;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    cursor: pointer;
`;

export const AccordionArrow = styled.span<{
    expandState: boolean;
}>`
    position: absolute;
    right: 20px;
    top: ${({ expandState }) => {
        if (expandState) return `45%`;
        else return `32%`;
    }};
    width: 10px;
    height: 10px;
    border-right: 2px solid;
    border-bottom: 2px solid;
    transform: ${({ expandState }) => {
        if (expandState) return `rotate(225deg);`;
        else return `rotate(45deg);`;
    }};
`;
