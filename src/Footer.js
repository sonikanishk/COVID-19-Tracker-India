import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

class Footer extends React.Component {
    render(){
        return(
            <footer>
                <div className="container-fluid">
                    <div className="row footer-wrap">

                        <div className="col-12 copyright">
                            <div>
                                <a href="https://www.linkedin.com/in/kanishk-soni-282342197/" className="fab fa-linkedin icon" >{}</a>
                                <a href="https://github.com/sonikanishk" className="fa fa-github icon">{}</a>
                                <a href="mailto:soni.kanishk710@gmail.com" className="fas fa-envelope icon">{}</a>
                            </div>
                        </div>
                        <div className="col-12 copyright">
                            <span> Copyright © 2020 Kanishk Soni </span> 
                        </div>

                    </div>
                </div>
            </footer>
        );
    };
};
export default Footer;
