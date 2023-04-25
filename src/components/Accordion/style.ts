import styled, { css } from "styled-components";

export const Wrapper = styled.div<{
    disabled?: boolean;
    square?: boolean;
    elevation: number;
    variant?: "elevation" | "outlined";
    expanded: boolean | undefined;
    expandState: boolean;
    disableGutters: boolean;
}>`
    cursor: pointer;
    width: 100%;
    background-color: #ffffff;
    box-shadow: ${({ elevation, variant }) => {
        if (variant === "outlined") return `0`;
        return `0px ${elevation}px ${2 * elevation
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
    ${({ disabled }) =>
        disabled &&
        css`
            background-color: rgba(0, 0, 0, 0.12);
            cursor: not-allowed;
            pointer-events: none;
            color: gray;
        `}
    margin: ${({ expandState, expanded, disableGutters, disabled }) => {
        if (disableGutters || disabled) return "0";
        if (!expanded) {
            return expandState ? "16px 0" : "0";
        } else {
            return expanded ? "16px 0" : "0";
        }
    }};
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const AccordionHead = styled.div<{
    expanded: boolean | undefined;
    expandState: boolean;
    disabled: boolean;
}>`
    /* min-height: ${({ expandState, expanded, disabled }) => {
        if (disabled) return "48px";
        if (!expanded) {
            return expandState ? "48px" : "64px";
        } else {
            return expanded ? "64px" : "48px";
        }
    }}; */
    min-height: 48px;
    /* margin-top: ${({ expandState, expanded, disabled }) => {
        if (disabled) return "0";
        if (!expanded) {
            return expandState ? "0" : "10px";
        } else {
            return expanded ? "0" : "10px";
        }
    }}; */
      border-bottom: ${({ expandState, expanded }) => {
        if (!expanded) {
            return expandState ? "0" : "1px solid rgba(0, 0, 0, 0.2)";
        } else {
            return expanded ? "0" : "1px solid rgba(0, 0, 0, 0.2)";
        }
    }};
    display: flex;
    align-items: center;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
`;

export const AccordionRoot = styled.div<{
    expanded: boolean | undefined;
    expandState: boolean;
}>`
    max-height: ${({ expandState, expanded }) => {
        if (!expanded) {
            return expandState ? "150px" : "0";
        } else {
            return expanded ? "150px" : "0";
        }
    }};
    transition: all 240ms cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    /* border-bottom: ${({ expandState, expanded }) => {
        if (!expanded) {
            return expandState ? "0" : "1px solid";
        } else {
            return expanded ? "0" : "1px solid";
        }
    }}; */
    visibility: ${({ expandState, expanded }) => {
        if (!expanded) {
            return expandState ? "visible" : "hidden";
        } else {
            return expanded ? "visible" : "hidden";
        }
    }};
    /* padding: ${({ expandState, expanded }) => {
        if (!expanded) {
            return expandState ? "0" : "16px";
        } else {
            return expanded ? "0" : "0";
        }
    }}; */
`;

export const AccordionArrow = styled.span<{
    expandState: boolean;
    expanded: boolean | undefined;
    disabled: boolean;
}>`
    position: absolute;
    right: 2.4%;
    top: ${({ expandState, expanded }) => {
        if (!expanded) {
            return expandState ? "30%" : "32%";
        } else {
            return expanded ? "32%" : "30%";
        }
    }};
    width: 10px;
    height: 10px;
    border-right: 2px solid grey;
    border-bottom: 2px solid grey;
    transform: ${({ expandState, expanded, disabled }) => {
        if (disabled) {
            return "rotate(45deg)";
        } else if (!expanded) {
            return expandState ? "rotate(45deg)" : "rotate(225deg)";
        } else {
            return expanded ? "rotate(225deg)" : "rotate(45deg)";
        }
    }};
`;

export const AccordionIcon = styled.span<{
    expandState: boolean;
    expanded: boolean | undefined;
    disabled: boolean;
}>`
    margin: 0;
    padding: 0;
    position: absolute;
    right: 1.7%;
    top: ${({ expandState, expanded }) => {
        if (!expanded) {
            return expandState ? "24%" : "32%";
        } else {
            return expanded ? "32%" : "24%";
        }
    }};
    transform: ${({ expandState, expanded, disabled }) => {
        if (disabled) {
            return "rotate(45deg)";
        } else if (!expanded) {
            return expandState ? "rotate(180deg)" : "rotate(0)";
        } else {
            return expanded ? "rotate(0)" : "rotate(180deg)";
        }
    }};
`;
