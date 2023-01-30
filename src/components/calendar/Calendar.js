import React from 'react';
import DateTimeRangeContainer from 'react-advanced-datetimerange-picker';
import { FormControl } from 'react-bootstrap';
import moment from 'moment';
import './calendar.scss'

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    let now = new Date();
    let start = moment(
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
    );
    let end = moment(start).add(1, 'days').subtract(1, 'seconds');
    this.state = {
      start: start,
      end: end,
    };

    this.applyCallback = this.applyCallback.bind(this);
  }

  applyCallback(startDate, endDate) {
    this.setState({
      start: startDate,
      end: endDate,
    });
  }

  render() {
    let now = new Date();
    let start = moment(
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
    );
    let end = moment(start).add(1, 'days').subtract(1, 'seconds');
    let ranges = {
      'Today Only': [moment(start), moment(end)],
      'Yesterday Only': [
        moment(start).subtract(1, 'days'),
        moment(end).subtract(1, 'days'),
      ],
      '3 Days': [moment(start).subtract(3, 'days'), moment(end)],
    };
    let local = {
      format: 'YYYY-MM-DD',
      sundayFirst: true,
    };
    let maxDate = moment(start).add(24, 'hour');
    return (
      <div>
        <DateTimeRangeContainer
          ranges={ranges}
          start={this.state.start}
          end={this.state.end}
          local={local}
          maxDate={maxDate}
          applyCallback={this.applyCallback}
        >
          <FormControl
            id='formControlsTextB'
            type='text'
            label='Text'
            placeholder={now}
            className='control'
          />
        </DateTimeRangeContainer>
      </div>
    );
  }
}

export default Wrapper;
