import React from 'react';
import {FaExpeditedssl} from 'react-icons/fa';
import {Link} from 'react-router-dom';

function AboutIconLink() {
    return (
        <div className="about-link">
            <Link to="/about">
                <FaExpeditedssl size={30}/>
            </Link>
        </div>
    )
}

export default AboutIconLink
