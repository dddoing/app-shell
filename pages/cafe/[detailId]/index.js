import React from 'react'
import dynamic from 'next/dynamic'

const RestaurantDetail = dynamic(() => import('Restaurant/Detail'),
    {ssr: false}
)


class Index extends React.Component {
    //
    componentDidMount() {
        //
    }

    //
    render() {
        //
        return (
            <>
                <RestaurantDetail/>
            </>
        )
    }
}

export default Index;