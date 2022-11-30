import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get("https://localhost:44394/Employee/Employee/Get")
      .then(res => {
        const persons = res.data;
          this.setState({ persons });
          console.log(persons);
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.persons
            .map(persons =>
              <li key={persons.id}>{persons.name}</li>,
              
            
              
            )
        }
      </ul>
    )
  }
}