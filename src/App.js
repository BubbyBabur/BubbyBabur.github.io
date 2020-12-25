import React from "react";
import Net from "./utils/Net";
import './css/app.css'

class Front extends React.Component {
    render() {
        return (
            <div>
                <Net />
                <div id="front" className="fullsize">
                    <span id="front-roger-fan">Roger Fan</span>
                </div>
            </div>
        );
    }
}

class Hamburgalar extends React.Component {
    render() {
        return (
            <img alt="hamburger" id="sandwich" src="icons/sandwich.svg"></img>
        )
    }
}

class SideBar extends React.Component {
    render() {
        return (
            <div id="sidebar" style={{
                transform: this.props.open ? `` : `translate(-100%,0px)`
            }}>
                <img alt="X" src="icons/X.svg" id="SideBarX" onClick={this.props.close} />
                <a href="/">About</a>
                <a href="/">Work</a>
                <a href="/">Links</a>
            </div>
        )
    }
}

class Covering extends React.Component {
    render() {
        return (
            <div className="fullsize velvet" style={{
                opacity: this.props.active ? 0.3 : 0,
                visibility: this.props.active ? "visible" : "hidden"
            }} />
        )
    }
}

class SideBarController extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    open() {
        this.setState({
            open: true
        })
        // Disable scrolling: 
        document.body.style.overflow = "hidden";
        document.body.style.height = "100%";
    }

    close() {
        this.setState({
            open: false
        })
        // Ok scroll now
        document.body.style.overflow = "";
        document.body.style.height = "";
    }

    render() {
        if(this.state.open ) {
            return (
                <div>
                    <Covering active={true} />
                    <SideBar open={true} close={() => { this.close() }} />
                    <a onClick={() => { this.close() }}><Hamburgalar /></a>
                </div>
            )
        } else {
            return (
                <div>
                    <Covering active={false} />
                    <SideBar open={false} close={() => { this.close() }} />
                    <a onClick={() => { this.open() }}><Hamburgalar /></a>
                </div>
            )
        }
    }
}

class Projects extends React.Component {

    
    render() {
        return (
            <div>
                <div id="Projects" className="fullsize">
                    <h1>Projects</h1>
                    <p>Hello!</p>
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="content"> 
                <Front />
                <Projects />
                <SideBarController />
            </div>
        );
    }
}

export default App;
