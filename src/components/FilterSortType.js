import React from 'react'

class FilterSortType extends React.Component {

  render() {
    return (
      <div className="ui form">
        <h3>Sort Type</h3>
        <div className="field">
          <select name="type" id="type" onChange={(event)=>this.props.onChangeFilterSortType(event.target.value)}>
          <option value="dontcare">Don't care!</option>
            <option value="weight">Weight</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </div>
      </div>
    )
  }
}

export default FilterSortType;
