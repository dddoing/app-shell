import React from 'react'
import dynamic from 'next/dynamic'

class Index extends React.Component {
    //
    render() {
        //
        const Restaurant = dynamic(() => import('Restaurant/List'),
            {ssr: false}
        )

        return (
            <>
                <Restaurant/>
            </>
        )
    }
}

export default Index;