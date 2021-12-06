import React from 'react'
import dynamic from 'next/dynamic'

class Index extends React.Component {
    //
    render() {
        //
        const RestaurantDetail = dynamic(() => import('Restaurant/Detail'),
            {ssr: false}
        )
        return (
            <>
                <RestaurantDetail/>
            </>
        )
    }
}

export default Index;