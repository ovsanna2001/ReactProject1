import React, {Component} from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All',
                },
                {
                    key: 'chairs',
                    name: 'Chairs',
                },
                {
                    key: 'tables',
                    name: 'Tables',
                },
                {
                    key: 'sofas',
                    name: 'Sofas',
                },
                {
                    key: 'wardrobes',
                    name: 'Wardrobes',
                },
                {
                    key: 'beds',
                    name: 'Beds',
                },
                {
                    key: 'tvs',
                    name: 'Tvs',
                },
                {
                    key: 'lights',
                    name: 'Light',
                }
            ]
        }
    }
    render() {
        return (
            <div className="categories">
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories
