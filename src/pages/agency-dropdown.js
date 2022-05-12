import React from 'react';
import PropTypes from 'prop-types';

export const Dropdown = (props) => (
    <div className="form-group">
        <strong>{props.name}</strong>
        <select
            className="form-control"
            name="{props.name}"
            onChange={props.onChange}
        >
            <option defaultValue>Select {props.name}</option>
            {props.options.map((item, index) => (
                <option key={index} value={item.agency_id}>
                    {item.agency_name}
                </option>
            ))}
        </select>
    </div>
);

Dropdown.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.array
};

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
        fetch('https://soll.vbn.de/gtfs/agency-all')
            .then((response) => response.json())
            .then((item) => this.setState({ list: item }));
    }

  onDropdownChange = (e) => {
      this.setState({ chosenValue: e.target.value });
  };

  render () {
      return (
          <div>
              <h2>Select agency from GTFS agency.txt file</h2>

              <Dropdown
                  name={this.state.name}
                  options={this.state.list}
                  onDropdownChange={this.onDropdownChange}
              />
          </div>
      );
  }
}
