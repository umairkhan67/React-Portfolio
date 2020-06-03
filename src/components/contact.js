import React, { Component } from 'react';
import {Grid, Cell,List,ListItem,ListItemContent} from 'react-mdl';


class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6} className="left-side">
                        <h2>Umair Khan</h2>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_2-512.png"
                            alt="avatar"
                            style={{height:'250px'}}
                        />
                        <p className="contact">
                        Meticulous web developer with over an year of front end experience and passion for responsive website design and a firm believer in the mobile-first approach
                        </p>
                    </Cell>
                    <Cell col={6}>
                       <h2>Contact Me</h2>
                       <hr />
                       <div className="contact-list">
                       <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"  />
                                        <h4 className="details">+91-8130786837</h4>
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                    <i className="fa fa-envelope-square" aria-hidden="true" />
                                    <h4 className="details">umair81307@gmail.com</h4>
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily:'Anton'}}>
                                <i className="fa fa-skype" aria-hidden="true" />
                                    <h4 className="details">live:.cid.f8ab87014a08e7e1</h4>
                                </ListItemContent>
                            </ListItem>
                            
                        </List>
                       </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;