import React, { Component } from 'react';
import './App.css';
import BettingEvent from './Betting_event.js'
import Titlebar from './titlebar.js'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {rows: <BettingEvent name="BeerPong" members="5"/>}

    }


    createNewEvent(){
        console.log("Hej");
        this.state = {rows: <p>hej</p>}
    }

    render() {
        return (
            <div className="App">
                <Titlebar />

                  <div className="betting_event">
                      <h1>Here is all the active events</h1>
                      {this.state.rows}
                  </div>

                  <div>
                      <h2>Here you can create new events</h2>
                        <button onClick={this.createNewEvent()} value="Create new event"> </button>
                  </div>

            </div>
        );

    }


}


export default App;
