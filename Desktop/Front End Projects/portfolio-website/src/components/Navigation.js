import React from 'react';


const Navigation = () => {
    return(
        //imported bootstrap navbar
        <div className="nav-wrapper">
            <nav class="nav flex-column">
                <a className="nav-link" href="#">about me</a>
                <a className="nav-link" href="#">resume</a>
                <a className="nav-link" href="#">skills</a>
                <a className="nav-link" href="#">contact</a>
            </nav>
        </div>
    );
}

export default Navigation;