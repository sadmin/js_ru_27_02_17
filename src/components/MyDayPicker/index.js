import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from './moment.js';

/*export default function SimpleCalendar() {
  return <DayPicker onDayClick={ day => console.log(day) } />;
}*/


class MyDayPicker extends React.Component {
constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }
  state = {
    from: null,
    to: null,
  };
  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
      
    const {onDayChange} = this.props
    onDayChange(range)
    console.log('---handleDayClick',range);
  }
  handleResetClick(e) {
    const {onDayChange} = this.props
    e.preventDefault();
    this.setState({
      from: null,
      to: null,
    });
    onDayChange({from:this.state.from, to: this.state.to})  
  }
 /* handle(s) {
  console.log('---',s);
  }*/
  render() {
    const { from, to } = this.state;
    console.log(from, to);
    
    return (
      <div className="RangeExample">
        { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
        { from && !to && <p>Please select the <strong>last day</strong>.</p> }
        { from && to &&
          <p>
            You chose from { moment(from).format('L') } to { moment(to).format('L') }.
            { ' ' }<a href="." onClick={ this.handleResetClick}>Reset</a>
          </p>
        }
        <DayPicker
          initialMonth={ new Date(2016, 5) }
          numberOfMonths={ 1 }
          selectedDays={ [from, { from, to }] }
          onDayClick={ this.handleDayClick }
        />
      </div>
    );
  }

}
export default MyDayPicker