import React from "react";
import {Router, withRouter} from "next/router";

export async function getInitialProps({req}) {
    req ? console.log('server'): console.log('client');
}

class Index extends React.Component {
    //
    onClickButton(value) {

        if (value) {
            // this.props.router.push('/cafe')
        } else {
            // this.props.router.push('/restaurant')
        }
    }

    onClickButton1() {

        // this.props.router.push('/main')
    }

    render() {
        return (
            <>
                <div>Index Page</div>
                <button onClick={() => this.onClickButton(true)}>cafe</button>
                <button onClick={() => this.onClickButton(false)}>res</button>
                <button onClick={() => this.onClickButton1()}>main</button>
            </>

        )
    }
}

export default withRouter(Index);