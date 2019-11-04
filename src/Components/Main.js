import React, { Component } from 'react';
import '../Styles/main.css';

//Movie Rows,fetching the data
import MovieRow from './MovieRow';

////Fake local-stored dummy json data
//import {movies} from './FakeData';

//Empty array where fetched movie data will be stored
let movieRows = [];

export default class Main extends Component {
    constructor(props){
        super(props);

        //Initial state with empty rows
        this.state = {
            rows: []
        }

        // // //Loop through the dummy data and push fetched contents inside the movieRows array
        // movies.forEach(movie => {
               //MovieRow contains the table with the fetched data. 
        //     //movieParent is variable storing value/props for child component
        //     const movieRow = <MovieRow key={movie.id} movieParent={movie}/>          
        //     movieRows.push(movieRow);
        // })
        this.performSearch("woman");          
    }
    
    handleSearchChange = (e) => {
        console.log(e.target.value);       
        let searchTerm = e.target.value;
        this.performSearch(searchTerm);
    }

    performSearch(searchTerm) {
    //Fetch data from moviedb api
    fetch("https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm )
    .then(res => res.json())
    .then(
        (result) => {   
        console.log('Data fetched successfully');      
        const results =  result.results;
        console.log(results[0]);

            results.forEach((movie) => {
            //Manually construct the movie path
            movie.posterSrc = "https://image.tmdb.org/t/p/w185" + movie.poster_path;

            //console.log(movie.title, movie.poster_path);
            const movieRow = <MovieRow key={movie.id} movieParent={movie}/>          
            movieRows.push(movieRow);
            });
            this.setState({           
                rows: movieRows        
            })                  
        },
        // Handle errors
        (error) => {
            console.log("Error in fetching data..", error);
        }
     )
    }

    componentDidMount() {
        //Change/Update the rows to new Updated movieRows (Fetch Dummy Data)
        // this.setState({           
        //     rows: movieRows        
        // })       
    }

    render() {
        return (
        <div>
            <input className="search-bar"
             placeholder="Enter Search Items" 
             onChange={this.handleSearchChange}/>

            <div className="movie-contents">
                <h4>Welcome to main page.</h4>
                {/* Display the final state of the rows */}
                {this.state.rows}
            </div>
        </div>
        )
    }
}
