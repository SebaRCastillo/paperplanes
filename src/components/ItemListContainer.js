import {Component} from "react";

export default class ItemListContainer extends Component {
    render(){
        return (
            <h2>{this.props.greet}</h2>
        );
    }
}