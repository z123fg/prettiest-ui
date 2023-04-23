import React from "react";
import Accordian from "./index";

const MyDemo = () => {
    const detail =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam neque hic, amet tenetur, ab iste commodi facilis exercitationem quia a necessitatibus veritatis velit quos at nihil dolor molestiae, assumenda error?";
    return (
        <>
            <Accordian summary="this is summary" detail={detail}>
                {/* <div>
                <span>Accordion 1</span>
            </div> */}
            </Accordian>
            <Accordian summary="this is summary" detail={detail}>
                {/* <div>
                <span>Accordion 1</span>
            </div> */}
            </Accordian>
        </>
    );
};

export default MyDemo;
