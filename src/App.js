import React, {Component} from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            items: [
                {
                    id: 1,
                    title: 'Gray chair',
                    img: 'chair1.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id: 2,
                    title: 'Table',
                    img: 'table1.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    category: 'tables',
                    price: '50.99'
                },
                {
                    id: 3,
                    title: 'Sofa',
                    img: 'sofa1.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    category: 'sofas',
                    price: '99.9'
                },
                {
                    id: 4,
                    title: 'Wardrobe',
                    img: 'wardrobe1.webp',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    category: 'wardrobes',
                    price: '150.00'
                },
                {
                    id: 5,
                    title: 'Bed',
                    img: 'bed1.jpeg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    category: 'beds',
                    price: '149.02'
                },
                {
                    id: 6,
                    title: 'Tv',
                    img: 'tv1.jpeg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    category: 'tvs',
                    price: '199.99'
                },
                {
                    id: 7,
                    title: 'Chair',
                    img: 'chair2.webp',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    category: 'chairs',
                    price: '100.99'
                },
                {
                    id: 8,
                    title: 'Light',
                    img: 'light1.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    category: 'lights',
                    price: '150.99'
                },
                {
                    id: 9,
                    title: 'Bed',
                    img: 'bed2.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    category: 'beds',
                    price: '250.99'
                },
                {
                    id: 10,
                    title: 'Light',
                    img: 'light2.jpg',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    category: 'lights',
                    price: '155.99'
                }
            ],
            currentItems: [],
            showFullItem: false,
            fullItem: {},
        }
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
    }
    render() {
        return (
          <div className="wrapper">
            <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
            <Categories chooseCategory={this.chooseCategory}/>
            <Items items={this.state.currentItems} onAdd={this.addToOrder} onShowItem={this.onShowItem}/>
            {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem}/> }
            <Footer/>
          </div>
        )
    }
    addToOrder(item) {
        let isInArr = false;
        this.state.orders.forEach((el) => {
            if(el.id === item.id) {
                isInArr = true;
            }
        })
        if(!isInArr)
            this.setState({orders: [...this.state.orders, item]})
    }
    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }
    chooseCategory(category) {
        if(category === 'all') {
            this.setState({
                currentItems: this.state.items
            })
            return
        }
        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }
    onShowItem(item) {
        this.setState({fullItem: item})
        this.setState({showFullItem: !this.state.showFullItem})
    }
}
export default App;
