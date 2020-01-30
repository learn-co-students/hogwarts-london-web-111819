import React from 'react'

class FilterPigType extends React.Component {

  render() {
    return (
      <div className="ui form">
        <h3>Pig Type</h3>
        <div className="field">
          <select name="type" id="type" onChange={(event)=>this.props.onChangeType(event.target.value)}>
            <option value="all">All</option>
            <option value="greased">Greased Only</option>
          </select>
        </div>
      </div>
    )
  }
}

export default FilterPigType;
