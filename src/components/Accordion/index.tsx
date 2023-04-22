import React, { useState, ForwardedRef, Children } from 'react'
import { Wrapper, AccordionRoot, AccordionHead } from './style'

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

    /*
        Accordion needs to have its first element as title，
        when title is clicked, it will change its expand or collapsed state
        The rest of the children will be its content    
    */
    const AccordionTitle = Children.toArray(children)[0] as React.ReactNode;
    const AccordionContent = Children.toArray(children).slice(1) as React.ReactNode;

    const handleChange = (e?: React.SyntheticEvent, expanded?: boolean) => {
        if (onChange) onChange(e, expanded);
    };

    const handleSummaryClick = (e?: React.SyntheticEvent) => {
        setExpandState(!expandState);
        handleChange(e, expandState);
    };

    return (
        <Wrapper
            className={className}
            elevation={elevation}
            disabled={disabled}
            variant={variant}
            square={square}
            ref={ref}
        >
            <AccordionHead onClick={handleSummaryClick}>
                {AccordionTitle}
            </AccordionHead>
            <AccordionRoot>
                {AccordionContent}
            </AccordionRoot>
        </Wrapper>
    )
})

export default (Accordian)