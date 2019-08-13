import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ListItem, ListItemText } from '@material-ui/core'

import "./style.css";

class SidebarMenu extends Component{
    render(){
        const { label, redirectUrl } = this.props;
        return (
            <ListItem
                button
                dense
                component = { Link }
                to={ redirectUrl }
                target= "_self" 
                classes={
                    {
                        root: "list-item"
                    }
                }
            >
                <ListItemText 
                    primary={label} 
                    classes={
                        {
                            root: "list-item-label"
                        }
                    }
                    />
            </ListItem>
        );
    }
}

export default SidebarMenu;