import React from 'react';
import headerStyles from '../Styles/header.module.css';


const Header: React.FC = () => {
    return (
        <main>
            <h1 className={headerStyles.header}> Welcome to TaskMe !</h1>
            </main>
    )
}
export default Header