import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

class Footer extends React.Component {
    render(){
        return(
            <footer>
                <div class="container-fluid">
                    <div class="row footer-wrap">

                        <div class="col-12 copyright">
                            <div>
                                <a href="https://www.linkedin.com/in/kanishk-soni-282342197/" class="fab fa-linkedin" >{}</a>
                                <a href="https://github.com/sonikanishk" class="fa fa-github">{}</a>
                                <a href="mailto:soni.kanishk710@gmail.com" class="fas fa-envelope">{}</a>
                            </div>
                        </div>
                        <div class="col-12 copyright">
                            <span> Copyright © 2020 Kanishk Soni </span> 
                        </div>

                    </div>
                </div>
            </footer>
        );
    };
};
export default Footer;
