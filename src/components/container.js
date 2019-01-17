import React from 'react';
import bag from '../images/bag.jpeg';
import box from '../images/box.jpeg';
import shoe from '../images/shoe.jpeg';
import bottle from '../images/bottle.jpg';
import book from '../images/book.jpeg';
import lunch from '../images/lunch.jpeg';
import Header from './header';
import '../App.css';
import '../App.js';


export default class Container extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
        item: { 
            name: "",
            price:0,
           },
          update: false,
          updateIndex: "",
          items: []
        };
    }
    componentDidMount=()=>{
        let comments = JSON.parse(localStorage.getItem('user'));
        let {items} = this.state;
        items = comments;
        this.setState({items});
    }
    addItem =(item1 , price) =>{
        //function to add item
        this.state.item.name = item1;
        this.state.item.price = price;
        let { items, item } = this.state;
        if (this.state.update) {
          items[this.state.updateIndex] = item;
          this.setState({ update: false });
        } else {
          items.push(item);
        }
     
      item = {
        name: "",
        price: 0,
      };
     this.props.handleCartNumber();
      this.setState({ items, modal: false, item });
      localStorage.setItem("user", JSON.stringify(this.state.items));
        // console.log(this.state.items);
    }
    render(){
        return(
            <div>
                 {/* <Header handleCartNumber={this.handleCartNumber}/> */}
                <table>
                    <tr>
                        <td>
                            <div className="item">
                                <img src={bag} className="image"></img>
                                <div className="description">
                                    School bag
                                    <p>price: ₹ 500</p>
                                    <button className="button button1" onClick={()=>this.addItem("School bag",500)}>Add to cart</button>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="item">
                                <img src={box} className="image"></img>
                                <div className="description">
                                    Pencil Case
                                    <p>price: ₹ 75</p>
                                    <button className="button button1" onClick={()=>this.addItem(" Pencil Case",75,)}>Add to cart</button>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="item">
                                <img src={shoe} className="image"></img>
                                <div className="description">
                                    Shoe
                                    <p>price: ₹ 850</p>
                                </div>
                                <button className="button button1" onClick={()=>this.addItem(" Shoe",850)}>Add to cart</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                    <td>
                            <div className="item">
                                <img src={lunch} className="image"></img>
                                <div className="description">
                                    Lunch Box
                                    <p>price: ₹ 150</p>
                                </div>
                                <button className="button button1" onClick={()=>this.addItem("Lunch box",150)}>Add to cart</button>
                            </div>
                        </td>
                        <td>
                            <div className="item">
                                <img src={book} className="image"></img>
                                <div className="description">
                                    Rough books
                                    <p>price: ₹ 130</p>
                                </div>
                                <button className="button button1" onClick={()=>this.addItem("Rough books",130)}>Add to cart</button>
                            </div>
                        </td>
                        <td>
                            <div className="item">
                                <img src={bottle} className="image"></img>
                                <div className="description">
                                    Water bottle
                                    <p>price: ₹ 300</p>
                                </div>
                                <button className="button button1" onClick={()=>this.addItem("Water bottle",300)}>Add to cart</button>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }   
}