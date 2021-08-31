import React, {useState} from 'react';
import Card from '../cards/Card';

function Item({card}) {
    const [showLogo, setShowLogo]=useState(true);
    return (
        <div className="card" onClick={()=>setShowLogo(!showLogo)}>
            {showLogo ?
                <>
                    <img className="card-logo" src={card.img} alt="logo"/>
                    <h3 className="card-title">{card.name}</h3>
                </>
                :
                <ul className="list">
                    {card.options.map((optElement,i)=>{
                        return <li key={i}>
                                {optElement}
                            </li>
                    })}
                </ul>
            }
        </div>
    )
}

export default Item
