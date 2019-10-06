import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
  } 

  updateTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
 
  updateBody(e) {
    this.setState({ 
      body: e.target.value
    });
  }

 
  render () {
    return (
      <div>
        <form onSubmit={ () => this.props.action(this.state) }>
          <input onChange={ this.updateTitle.bind(this) } type="text" value={ this.state.title }/>
          <textarea onChange={ this.updateBody.bind(this) } value={ this.state.body }></textarea>
        </form>
      </div>
    );
  }
}
 
export default PostForm;
