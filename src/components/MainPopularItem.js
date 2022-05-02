import React from "react";

function MainPopularItem({shoes, idx}) {
    return (
        <>
            {
                idx < 21 
                ? (
                    <div className="col-md-4 populars">
                        <img src={`https://raw.githubusercontent.com/younggwons/younggwons.github.io/master/item/shoes${idx}.jpg`} width="80%" height="190px" />
                        <h4>{shoes.title}</h4>
                        <p>{shoes.content}</p>
                        <p>{shoes.price}</p>
                    </div>
                ) : null
            }
        </>        
    )
}

export default MainPopularItem;