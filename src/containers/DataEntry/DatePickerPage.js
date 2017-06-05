/**
 * Created by Aus on 2017/6/2.
 */
import React from 'react'
import ListTitle from '../../components/DataDisplay/ListTitle'
import List from '../../components/DataDisplay/List'
import DatePicker from '../../components/DataEntry/DatePicker'
import Tools from '../../components/Tools/Tools'
import moment from 'moment'

const Item = List.Item;

class DatePickerPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            dateValue: moment(),
            timeValue: moment("12:10", "HH:mm")
        }
    }
    handleChange (type, newValue) {
        console.log("value change");
        console.log(newValue);
        if(type == "date"){
            this.setState({
                dateValue: newValue
            });
        } else if(type == "time") {
            this.setState({
                timeValue: newValue
            });
        }
    }
    render () {
        const {dateValue, timeValue} = this.state;

        return (
            <div className="page date-picker">
                <h1 className="title">
                    <i className="fa fa-home" onClick={()=>{Tools.linkTo("/index")}}></i>
                    DataPicker
                </h1>

                <ListTitle title="基本" />

                <List>
                    <DatePicker
                        mode="date"
                        value={dateValue}
                        title="选择日期"
                        onChange={this.handleChange.bind(this, "date")}>
                        <Item subtitle={dateValue.format('YYYY-MM-DD')} icon="horizontal">日期选择</Item>
                    </DatePicker>
                    <DatePicker
                        mode="time"
                        value={timeValue}
                        title="选择时间"
                        timeStep={10}
                        onChange={this.handleChange.bind(this, "time")}>
                        <Item subtitle={timeValue.format('HH:mm')} icon="horizontal">时间选择</Item>
                    </DatePicker>
                </List>
            </div>
        )
    }
}

export default DatePickerPage