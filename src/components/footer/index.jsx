import React, { Component } from 'react';
import DividerFoot from '../../images/DividerFoot.png';
import Divider from '../../images/Divider.png';
import Github from '../../images/Github.png';
import Facebook from '../../images/Facebook.png';
import Linkedin from '../../images/Linkedin.png';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="row">
                    <div className="col"  style={{maxHeight: '15px'}}>
                        <p>Copyright © 2019 Snorre Aas</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{maxHeight: '15px'}}>
                        <img style={{maxWidth: '300px'}} src={DividerFoot} alt={"DividerFoot"} />
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{maxHeight: '60px', paddingTop: '5px'}}>
                        <a target="_blank" href="https://github.com/SnorreAas"><img className="socialIcons" src={Github} alt={"Github"} /></a>
                        <a target="_blank" href="https://www.facebook.com/snorre.aas.5"><img className="socialIcons" src={Facebook} alt={"Facebook"} /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/snorre-aas-432b4a6b"><img className="socialIcons" src={Linkedin} alt={"Linkedin"} /></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
