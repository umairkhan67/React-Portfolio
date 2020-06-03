import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Resume extends Component {
    render(){
        return(
            <div className="resume_body">
                <Grid className="vnav">
                    
                    <Cell col={12}>
                        <div id="main">
                            <div className="name">
                                <h1>mohammad umair khan</h1>
                            </div>
                            <div className="grad">
                                <h3><a id="edu" href="#edu">education</a></h3>
                                <ul>
                                    <li><h5>B.A.C.A   (2015-2019)</h5></li>
                                    <li className="blts"><h5>JAMIA MILLIA ISLAMIA</h5></li>
                                </ul>
                            </div>
                            <div className="12th">
                                <ul>
                                    <li><h5>12TH   (2012-2014)</h5></li>
                                    <li className="blts"><h5>DEV SAMAJ MODERN SCHOOL</h5></li>
                                </ul>
                            </div>
                            <div className="inter">
                                <ul>
                                    <li><h5>10TH   (2011-2012)</h5></li>
                                    <li className="blts"><h5>AL-BARKAAT PUBLIC SCHOOL</h5></li>
                                </ul>
                            </div>
                            <div>
                                <h3><a id="emp" href="#emp">employment</a></h3>
                                <ul>
                                    <li><h5>VIER WUNDER ED TECH PVT LTD  &nbsp;(June-Current)</h5></li>
                                    <li className="blts"><h5>Front End Developer         (Noida Sector 78)</h5></li>
                                    <p>GRAY is an platform to make the relationship between parents and schools easier.Transitioning all messaging between the school and parents on mobile  to make sure parents are constantly updated with important school information.</p>
                                </ul>
                            </div>
                            <div>
                                <h3><a id="pro" href="#pro">projects</a></h3>
                                <ul>
                                    <li><h5>GRAY THE SCHOOL APP </h5></li>
                                    <p>It is a website designing project designed  using HTML, CSS, Bootstrap4.</p>
                                </ul>
                            </div>
                            <div>
                                <h3><a id="awa" href="#awa">awards</a></h3>
                                <ul>
                                    <li><h5>S.K. Azizuddin Memorial Inter School Football Tournament</h5></li>
                                    <p>Participated in s.k.azizuddin memorial inter school football tournament orgnised by syed abid husain senior secondary school, Jamia millia islamia,New Delhi </p>
                                    <li><h5>Inter School District Football Championship  </h5></li>
                                    <p>Participated in inter school district football championship organised by university games committee, aligarh muslim university, Aligarh and came out as runner  </p>
                                    <li><h5>Albarkaat Football premier league</h5></li>
                                    <p>Participated in Al-barkaat football premier league organised by AlBarkaat Public School,Aligarh and came out as winner.</p>
                                </ul>
                            </div>
                            <div>
                                <h3><a id="ski" href="#ski">skills</a></h3>
                                    <div className="grid-container-main">
                                        <div className="grid-container">
                                            <ul><li><h5>TECHNICAL SKILLS </h5></li>
                                            <div className="item1">Ecnometric skills</div>
                                            <div className="item2">Mathematical skills</div>
                                            <div className="item3">Networking</div>  
                                            <div className="item4">Computer applications</div>
                                            <div className="item5">Remote assistance</div>
                                            <div className="item6">HTML5</div>
                                            <div className="item7">CSS3</div>
                                            <div className="item8">Bootstrap4</div>
                                            <div className="item8">JavaScript</div>
                                            <div className="item8">ReactJs</div>
                                            <div className="item8">Wordpress</div>
                                        </ul>  
                                        </div>
                                        <div className="grid-container">
                                            <ul><li><h5>COMPUTER PLATFORMS</h5></li>
                                            <div className="item1">LINUX</div>
                                            <div className="item2">WINDOWS</div>
                                        </ul>  
                                        </div>
                                        <div className="grid-container">
                                            <ul><li><h5>NON-TECHNICAL SKILLS</h5></li>
                                            <div className="item1">Lateral thinking</div>
                                            <div className="item2">Logical skillfullness</div>
                                            <div className="item3">Compliance Expertise</div>  
                                            <div className="item4">Detail-Oriented</div>
                                            <div className="item5">Willingness to learn</div>
                                            <div className="item6">Good communication skills</div>
                                            <div className="item7">Disciplined and organised</div>
                                        </ul>  
                                        </div>
                                    </div>
                                
                            </div>
                            <div>
                                <h3><a id="act" href="#act">activities</a></h3>
                                <ul>
                                    <li><h5>Computing</h5></li>
                                    <li><h5>Music</h5></li>
                                    <li><h5>Gaming</h5></li>
                                    <li><h5>Football</h5></li>
                                </ul>
                            </div>
                        </div>
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}

export default Resume;