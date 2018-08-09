import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 22 },
      { name: "Jeff", age: 27 },
      { name: "Stan", age: 22 }
    ]
  };

  deletePersonHandler = ( index ) => {
    const persons = this.state.persons.slice();
    persons.splice( index, 1 );
    this.setState( { persons: persons } );
  };

  render() {
    let persons = this.state.persons.map( ( p, i ) => {
       return <Person name={p.name} age={p.age} click={this.deletePersonHandler( i )} />
    });

    return (
      <div className="App">
        <h1>Hello React</h1>
        { persons }
      </div>
    );
  }
}

export default App;
