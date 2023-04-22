import styled from "styled-components";

export const Wrapper = styled.div<{
    disabled?: boolean,
    square?: boolean,
    elevation: number,
    variant?: 'elevation' | 'outlined',
}>`
    width: 100%;
    background-color: #ffffff;
    box-shadow: ${({ elevation, variant }) => {
        if (variant === 'outlined') return `0`
        return `0px ${elevation}px ${2 * elevation}px rgba(0, 0, 0, 0.12), 
    0px ${elevation}px ${1}px rgba(0, 0, 0, 0.14), 
    0px ${elevation}px ${1.5 * elevation}px rgba(0, 0, 0, 0.20)`
    }

    };
    border-radius: ${({ square }) => {
        if (square) return `0`
        else return `4px`
    }};
`

export const AccordionRoot = styled.div`

`

export const AccordionHead = styled.div`

`