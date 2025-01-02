import React from 'react';
import Menu from '../component/Menu';
import { useParams } from 'react-router-dom';

const PageNotFoumd = () => {
    return (
        <div>
            <Menu/>
            <h1>404 Not Found</h1>
        </div>
    );
};

export default PageNotFoumd;