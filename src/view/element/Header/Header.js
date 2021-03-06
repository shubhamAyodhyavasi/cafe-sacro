import React from 'react';
import clsx from 'clsx';
import {
  makeStyles, Link, Button, Drawer, Toolbar, AppBar,
  List, ListItem, ListItemText, Divider, IconButton
} from '@material-ui/core';
import { Menu, AccountCircle, Search } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import config from '../../../constants/config';
import logo from '../../../assets/images/sky-logo.png'



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    background: `#111111`,
    borderBottom:'2px solid #ff0018',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'red'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  desktopNav: {

  },
  mobileNav: {

  }
}));



function Header({ menus }) {
  const classes = useStyles();
  const history = useHistory()
  const [open, setOpen] = React.useState(false);
  const [openProfile, setOpenProfile] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerProfileOpen = () => {
    setOpenProfile(true);
  };
  const handleDrawerProfileClose = () => {
    setOpenProfile(false);
  };

  const isLogin = localStorage.getItem("userDetails");
  return (
    <div >
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <div className="navigation-wrapper">
            <Link  onClick={() => {
              history.push("/")
            }} color="inherit" className="logo-link" >
              {/* <img width="90px" className="coursePointer" src={logo} alt={config.appName} /> */}
              LOGO
            </Link>
            <div className="navigation-menu">
              <ul>
                {
                  menus.map((itm, index) =>
                    <li className="navigation-menu__item" key={index} >
                      <Button onClick={() => {
                        itm.cat_id && history.push(`/category/${itm.cat_id}`)
                      }} className="navigation-menu__link" >{itm?.title}</Button>
                    </li>
                  )
                }
                <li className="navigation-menu__item"  >
                  <Button onClick={() => {
                    history.push(`/`)
                  }} className="navigation-menu__link" >Home</Button>
                </li>
                <li className="navigation-menu__item"  >
                  <Button onClick={() => {
                    history.push(`/`)
                  }} className="navigation-menu__link" >About</Button>
                </li>
                <li className="navigation-menu__item"  >
                  <Button onClick={() => {
                    history.push(`/`)
                  }} className="navigation-menu__link" >Contact Us</Button>
                </li>
              </ul>
            </div>
            <div className="navigation-menu-user">
            
              
            </div>
            <div className="mobile-nav">
             
              <Button onClick={handleDrawerOpen}><Menu /></Button>
              <Drawer classes={{
                paper: classes.drawerPaper,
              }}
                anchor={"right"} open={open} onClose={handleDrawerClose}>
                <List style={{
                  width: "100%"
                }} >
                 
                  <ListItem  button onClick={() => {
                        history.push(`/`)
                      }} >
                        <ListItemText primary='Home' />
                      </ListItem>
                      <Divider />
                    
                  
                  <Divider />
                  <ListItem  button onClick={() => {
                        history.push(`/`)
                      }} >
                        <ListItemText primary='About' />
                      </ListItem>
                      <Divider />

                      <ListItem  button onClick={() => {
                        history.push(`/`)
                      }} >
                        <ListItemText primary='Contact' />
                      </ListItem>
                      <Divider />
                    
                  
                 
                  
                </List>
              </Drawer>
              <Drawer classes={{
                paper: classes.drawerPaper,
              }}
                anchor={"right"} open={openProfile} onClose={handleDrawerProfileClose}>
                <List style={{
                  width: "100%"
                }} >
                  <ListItem button onClick={() => {
                    history.push(`/wallet`)
                  }} >

                    <ListItemText primary={"Wallet"} />
                  </ListItem>
                  <Divider />
                  <ListItem button onClick={() => {
                    history.push(`/saved-video`)
                  }} >

                    <ListItemText primary={"Saved Video List"} />
                  </ListItem>
                  <Divider />
                  <ListItem button onClick={() => {
                    history.push(`/profile`)
                  }} >

                    <ListItemText primary={"Profile"} />
                  </ListItem>
                  <Divider />
                  <ListItem button onClick={() => {
                    history.push(`/membership`)
                  }} >

                    <ListItemText primary={"Membership"} />
                  </ListItem>
                  <Divider />
                  <ListItem button onClick={() => {
                    history.push(`/change-password`)
                  }} >

                    <ListItemText primary={"Change Password"} />
                  </ListItem>
                  <Divider />

                  {
                    isLogin ? <>
                      <ListItem button onClick={() => { localStorage.removeItem("userDetails"); history.push(`/`) }} >
                        <ListItemText primary={"Logout"} />
                      </ListItem>
                    </> :
                      <ListItem button onClick={() => {
                        history.push(`/login`)
                      }} >
                        <ListItemText primary={"Login"} />
                      </ListItem>
                  }
                </List>
              </Drawer>
            </div>
          </div>
        </Toolbar>
      </AppBar>

    </div>
  );
}


const mapStateToProps = state => ({
  menus: state.app.menus,
});

export default connect(mapStateToProps)(Header)