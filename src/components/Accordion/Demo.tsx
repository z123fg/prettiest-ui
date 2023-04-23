import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

const Demo = () => {
    const handleChange = (a: any, b: any) => {
        console.log(a, b);
    };
    return (
        <div style={{ margin: "80px auto 0", maxWidth: "800px" }}>
            <Accordion
                onChange={handleChange}
                elevation={20}
                variant="outlined"
            >
                <AccordionSummary
                    expandIcon={<AccessibilityNewIcon />}
                    aria-controls="panel1a-content"
                    // id="panel1a-header"
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionSummary>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Suspendisse malesuada lacus
                        ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    // id="panel2a-header"
                >
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Suspendisse malesuada lacus
                        ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion disabled>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    // id="panel3a-header"
                >
                    <Typography>Disabled Accordion</Typography>
                </AccordionSummary>
                <div>
                    <span>
                        Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Quasi veniam eaque, culpa
                        possimus cumque officiis ab explicabo voluptas
                        labore asperiores tempora illo? Minima,
                        aliquam doloribus voluptatem cumque earum
                        magni quaerat.
                    </span>
                </div>
            </Accordion>
        </div>
    );
};

export default Demo;
