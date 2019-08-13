import React, { PureComponent, Fragment } from 'react'
import Appbar from '../Appbar';
import Sidebar from '../Sidebar';
import "./style.css"

class MainContainer extends PureComponent{
    render(){
        const { children, title } = this.props;
        return (
            <Fragment>
                <Appbar title={title} />
                <Sidebar />
                <div className="main-container">
                    <div className="child-container">
                        { children }
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default MainContainer;