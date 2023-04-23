import React from "react";
import Accordian from "./index";
import styled from "styled-components";

const MyDemo = () => {
    return (
        <div style={{ margin: "80px auto 0", maxWidth: "800px" }}>
            <Accordian>
                <Summary>
                    <span>Accordion 1</span>
                </Summary>
                <Detail>
                    <span>
                        Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Quasi veniam eaque, culpa
                        possimus cumque officiis ab explicabo voluptas
                        labore asperiores tempora illo? Minima,
                        aliquam doloribus voluptatem cumque earum
                        magni quaerat.
                    </span>
                </Detail>
            </Accordian>

            <Accordian disabled>
                <Summary>
                    <span>Accordion 1</span>
                </Summary>
                <Detail>
                    <div>
                        Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Quasi veniam eaque, culpa
                        possimus cumque officiis ab explicabo voluptas
                        labore asperiores tempora illo? Minima,
                        aliquam doloribus voluptatem cumque earum
                        magni quaerat.
                    </div>
                </Detail>
            </Accordian>

            <Accordian>
                <Summary>
                    <span>Accordion 2</span>
                </Summary>
                <Detail>
                    <div>
                        Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Quasi veniam eaque, culpa
                        possimus cumque officiis ab explicabo voluptas
                        labore asperiores tempora illo? Minima,
                        aliquam doloribus voluptatem cumque earum
                        magni quaerat.
                    </div>
                </Detail>
            </Accordian>
            <Accordian>
                <Summary>
                    <span>Accordion 4</span>
                </Summary>
                <Detail>
                    <div>
                        Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Quasi veniam eaque, culpa
                        possimus cumque officiis ab explicabo voluptas
                        labore asperiores tempora illo? Minima,
                        aliquam doloribus voluptatem cumque earum
                        magni quaerat.
                    </div>
                </Detail>
            </Accordian>
        </div>
    );
};

const Summary = styled.div`
    text-align: left;
    padding: 12px 16px;

    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0m;
`;
const Detail = styled.div`
    text-align: center;
    margin: 12px 18px;
`;
export default MyDemo;
