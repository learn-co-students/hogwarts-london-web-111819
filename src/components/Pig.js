import React from 'react';

class Pig extends React.Component {

    state = {
        showMe: true
    }

    handleShowMe = () => {
        this.setState({
            showMe: false
        })
    }

    renderPig = () => {
        return(
            <div className='pigTile'>
                <h4>Name: {this.props.pig.name}</h4>
                {/* <h2>{this.props.pig.specialty}</h2> */}
                <h4>Weight: {this.props.pig.weight}</h4>
                <h4>{this.props.pig.greased? "Greased" :"Not greased"}</h4>
                <button onClick={()=>this.props.onSelectPig(this.props.pig)}>Show me details!</button>
                <button onClick={()=>this.handleShowMe()}>Hide me</button>

                // Image here
            </div>

        )
    }

    render(){
        return (
        <div>
            {this.state.showMe? this.renderPig() : null}
        </div>
        )
    }
}

export default Pig;