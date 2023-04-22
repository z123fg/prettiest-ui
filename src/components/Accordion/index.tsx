import React, { useState, ForwardedRef } from 'react'
import { Wrapper } from './style'

interface IProps {
    children: React.ReactNode,
    className?: string,
    defaultExpanded?: boolean,
    disabled?: boolean,
    disableGutters?: boolean,
    expanded?: boolean,
    onChange?: (e?: React.SyntheticEvent, expanded?: boolean) => void,
    square?: boolean,
    elevation?: number,
    variant?: 'elevation' | 'outlined',
    TransittionComponent?: boolean,
    TransitionProps?: object
}

const Accordian = React.forwardRef<HTMLDivElement, IProps>(({
    children,
    className,
    defaultExpanded = false,
    disabled = false,
    disableGutters = false,
    expanded,
    onChange,
    square = false,
    elevation = 1,
    variant = 'elevation',
    TransittionComponent,
    TransitionProps,
}: IProps, ref: ForwardedRef<HTMLDivElement>) => {
    const [expandState, setExpandState] = useState(defaultExpanded);

    const handleChange = () => {
        if (onChange) onChange()
    }

    return (
        <Wrapper
            className={className}
            elevation={elevation}
            disabled={disabled}
            variant={variant}
            square={square}
            ref={ref}
        >
            {children}
        </Wrapper>
    )
})

export default (Accordian)