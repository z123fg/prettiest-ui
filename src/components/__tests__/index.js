import Accordion from "../Accordion";
import React from 'react';
import { getByText, render, screen } from '@testing-library/react';
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
        expect(screen.getByText("AccordionContent")).not.toBeVisible();

        await user.click(screen.getByText("AccordionTitle"));
        expect(screen.getByText("AccordionContent")).toBeVisible();
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
    it("should have gutter when expanded", () => {
        render(
            <Accordion />
        )


    });

    it("when variant is outlined, remove box-shadow", () => {

    });

    it("Icon should change when user pass in props", () => {

    });

    it("elevation should change sccordin variant is elevation and elevation props change", () => {

    });
});

describe("Accordion disabled props", () => {
    it("gutter shouldn't work when disabled", () => {

    });

    it("Accordion is not clickable when disabled", () => {

    });
})