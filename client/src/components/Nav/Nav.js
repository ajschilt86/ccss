import React from "react";
import { SideNav, SideNavItem, Button } from 'react-materialize'

export default () => (
    <SideNav
        trigger={<Button>Navigate</Button>}
        options={{ closeOnClick: true }}
    >
        <SideNavItem userView
            user={{
                background: 'images/sideNavPic.jpeg',
                image: 'images/mMouse.jpg',
                name: 'Anthony Doe',
                email: 'jdandturk@gmail.com'
            }}
        />
        <SideNavItem href='/profile'>My Questionnaire</SideNavItem>
        <SideNavItem divider />
        <SideNavItem href='/questions'>30 Second Pitch</SideNavItem>
        <SideNavItem href='#!second'>My Skills</SideNavItem>
        <SideNavItem href='#!second'>My Passions</SideNavItem>
        <SideNavItem href='#!second'>My Values</SideNavItem>
        <SideNavItem href='#!second'>Help Wanted</SideNavItem>
    </SideNav>
)

