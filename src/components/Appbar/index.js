import React, { PureComponent } from 'react'
import { AppBar, Toolbar } from '@material-ui/core';
import "./style.css";
class Appbar extends PureComponent{
    render(){
        const { title } = this.props;
        return (
            <AppBar
                position="fixed"
                classes={
                    {
                        root: "app-bar"
                    }
                }
            >
                <Toolbar>
                    <div className="app-title-container">
                        <span className="app-title">
                            { title }
                        </span>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Appbar;