import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        userName: "default"
    };

    nameChangedHandler = (event) => {
        this.setState({
            userName: event.target.value
        });
    };

    render() {
        return (
            <div className="App">
                <ol>
                    <del>
                        <li>Create TWO new components: UserInput and UserOutput</li>
                    </del>
                    <del>
                        <li>UserInput should hold an input element, UserOutput two paragraphs</li>
                    </del>
                    <del>
                        <li>Output multiple UserOutput components in the App component (any paragraph texts of your
                            choice)
                        </li>
                    </del>
                    <del>
                        <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
                    </del>
                    <del>
                        <li>Add state to the App component (=> the username) and pass the username to the UserOutput
                            component
                        </li>
                    </del>
                    <del>
                        <li>Add a method to manipulate the state (=> an event-handler method)</li>
                    </del>
                    <li>Pass the event-handler method reference to the UserInput component and bind it to the
                        input-change event
                    </li>
                    <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput
                    </li>
                    <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
                    <li>Add styling of your choice to your components/ elements in the components - both with inline
                        styles and stylesheets
                    </li>
                </ol>
                <hr/>
                <UserInput
                    changed={this.nameChangedHandler}
                    currentName={this.state.userName}/>
                <UserOutput
                    name={this.state.userName}
                />
                <UserOutput name="Garry"/>
            </div>
        );
    }
}

export default App;
