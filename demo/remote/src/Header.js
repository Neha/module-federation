import React from 'react';

const headerStyle = {
    'color': 'red',
    'backgroundColor': "#ccc",
    'height': '40px',
    'textAlign': 'center'
}

const Header = (props) => {
    return (
        <>
            <header style={headerStyle} >Header from Remote</header>
            <p style={props.style}>text from remote</p>
        </>
    )
}

export default Header;
