import React from "react";
import Aux from "../../../hoc/Aux";

const OrderSumamry = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                <span style={{textTransform: "capitalize"}}>{igKey}</span>:
                {props.ingredients[igKey]}
            </li>
        });

    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    )
};

export default OrderSumamry;