import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

class Footer extends React.Component {
    render(){
        return(
            // <div>
            //     <div className="copyright">
            //         <span> Copyright © 2020 Kanishk Soni </span> 
            //         <a href="https://github.com/sonikanishk/COVID-19-Tracker-India"><br></br><i class="social-icon fab fa-github fa-lg" aria-hidden="true"></i></a>
            //     </div>
            // </div>

            // <div class="footer-wrap">
            //     <div className="footerL">
            //         <h5>Quick Links</h5>
            //         <p>GitHub : <a href="https://github.com/sonikanishk/COVID-19-Tracker-India"><i class="fab fa-github-square"></i></a></p>
            //         <p>LinkedIn : <a href="https://www.linkedin.com/in/kanishk-soni-282342197/"><i class="fab fa-linkedin"></i></a></p>
            //     </div>
            //     <div className="footerR">
            //         <h5>Contact Us 📧 </h5>
            //         <h6> Email : soni.kanishk@gmail.com</h6>
            //     </div>
            //     <foot>
            //         <h6><span> Copyright © 2020 Kanishk Soni <br /></span></h6>
            //     </foot>
            // </div>

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

/* <footer>
<div class="container-fluid">
    <div class="row">
    
        <div class="col-md-10 text-center col-sm-offset-1">
            <div class="social-media">
                <a href="http://www.facebook.com/d3v3sh5ingh" class="fa fa-facebook"></a>
                <a href="http://www.github.com/d3v3sh5ingh" class="fa fa-github"></a>
                <a href="http://www.instagram.com/d3v3sh5ingh" class="fa fa-instagram"></a>
                <a href="https://www.youtube.com/channel/UClLiJHNky892nsT1Ok8nB4A" class="fa fa-youtube"></a>
                <a href="http://www.hackerrank.com/d3v3sh" class="fa fa-code"></a>
            </div>
        </div>
        <div class="col-sm-10 text-center col-sm-offset-1">
            <div class="copyright">Copyright © Devweb 2.O 2019 | Made with <i class="fa fa-heart" style="color:red"></i> by Devesh .</div>
        </div>
        
    </div>
</div>
</footer> */