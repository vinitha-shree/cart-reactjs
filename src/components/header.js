import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Container from './container';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    nav: {
      background: "rgb(204, 202, 199)",
    },
    badge: {
      top: 1,
      right: -15,
      // The border color match the background color.
      border: `2px solid ${
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
      }`,
    },
    icon:{
      height: "40px",
      width: "40px",
    }
  });
  
  
  class Header extends React.Component  {
    constructor(props){
      super(props)
      this.state={
          count: 0
      }
    }
    componentWillMount=()=>{
        let comments = JSON.parse(localStorage.getItem('user'));
        let {count} = this.state;
        count = comments.length;
        this.setState({count});
        // console.log(this.state.count);
    }
  
   handleCartNumber = () =>{
    // let cnt = length;
    // let {count} = this.state;
    // count=length;
    // this.setState({count});
    let comments = JSON.parse(localStorage.getItem('user'));
    let cnt = comments.length + 1;
    let {count} = this.state;
    count=cnt;
    this.setState({count});
    
  }

  
    render(){
      const { classes } = this.props;
      console.log(this.state.count);
      
      return (
        <div className={classes.root}>
        
          <AppBar position="static" className={classes.nav}> 
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.grow}>
               <b>CART</b> 
              </Typography>
         <Link to="/cart"> <IconButton aria-label="Cart" >
          <Badge badgeContent={this.state.count} color="secondary" classes={{ badge: classes.badge }}>
            <ShoppingCartIcon className={classes.icon}/>
          </Badge>
        </IconButton></Link>
            </Toolbar>
          </AppBar>
          <Container handleCartNumber={this.handleCartNumber}/>
         
        </div>
      );
      
    }
  }
  Header.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Header);