import React from 'react'

export default class HogDetails extends React.Component {


    render() {
        return(
            <div>
                <p>{this.props.details.specialty}</p>
                <p>{this.props.details.weight}</p>
                <p>{this.props.details["highest medal achieved"]}</p>
            </div>
        )
    }
}