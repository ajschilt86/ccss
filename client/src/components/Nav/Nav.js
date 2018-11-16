import React from "react";
import { SideNav, SideNavItem, Button } from 'react-materialize'
import "./Nav.css"

export default () => (
    <SideNav
        trigger={<Button>Navigate</Button>}
        options={{ closeOnClick: true }}
    >
        <SideNavItem userView
            user={{
                background: 'images/all-hands-small.jpg',
            }}
        />
        <SideNavItem href='/profile'>My Questionnaire</SideNavItem>
        <SideNavItem divider />
        <SideNavItem href='/Questions'>30 Second Pitch</SideNavItem>
        <SideNavItem href='/Question2'>My Skills</SideNavItem>
        <SideNavItem href='/Question3'>My Passions</SideNavItem>
        <SideNavItem href='/Question4'>My Values</SideNavItem>
        <SideNavItem href='/Question5'>Help Wanted</SideNavItem>
        <SideNavItem href='/'>Home/Log Out</SideNavItem>
    </SideNav>
)
