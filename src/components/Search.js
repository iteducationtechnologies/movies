import React from 'react';
import './Search.css';

class Search extends React.Component {
    state = {
        search: "",
        type: 'all'
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handlerFilter = (event) => {
        this.setState(() => ({type: event.target.dataset.type}), () => {
            this.props.searchMovies(this.state.search, this.state.type);
        });
        
    }

    render() {
        return (
            <>
                <div className="search">
                    <input
                        type="search"
                        placeholder="search"
                        value={this.state.search}
                        onChange={(e) => this.setState({ search: e.target.value })}
                        onKeyDown={this.handleKey}
                         />
                    <button className="btn" onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search</button>
                </div>
                <div className="radio">
                    <input type="radio" name="type" data-type="all"  onChange={this.handlerFilter} checked={this.state.type === 'all'} /> <span>All</span>
                    <input type="radio" name="type" data-type="movie" onChange={this.handlerFilter} checked={this.state.type === 'movie'} /> <span>Movies only</span>
                    <input type="radio" name="type" data-type="series" onChange={this.handlerFilter} checked={this.state.type === 'series'} /> <span>Series only</span>
                    <input type="radio" name="type" data-type="game" onChange={this.handlerFilter} checked={this.state.type === 'game'} /> <span>Games only</span>
                </div>

            </>
        )
    }
}

export default Search;