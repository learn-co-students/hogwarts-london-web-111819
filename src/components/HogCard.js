import React from 'react';
import HogDetails from './HogDetails';

export default class HogCard extends React.Component {

    render() {
        // console.log(this.props)
        const pigName = this.props.details.name
        return(
            <div>
                <h1 onClick={ () => this.props.filterHogs(this.props.details)}>{this.props.details.name}</h1>
                <img src={`../hog-imgs/bay_of_pigs.jpg`} alt=""></img>
                {this.props.hogs.length === 1 ? <HogDetails details={this.props.details} /> : this.props.renderHogs}
            </div>
        )
    }
}