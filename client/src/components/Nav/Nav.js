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
        <SideNavItem href='/Questions'>30 Second Pitch</SideNavItem>
        <SideNavItem href='/Question2'>My Skills</SideNavItem>
        <SideNavItem href='/Question3'>My Passions</SideNavItem>
        <SideNavItem href='/Question4'>My Values</SideNavItem>
        <SideNavItem href='/Question5'>Help Wanted</SideNavItem>
    </SideNav>
)

