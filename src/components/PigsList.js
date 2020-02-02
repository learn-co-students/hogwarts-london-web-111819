import React from 'react';
import Pig from './Pig'

class PigsList extends React.Component {

    createList = () =>{
        // Some thinking to decide what to pass in which order
        // return the list
        let theListToShow = [...this.props.pigs]
        // Handle this.props.isGreasedSelected // 'all', 'greased'
        //onSortType={this.state.sortType}
        // Step-1: 
        let theFinalList
        if (this.props.onPigType==='all'){
            theFinalList = theListToShow
        } else {
            theFinalList = theListToShow.filter(item=>item.greased)
        }
        //Step-2: Further order the list // 
        if (this.props.onSortType==='weight') {
            theFinalList.sort((a,b)=>(a.weight > b.weight) ? 1: -1)
        } else if (this.props.onSortType==='alphabetical'){
            theFinalList.sort((a,b)=>(a.name > b.name) ? 1: -1)
        }
        //
        return theFinalList
    }

    render (){
        return(
            <div>
            {this.createList().map(item => <Pig key={item.name} onSelectPig={this.props.onSelectPig} pig={item}/>)}
            </div>
        )
    }
    
}

export default PigsList;