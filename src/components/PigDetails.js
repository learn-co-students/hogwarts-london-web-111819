import React from 'react';

class PigDetails extends React.Component {
    render(){
        return(
        <div>
            <h1>Details Page for:</h1>
            {this.props.pig.name}
            <button onClick={() => this.props.setSelectedPigToNull()}>Go back to London!</button>
        </div>
        )
    }

}

export default PigDetails;