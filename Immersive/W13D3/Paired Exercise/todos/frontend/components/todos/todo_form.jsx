import React from 'react';
import UniqueId from '../../util/unique_id';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        title: '',
        body: ''
      }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  //onChange("title");
  onChange (prop) {
    return (e) => { 
      e.preventDefault();  
      this.setState({
        [prop]: e.target.value 
        //title: e.target.value
      });
    }
  }

  onSubmit (e) {
    e.preventDefault();
    this.props.receiveTodo({
        id: UniqueId(),
        title: this.state.title,
        body: this.state.body
    });
    this.setState({title: '', body: ''})
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Title
          <input onChange={this.onChange("title")} type="text" value={ this.state.title }/>
        </label>
        <label>Body
          <textarea onChange={this.onChange("body")} name="body" value={ this.state.body } cols="30" rows="10"></textarea>
        </label>
        <button type="submit">Add Todo</button>
      </form>
    )
  }
}