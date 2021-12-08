import React from 'react'
import {withRouter} from "next/router";
import Document from "next/document";

export async function getInitialProps(ctx) {
   const initialProps = await Document.getInitialProps(ctx);
   return { ...initialProps };
}

class Index extends React.Component {
    //
    render() {
        //

        return (
            <>
                <div>sss</div>
            </>
        )
    }
}


export default withRouter(Index);