import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("button component", () => {
    test("snapshot test", () => {
        const { asFragment } = render(<Button>Submit!</Button>);
        expect(asFragment()).toMatchSnapshot();
    })
    test("button component should be customized by passing variant props", () => {
        const { rerender } = render(<Button>Submit</Button>);
        const buttonEl = screen.queryByText("Submit");
        expect(buttonEl).toHaveClass("btn-primary-contained");
        rerender(<Button variant="outlined">Submit</Button>);
        expect(buttonEl).toHaveClass("btn-primary-outlined");
    });
    test("button component should be customized by passing color props", () => {
        const { rerender } = render(<Button>Submit</Button>);
        const buttonEl = screen.queryByText("Submit");
        expect(buttonEl).toHaveClass("btn-primary-contained");
        rerender(<Button color="secondary">Submit</Button>);
        expect(buttonEl).toHaveClass("btn-secondary-contained");
    });
    test("button component should be customized by passing size props", () => {
        const { rerender } = render(<Button>Submit</Button>);
        const buttonEl = screen.queryByText("Submit");
        expect(buttonEl).toHaveClass("btn-medium");
        rerender(<Button size="large">Submit</Button>);
        expect(buttonEl).toHaveClass("btn-large");
    });

    test("button should invoke the onClick props when it is clicked", () => {
        const mockFn = jest.fn();
        const { rerender } = render(<Button onClick={mockFn}>Submit</Button>);
        expect(mockFn).toBeCalledTimes(0);
        const buttonEl =  screen.queryByText("Submit");
        fireEvent.click(buttonEl);
        expect(mockFn).toBeCalledTimes(1);
    });
});
