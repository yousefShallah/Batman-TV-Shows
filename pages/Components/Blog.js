import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

class Blog extends React.Component {

    state = {
        shows: [],
    }

    async componentDidMount() {
        const respons = await fetch('https://api.tvmaze.com/search/shows?q=batman');
        const resData = await respons.json();
        this.setState({shows: resData});
    }

    render(){
        console.log('this.state.shows', this.state.shows);
        
        return(
            <div>
                <h3>Batman TV Shows</h3>
                <ul> 
                    { this.state.shows.map(show => {
                        return(
                            <li key={show.show.id}>
                                <Link href={show.show.url}>
                                    <a target="blank"> { show.show.name }  </a>
                                </Link> 
                            </li>
                        )                        
                    
                    }) }
                </ul>  
          
            </div>
    )}
}


export default Blog;
