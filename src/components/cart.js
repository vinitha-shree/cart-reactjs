import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SvgIcon from '@material-ui/core/SvgIcon';

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
  

 class Cart extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
          update: false,
          updateIndex: "",
          items: [],
          sum:0,
          count: 0
        };
    }
        componentDidMount = () =>{
            let comments = JSON.parse(localStorage.getItem('user'));
            let {items} = this.state;
            let {sum} = this.state;
            items = comments;
            this.setState({items});
            console.log(comments[0].name);
            let i;
            for(i=0;i<items.length;i++){
                sum+=items[i].price;
            }
            this.setState({sum});
            let {count} = this.state;
             count = comments.length;
            this.setState({count});
            // console.log(sum);
            
        }
    
        handleDelete = index => {
            let { items , sum } = this.state;
            sum-=items[index].price;
            items.splice(index, 1);
            this.setState({ items: items });
            this.setState({sum});
            localStorage.setItem("user", JSON.stringify(items));
            console.log(items);
            let {count} = this.state;
            count -=1;
            this.setState({count});
          };

    render(){
        const { classes } = this.props;
        return(
            <div>
             
                {/* <button onClick={this.ch}>vini</button> */}
                {/* <p>{this.state.items}</p> */}
                <div className={classes.root}>
        
          <AppBar position="static" className={classes.nav}> 
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.grow}>
               <b>CART</b> 
              </Typography>
            <Link to="/">
      <IconButton aria-label="home">
                    <svg  width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" className={classes.icon}/></svg>								
                        </IconButton>
                        </Link>
         <Link to="/cart"> <IconButton aria-label="Cart" >
          <Badge badgeContent={this.state.count} color="secondary" classes={{ badge: classes.badge }}>
            <ShoppingCartIcon className={classes.icon}/>
          </Badge>
        </IconButton></Link>
            </Toolbar>
          </AppBar></div>
                <div className="answer-container">
        {this.state.items.length !== 0 ? (
          
        <div>
            <table id="cart">
            <thead>
              <tr class="w3-red">
               <th>Items</th>
               <th>Price</th>
               <th></th>
              </tr>
            </thead>
                <tbody>
              {this.state.items.map((item, i) => (
                <tr key={i}>
                    <td >{item.name}</td>
                    <td>{item.price}</td>
                    <td><IconButton aria-label="delete_forever" onClick={() => this.handleDelete(i)}>
                    <svg  width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>								
                        </IconButton></td>
                </tr>
              ))}
              <tr>
                    <td className="total"><b>Total</b></td>
                    <td><b>{this.state.sum}</b></td>
                    <td></td>
              </tr>
              </tbody>
              </table>
         </div>
        ) : null}
        
      </div>
            </div>
        )
    }   
}

Cart.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Cart);
