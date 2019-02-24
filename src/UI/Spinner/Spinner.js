import React from 'react';
import cssClasses from './Spinner.module.css';

const spinner = () => (
    <div className={cssClasses.Loader}>Loading...</div>
);

export default spinner;