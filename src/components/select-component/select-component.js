import React from 'react';

import './select-component.css';

const Select = () => {
    return(
        <div className="select-container">
            <form className="select-one">
                <select>
                    <option>Hi</option>
                    <option>Hi</option>
                    <option>Hi</option>
                </select>
            </form>
            <form className="select-two">
            <select>
                    <option>Hi</option>
                    <option>Hi</option>
                    <option>Hi</option>
                </select>
            </form>
        </div>
    )
};

export default Select;