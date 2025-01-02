import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to ="/">PageOne</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to ="/two/10/soap">PageTwo</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to ="/ghf">NotFound</NavLink></li>
            </ul> 
        </div>
    );
};

export default Menu;