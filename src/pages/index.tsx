import React from "react";
import dynamic from 'next/dynamic';
import {CssBaseline, StylesProvider} from "@material-ui/core";
import {dynamicMf} from '../Sample';

//@ts-ignore
// const Sample = dynamic(() => import('Restaurant/Sample'), {ssr: false})
const Sample = dynamic(() => dynamicMf('Restaurant', './Sample'), {ssr: false})

class Index extends React.Component {
    //
    componentDidMount() {
        //
    }

    render() {

        return (
            <>
                <div>Index Page</div>
                <Sample/>
            </>

        )
    }
}

export default Index;