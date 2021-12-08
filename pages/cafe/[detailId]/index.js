import React from 'react'
import dynamic from 'next/dynamic'
import {LayoutContainer,dynamicFederation} from "../../../component";
import {withRouter} from "next/router";

const RestaurantDetail = dynamic(() => import('Restaurant/Detail'),
    {ssr: false}
)

class Index extends React.Component {
    //
    constructor() {
        super();
        this.state = {
            b:''
        }
    }

    componentDidMount() {
        //
        console.log(1111);
        this.Sample1();
    }

    async Sample1() {
        //
        let Sample = await dynamicFederation('Restaurant','./Sample');
        Sample = new Sample;
        this.setState({b:Sample.call2()})
    }

    //
    render() {
        //
        const {b} = this.state
        console.log(b)
        return (
            <>
                <LayoutContainer component={RestaurantDetail}/>
                <div>{b}</div>
            </>
        )
    }
}

export default withRouter(Index);