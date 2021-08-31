import React from 'react';
import "./Card.css";
import { categories } from "../../helper/Data";
import Item from '../Item/Item'


function Card() {
    return (
        <div className="cards-area-container">
            <div>
                <h5 className="language-title">Languages</h5>
                <div className="cards-container">
                    {categories.map((catElement, i) => {
                        return <Item card={catElement} key={i} />
                    })}
                </div>
            </div>
        </div>
            )
}

            export default Card;