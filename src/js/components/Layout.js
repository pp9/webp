import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {title: 'welcome from state'}
    }
    changeTitle(val) {
        this.setState({title: val});
    }
    render() {
        const title = 'welcome !';
        return (
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
                <Footer />
            </div>
        );
    }
}
