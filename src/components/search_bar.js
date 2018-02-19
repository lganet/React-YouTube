// search_bar.js
import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = { term: '', option: 1 };
    }

    render(){
        return (
        //return <input onChange={event => console.log(event.target.value)} />;
            <div className="search-bar">            
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value) } />
                {/* onChange={event => this.setState({ term: event.target.value }) } /> */}
                {/* <br/> Value of the input: {this.state.term}
                <br/> Value of the option: {this.state.option} */}
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}
    
export default SearchBar;