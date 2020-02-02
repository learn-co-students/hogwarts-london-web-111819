import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigsList from './PigsList'
import PigDetails from './PigDetails';
import FilterPigType from './FilterPigType'
import FilterSortType from './FilterSortType'

console.log(hogs)

class App extends Component {

  state = {
    pigs: hogs,
    selectedPig: null,
    greased: 'all',
    sortType: 'dontcare'
  }

  setSelectedPigToNull = () => {
    this.setState({
      selectedPig: null
    })
  }

  updateSelectedPig = (receivedPig) => {
    this.setState({
      selectedPig: receivedPig
    })
  }

  onChangeType = (value) => {
    this.setState({
      greased: value
    })
  }

  onChangeFilterSortType = (value) => {
    this.setState({
      sortType: value
    })
  }

  render() {
    return (
      <div className="App">
          < Nav />
          <FilterPigType onChangeType={this.onChangeType}/>
          <FilterSortType onChangeFilterSortType={this.onChangeFilterSortType}/>
            {/* < PigsList onSortType={this.state.sortType} onPigType={this.state.greased} pigs={this.state.pigs} onSelectPig={this.updateSelectedPig}/>
            < PigDetails pig={this.state.selectedPig} /> */}
            {/* TODO: Put a ternary to only show the details page (not both) */}
            {
              this.state.selectedPig===null
              ? < PigsList onSortType={this.state.sortType} onPigType={this.state.greased} pigs={this.state.pigs} onSelectPig={this.updateSelectedPig}/>
              : < PigDetails setSelectedPigToNull={this.setSelectedPigToNull} pig={this.state.selectedPig} />
            }
      </div>
    )
  }
}

export default App;
