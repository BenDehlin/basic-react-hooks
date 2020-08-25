import React, {Component} from 'react'
import {connect} from 'react-redux'
import {changeUsername} from '../redux/reducer'

class ClassComponent extends Component{
    constructor(){
        super()
        this.state = {
            count: 0,
            name: '',
            movies: []
        }
    }

    componentDidMount(){
        console.log('Component Mounted')
        // axios.get('/api/movies').then((results) => {
        //     this.setState({movies: results.data})
        // })
        // console.log(this.props)
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    decrement = () => {
        this.setState({count: this.state.count - 1})
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
                <input
                onChange={this.handleChange}
                name='name'
                value={this.state.name}
                placeholder="Enter name"
                />
                <h1>{this.props.user.username}</h1>
                <button onClick={() => this.props.changeUsername(this.state.name)}>Change Username</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => state

export default connect(mapStateToProps, {changeUsername})(ClassComponent)