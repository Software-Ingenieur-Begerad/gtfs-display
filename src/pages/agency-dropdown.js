import React from 'react';
//import Dropdown from '../components/dropdown';
import Dropdown from '../components/agency-select';

export default class DropdownList extends React.Component {
    constructor () {
        super();
        this.state = {
            list: [],
            chosenValue: '',
            name: 'Agency'
        };
    }

    componentDidMount () {
    //TODO add API call for agency_id and agency_name
        fetch('https://soll.vbn.de/gtfs/agency-all')
            .then((response) => response.json())
            .then((item) => this.setState({ list: item }));
    }

  onDropdownChange = (e) => {
      this.setState({ chosenValue: e.target.value });
  };

  render () {
      return (
          <>
              <h2>Select agency from GTFS agency.txt file</h2>
              <Dropdown
                  name={this.state.name}
                  options={this.state.list}
                  onDropdownChange={this.onDropdownChange}
              />
          </>
      );
  }
}
