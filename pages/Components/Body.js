import React from 'react';



class Body extends React.Component {
    state ={
        shows: [],
    }
    
    async componentDidMount() {
        const respons = await fetch('https://api.tvmaze.com/search/shows?q=batman');
        const resData = await respons.json();
        this.setState({shows: resData});
    }
    getData(){
        this.state.shows.map(person => {
            return(
                <ul>
                    <li>
                        <p> { person.show.name } </p>
                    </li>
                </ul>
            )  
        })
    }
    render(){
        console.log('this.state.shows', this.state.shows);

        const layoutStyleAboutPage = {
            padding: 20,
            "border-bottom": '1px solid #DDD',
            display: "flex",
            float: "center",
            width: "90%",
          };
          const aboutPerson = {
            padding: 20,
            width: "70%",
            margin: " 10px auto",
          };
          const aboutPersonImg = {
            width: "100%",
            margin: " 10px auto",
          };
          const aboutLi = {
            "list-style-type": "none",
            float: "right",
        };
    return(
       <div>
           <ul>
               {
                   this.state.shows.map(person => {
                    return(
                        <ul className="about-list" style={layoutStyleAboutPage}>
                            <li style={aboutLi}>
                                <div className="about-person" style={aboutPerson}>
                                    <h3> { person.show.name } </h3>
                                    <p> { person.show.summary } </p>
                                    <img src={person.show.image.original} style={aboutPersonImg} />
                                </div>     
                            </li>
                        </ul>
                    )  
                })
               }
           </ul>
        </div>
    )

}
}

export default Body;
