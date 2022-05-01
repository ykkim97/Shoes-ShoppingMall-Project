import React from "react";
import DetailTab from "./DetailTab";

function TabContent({tabs}) {
    if (tabs === 0) return <div><DetailTab /></div>
    else if (tabs === 1) return <div>1번째 내용</div>
    else if (tabs === 2) return <div>2번째 내용</div>
}

export default TabContent;