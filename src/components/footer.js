import React, { Component } from 'react';

class Footer extends Component {

    state = {
        name: 'Alexxstep',
        age: 40
    }

    componentDidMount() {
        this.setState({ name: 'MyName' });
        // subscribe
    }

    componentWillUnmount() {
        // unsubscribe

    }

    changed = evt => {
        this.setState({ name: evt.target.value });
        console.log(this.state.name);
    }

    render() {
        return (
            <div>
                <h2 onClick={this.props.myalert}>
                    {this.props.trademark}</h2>
                <input value={this.state.name}
                    onChange={this.changed} type="text" />
                {this.state.age === 40 ? 'yes' : 'no'}

            </div>
        )
    };


};

export default Footer;