import React, { PureComponent } from 'react';
import { Drawer, List } from '@material-ui/core';

import sidebarMenuList from './menuList';
import SidebarMenu from './SidebarMenu'

import "./style.css"

class Sidebar extends PureComponent{
    render(){
        return (
            <Drawer variant="permanent" open classes={{ paper: "drawer-permanent" }}>
                <List
                    classes={
                        {
                            root: "sidebar-container"
                        }
                    }
                >
                    {
                        sidebarMenuList.map( menu => {
                            return <SidebarMenu label = { menu.label } redirectUrl={ menu.link }  />
                        })
                    }
                </List>
            </Drawer>
        );
    }
}

export default Sidebar;