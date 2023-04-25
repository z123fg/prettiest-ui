/* eslint-disable testing-library/no-node-access */
import Accordion from "../Accordion";
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import 'jest-styled-components';

describe("Accordion children components", () => {
    it("should display children", () => {
        const testText = 'Test Child Component';
        const testTextTwo = 'Second Child Component';

        render(
            <Accordion>
                <div>{testText}</div>
                <div>{testTextTwo}</div>
            </Accordion>
        );

        expect(screen.getByText(testText)).toBeInTheDocument();
        expect(screen.getByText(testTextTwo)).toBeInTheDocument();
    });

    it("first child should call onChange event", async () => {
        const user = userEvent.setup();
        const handleChange = jest.fn();

        render(
            <Accordion onChange={handleChange} defaultExpanded={false}>
                <div>AccordionTitle</div>
                <div>AccordionContent</div>
            </Accordion>
        )

        await user.click(screen.getByText("AccordionTitle"));
        expect(handleChange).toBeCalled();


        await user.click(screen.getByText("AccordionTitle"));
        expect(handleChange).toBeCalledTimes(2);
    });

    it("should toggle visibility of content", async () => {
        render(
            <Accordion defaultExpanded={false}>
                <div>AccordionTitle</div>
                <div data-test-id="content">AccordionContent</div>
            </Accordion>
        );

        const user = userEvent.setup();

        await user.click(screen.getByText("AccordionTitle"));
        expect(screen.getByText("AccordionContent")).toBeVisible();

        await user.click(screen.getByText("AccordionTitle"));
        expect(screen.getByText("AccordionContent")).not.toBeVisible();
    });

    it("Only the first child will become head", async () => {
        render(
            <Accordion defaultExpanded={false}>
                <div>AccordionTitle</div>
                <div data-testid="content1">AccordionContent</div>
                <div data-testid="content2">AccordionContent</div>
                <div data-testid="content3">AccordionContent</div>
                <div data-testid="content4">AccordionContent</div>
                <div data-testid="content5">AccordionContent</div>
                <div data-testid="content6">AccordionContent</div>
            </Accordion>
        );

        const user = userEvent.setup();
        const callback = jest.fn();

        for (let i = 1; i < 6; i++) {
            const el = screen.getByTestId("content" + i);
            await user.click(el);
            expect(callback).not.toBeCalled();
        }
    });
});

describe("Accordion styling", () => {
    it("should have gutter when expanded", async () => {
        const { container } = render(
            <Accordion data-testid="accordion" defaultExpanded={false}>
                <div>AccordionTitle</div>
            </Accordion>
        )

        const user = userEvent.setup();
        const accordion = container.firstChild;


        expect(accordion).toHaveStyleRule("margin", "0");
        await user.click(screen.getByText("AccordionTitle"));
        expect(accordion).toHaveStyleRule("margin", "16px 0")
    });

    it("when variant is outlined, remove box-shadow", () => {
        const { container } = render(
            <Accordion variant="outlined" data-testid="accordion"></Accordion>
        )

        const accordion = container.firstChild;

        expect(accordion).toHaveStyleRule("box-shadow", "0");
    });

    // it("Icon should change when user pass in props", () => {
    //     const { container } = render(
    //         <Accordion variant="outlined" data-testid="accordion"></Accordion>
    //     )
    // });

    it("elevation should change if variant is elevation and elevation props change", () => {
        const { container } = render(
            <Accordion variant="outlined"></Accordion>
        );

        const accordion = container.firstChild;
        expect(accordion).toHaveStyleRule("box-shadow", "0");
    });
});

describe("Accordion disabled props", () => {
    it("gutter shouldn't work when disabled", async () => {
        const { container } = render(
            <Accordion disableGutters={true} defaultExpanded={true}>
                <h2>Title</h2>
            </Accordion>
        );

        const accordion = container.firstChild;
        const user = userEvent.setup();

        expect(accordion).toHaveStyleRule("margin", "0");
        await user.click(screen.getByText("Title"));
        expect(accordion).toHaveStyleRule("margin", "0");
    });

    it("Accordion is not clickable when disabled", async () => {
        const handleClick = jest.fn();

        const { container } = render(
            <Accordion onChange={handleClick} disabled>
                <h2>Title</h2>
            </Accordion>
        );

        const accordion = container.firstChild;

        expect(accordion).toHaveStyleRule("pointer-events", "none");
    });
})