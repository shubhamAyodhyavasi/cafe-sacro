import React from 'react';
import {Button, Divider, makeStyles, Link} from '@material-ui/core';
import theme from './Footer.style';
import { config } from '../../../constants';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles(theme);
function Footer() {
    const {
        footer,
        content,
        logoWrapper,
        copyrightSection,
        copyrightSectionA
    } = useStyles()
    const history = useHistory()
    return (
        <div className={footer} >
            <Divider />
            <div className={content} >
                <div className={logoWrapper} >
                    <Button>
                    cafe sacro
                    </Button>
                    <div>
                        <Link className="coursePointer" color="inherit" onClick={() => {
              history.push("/privacy")
            }}  >
                            Privacy
                        </Link>
                        {"  "}
                        <Link className="coursePointer" color="inherit" onClick={() => {
              history.push("/terms")
            }}  >
                            Terms
                        </Link>
                    </div>
                </div>
                <div className={copyrightSection}>
                   <p>Copyright © 2020 <a className={copyrightSectionA} href="#"> cafe sacro </a>. All Rights Reserved | Made with ♥ in India</p>
                </div>
                
            </div>
        </div>
    )
}

export default Footer;
