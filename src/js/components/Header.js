import React from 'react';

export default class Header extends React.Component {
    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }
    render(){
        return (
            <div>
                <header>this is header with title {this.props.title}</header>
                <input type="text" value={this.props.title} onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}
