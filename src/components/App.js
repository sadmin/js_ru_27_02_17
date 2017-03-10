import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList/index'
import Chart from './Chart'
import Select from 'react-select'
import MyDayPicker from './MyDayPicker/index'
import 'react-select/dist/react-select.css'

class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        text: '',
        selected: null,
        selectedDay: new Date(2016,6),
        range: {
            from: null,
            to: null
        }
    }

    render() {
        const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        const {from, to} = this.state.range;
        
        return (
            <div>
                Enter your name: <input type="text" value={this.state.text} onChange={this.handleTextChange}/>
                <Select options = {options} value={this.state.selected} onChange = {this.handleSelectChange} multi/>
                <MyDayPicker onDayChange = {this.handleDayChange} />
                <ArticleList articles={this.props.articles} from={from} to={to}/>
                <Chart articles={this.props.articles}/>
            </div>
        )
    }

    handleDayChange = range => {
        this.setState({ range })
    }
    handleSelectChange = selected => {
        this.setState({ selected })
    }

    handleTextChange = ev => {
        if (ev.target.value.length > 10) return

        this.setState({
            text: ev.target.value
        })
    }
}

export default App