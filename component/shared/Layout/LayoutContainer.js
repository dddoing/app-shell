import React from 'react';
import dynamic from "next/dynamic";
import {dynamicFederationModule} from "../Utils";

const Nav = dynamic(()=>import('Navigation/Nav'),{ssr:false})
// const Nav = dynamicFederationModule('Navigation','./Nav')

class LayoutContainer extends React.Component {
    //
    componentDidMount() {
        //

    }
    //
    render() {
        //
        const {component:Component} = this.props;
        const {rest} = this.props;

        return (
            <>
                <Nav/>
                <Component {...rest}/>
            </>
        )
    }
}

export default LayoutContainer;