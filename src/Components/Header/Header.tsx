import React from 'react';
import headerStyles from './header.module.css'

const Header: React.FC = () => {
    return (
        <main>
            <h1 className={headerStyles.text}> Welcome to Taskify !</h1>
            </main>
    )
}
export default Header