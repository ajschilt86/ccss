import React from "react";
import { SideNav, SideNavItem, Button } from 'react-materialize'

export default () => (
    <SideNav
        trigger={<Button>SIDE NAV DEMO</Button>}
        options={{ closeOnClick: true }}
    >
        <SideNavItem userView
            user={{
                background: 'img/office.jpg',
                image: 'img/yuna.jpg',
                name: 'John Doe',
                email: 'jdandturk@gmail.com'
            }}
        />
        <SideNavItem href='#!second'>My Profile</SideNavItem>
        <SideNavItem divider />
        <SideNavItem href='#!second'>30 Second Pitch</SideNavItem>
        <SideNavItem href='#!second'>My Skills</SideNavItem>
        <SideNavItem href='#!second'>My Passions</SideNavItem>
        <SideNavItem href='#!second'>My Values</SideNavItem>
        <SideNavItem href='#!second'>Skills I am looking for</SideNavItem>
    </SideNav>
)

