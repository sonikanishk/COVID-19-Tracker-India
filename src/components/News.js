import './News.css';
import HashLoader from "react-spinners/HashLoader";
import Axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Newsdata from './Newsdata';
import {Link} from 'react-router-dom'
class News extends React.Component {
    state = {
        articles: [],
        loading: true,
    }

    componentDidMount() {
        Axios.get('http://newsapi.org/v2/top-headlines?country=in&apiKey=05c0f32f4c0e416f87473d04dc80ed67').then((res) => {
            this.setState({ articles: res.data.articles });
            this.setState({ loading: false })
        });
    }
    render() {
        return (
        <div>
            <hr/>
            <div className="Wrappp">
    
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <HashLoader size={30} color={"#84EDB4"} loading={this.state.loading} />
                </div>
                <div>
                    {this.state.loading ? <div style={{ display: "flex", justifyContent: "center", fontFamily: "'Cinzel', serif" }}><p> Loading... </p></div> : ""}
                </div>
                <div class="heading">
                    <h2> Top headlines now </h2>
                </div>
            
                <div className="sub-categories">
                    <Link to="/News/Business" className=" content" >business</Link>
                    <Link to="/News/Entertainment" className=" content" >entertainment</Link>
                    <Link to="/News/Health" className=" content" >health</Link>
                    <Link to="/News/Science" className=" content" >science</Link>
                    <Link to="/News/Sports" className=" content" >sports</Link>
                    <Link to="/News/Technology" className=" content" >technology</Link>
                    
                </div>

                <div className="News-data">
                    <Newsdata data={this.state.articles}/>
                </div>
                
            </div>
            </div>
        );
    }
}
export default News;



