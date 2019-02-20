import React, { Fragment, useState } from 'react';
import cssClasses from './Layout.module.css';
import Toolbar from '../../UI/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../UI/Navigation/SideDrawer/SideDrawer'

const layout = (props) => {

    const [showSideDrawer, setShowSideDrawer] = useState(true);
    return (
        <Fragment>
            <Toolbar drawerToggleClicked={() => setShowSideDrawer(!showSideDrawer)} />
            <SideDrawer
                open={showSideDrawer}
                closed={() => setShowSideDrawer(false)} />
            <main className={cssClasses.content}>
                {props.children}
            </main>
        </Fragment>
    )
};

export default layout;