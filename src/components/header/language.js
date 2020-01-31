import React from 'react'
import './language.css'

const Language = () => {
    return (
        <div className="lang">
            <ul class="d-flex">
                <li>
                    <button type="button" className="kg btn"></button>
                </li>

                <li>
                    <button type="button"  className="rus btn"></button>
                </li>

                <li>
                    <button type="button"  className="en btn"></button>
                </li>
            </ul>
        </div>
    )
}

export default Language;