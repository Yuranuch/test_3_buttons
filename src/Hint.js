import React, {Component} from 'react'
import './App.css'


class Hint extends Component {

    render() {

        return (

            <div>
                <span>{this.props.title}</span><br/>
                <span>{this.props.id}</span>
            </div>

        )
    }
}


export default Hint