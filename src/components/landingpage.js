import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Landingpage extends Component {
    render(){
        return(
            <div style={{width:'100%', height:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://img.pngio.com/avatar-png-pic-male-avatar-icon-png-transparent-png-download-male-icon-png-920_1109.png"
                        alt="avatar"
                        className="avatar-img" />      
                        <div className="banner-text">
                        <h1>Front End Web Developer</h1>
                        <hr/>
                        <p>HTML | CSS | Bootstrap | Javascript | ReactJs | WordPress</p>
                        <div className="social-links">
                        <a href="https://www.linkedin.com/in/umair-khan-80a62316b/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>
                        <a href="https://www.instagram.com/umairkhan67/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-instagram" aria-hidden="true" />
                        </a>

                        <a href="https://twitter.com/umairkh08459966" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-twitter" aria-hidden="true" />
                        </a>  
                        </div>
                        </div>                                     
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landingpage;