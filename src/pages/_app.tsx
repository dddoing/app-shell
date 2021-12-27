import React from 'react';
import {AppProps} from 'next/app';

class App extends React.Component<AppProps> {
    //
    render() {
        //
        const {Component, pageProps} = this.props
        return (
            <Component {...pageProps} />
        )
    }
}
export default App;