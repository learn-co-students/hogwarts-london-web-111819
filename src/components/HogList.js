import React from 'react';
import hogs from '../porkers_data';
import HogCard from './HogCard'

export default class HogList extends React.Component {

    state = {
        hogs: hogs
    }

    renderHogs = () => {
        return this.state.hogs.map( hog => <HogCard details={hog} filterHogs={this.filterHogs} hogs={this.state.hogs} renderHogs={this.renderHogs} />)
    }

    filterHogs = (hog) => {
        this.setState({
            hogs: this.state.hogs.filter( element => element === hog )
        })
    }

    filterGreasedHogs = (e) => {
        if(e.target.value === 'greased') {
            this.setState({
                hogs: [
                    ...this.state.hogs.filter( hog => hog.greased === true)
                ]
            })
        }
        if(e.target.value === 'all') {
            this.setState({
                hogs: hogs
            })
        }
    }

    filterHogsByName = () => {
        console.log(this.state)
    }

    render() {
        return(
            <div>
            <button onClick={this.filterHogsByName}>Sort by name</button>
            <button>Sort by weight</button>
                <select onChange={this.filterGreasedHogs}>
                    <option>all</option>
                    <option>greased</option>
                </select>
                    {this.renderHogs()}
            </div>
        )
    }
}