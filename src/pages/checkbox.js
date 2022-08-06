import { Detail } from "../datadummy/dataProduct";
import { Topping } from "../datadummy/Topping";
import React from "react";

function Experiment() {
    return (
      <div>
        {Topping.map((item) => (
          <label class="checkbox-inline me-4">
            <input
              type="checkbox"
              value={item.toppingPrice}
              
            /><img>
            {item.topping}
            </img>
          </label>
        ))}
      </div>
    );
}
export default Experiment