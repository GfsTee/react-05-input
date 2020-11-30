import React, { Component } from 'react';

class MyInput extends Component {
    state = {
        value1: "",
        value2: "",
        value3: "",
        collection: [

        ]
    }
    handleChange = (event) => {
        console.log(event.target.name);
        this.setState({ [event.target.name]: event.target.value });
    }
    handleAdd = () => {
        let newObj = { firstName: this.state.value1, lastName: this.state.value2, age: this.state.value3 }
        let tempCollection = this.state.collection
        tempCollection.push(newObj)
        this.setState({
            collection: tempCollection,
            value1: "",
            value2: "",
            value3: ""
        });
    }
    render() {
        return (
            <div>
                <input type="text" name="value1" value={this.state.value1} onChange={this.handleChange} /> <br />
                <input type="text" name="value2" value={this.state.value2} onChange={this.handleChange} /> <br />
                <input type="text" name="value3" value={this.state.value3} onChange={this.handleChange} /> <br />
                <button onClick={this.handleAdd}>Add</button>
                {this.state.collection.map((ele, i) => <div key={i}>The User is {ele.firstName} {ele.lastName} and is  {ele.age}</div>)}
            </div>
        );
    }
}

export default MyInput;