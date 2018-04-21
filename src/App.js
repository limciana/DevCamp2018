import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Student extends React.Component {
  constructor(){
    super();
    this.state = {
      students: [],
      mode: 'add',
      add: {
        id: 1,
        student_number: '',
        name: '',
        email: '',
        phone: '',
      },
      edit: null,
      query: ''
    };
    this.commitStudent = this.commitStudent.bind(this);
    // this.handleFieldChange = this.handleFieldChange.bind(this);
    // this.handleRegistrantSelect = this.handleRegistrantSelect.bind(this);
  }

  commitStudent(student_number, name, email, phone){
    //e.preventDefault();
    this.setState(({ students, mode, ...state}) => {
      let modifiedStudents;
      let newStudent = state[mode];

      switch (mode) {
        case 'add':
        modifiedStudents = [...students, newStudent ];
        break;
        case 'edit':
        modifiedStudents = students.map(student => student => (student.id === newStudent.id? newStudent : Student));
        break;
        default:
        throw new Error('Unknown mode ${ mode }');
      }
      return {
        students: modifiedStudents,
        [mode]: (
          mode === 'add' ?
          {
            id: state[mode].id + 1,
            student_number: '',
            name: '',
            email: '',
            phone: '',
          } : null
        ),
        mode: 'add'
      };
    });
  }
}

var student = new Student();
student.commitStudent("201512345", "Bob", "xyz@xyz.com", "1234567");

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
