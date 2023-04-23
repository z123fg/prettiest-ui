import styled, { css } from "styled-components";

export const Wrapper = styled.div<{
    disabled?: boolean;
    square?: boolean;
    elevation: number;
    variant?: "elevation" | "outlined";
}>`
    cursor: pointer;
    width: 100%;
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
    &:not(:last-child) {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    &:not(:first-child) {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    ${({ disabled }) =>
        disabled &&
        css`
            background-color: rgba(0, 0, 0, 0.12);
            /* color: rgba(0, 0, 0, 0.87); */
            cursor: not-allowed;
            pointer-events: none;
            & > * {
                color: rgba(0, 0, 0, 0.87);
            }
        `}
`;

export const AccordionRoot = styled.div<{
    expanded: boolean | undefined;
    expandState: boolean;
}>`
    max-height: ${({ expandState, expanded }) => {
        if (!expanded) {
            return expandState ? "0" : "150px";
        } else {
            return expanded ? "0" : "150px";
        }
    }};
    transition: all 240ms cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    /* padding: ${({ expandState, expanded }) => {
        if (!expanded) {
            return expandState ? "0" : "16px";
        } else {
            return expanded ? "0" : "0";
        }
    }}; */
`;

export const AccordionHead = styled.div<{
    expanded: boolean | undefined;
    expandState: boolean;
}>`
    min-height: ${({ expandState, expanded }) => {
        if (!expanded) {
            return expandState ? "48px" : "64px";
        } else {
            return expanded ? "64px" : "48px";
        }
    }};
    display: flex;
    align-items: center;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
`;

export const AccordionArrow = styled.span<{
    expandState: boolean;
}>`
    position: absolute;
    right: 20px;
    top: ${({ expandState }) => {
        if (expandState) return `32%`;
        else return `45%32%`;
    }};
    width: 10px;
    height: 10px;
    border-right: 2px solid grey;
    border-bottom: 2px solid grey;
    transform: ${({ expandState }) => {
        if (expandState) return `rotate(45deg);`;
        else return `rotate(225deg);`;
    }};
`;
