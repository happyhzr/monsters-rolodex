import React from "react";

import "./search-box.styles.css";

export default class SearchBox extends React.Component {
    render() {
        return (
            <input
                className={`search-box ${this.props.className}`}
                type="search"
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
            />
        );
    }
}