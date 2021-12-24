import React from 'react';
import PropTypes from 'prop-types';


function Header({text, bgColor, textColor}) { // (props.text) --> {text}

    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor
    }

    return (
        <header style={headerStyles}>
            <div className='container'>
                <h1>{text}</h1>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: "Need Help?",
    bgColor: "rgba(0, 0, 0, 0.4)",
    textColor: "#dce9e8"
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Header

