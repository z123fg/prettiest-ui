import Accordion from "./index";
import styled from "styled-components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddchartIcon from "@mui/icons-material/Addchart";

const MyDemo = () => {
    return (
        <div style={{ margin: "80px auto 0", maxWidth: "800px" }}>
            <Accordion expandIcon={<AddchartIcon />} defaultExpanded={true}>
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
            </Accordion>

            <Accordion disabled>
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
            </Accordion>

            <Accordion expandIcon={<ExpandMoreIcon />}>
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
            </Accordion>
            <Accordion expandIcon={<ExpandMoreIcon />} disableGutters>
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
            </Accordion>
            <Accordion>
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
            </Accordion>
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
    margin: 12px;
`;
export default MyDemo;
