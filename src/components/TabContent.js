import React from "react";
import DetailTab from "./DetailTab";
import ShipInfo from "./ShipInfo";

function TabContent({tabs}) {
    if (tabs === 0) return <div><DetailTab /></div>
    else if (tabs === 1) return <div>1번째 내용</div>
    else if (tabs === 2) return <div><ShipInfo /></div>
}

export default TabContent;