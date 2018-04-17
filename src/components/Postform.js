import React,{Component} from 'react';

class PostForm extends Component {
	constructor (props) {
		super(props);
		this.state = {
			title : '',
			body : ''
		}
	}

	onChangeHandler = (e) => {
		const val = e.target.value;
		this.setState ({[e.target.name] : val}) 
	}

	submitHandler = (e) => {
		e.preventDefault();
		const post = {
			title : this.state.title,
			body : this.state.body
		}
		fetch ('https://jsonplaceholder.typicode.com/posts',{
			method : 'POST',
			headers : {
				'content-type' : 'application/json'
			},
			body : JSON.stringify(post)
			}).then(res => res.json())
			.then(data => this.props.updateItem({data}))
			
	}

	render () {
		return (
			<div>
				<h1>Add Post</h1>
				<form onSubmit = {e => this.submitHandler(e)}>
					<div>
						<label>Title</label><br />
						<input type="text" name="title" onChange= {(e) => this.onChangeHandler(e)} value = {this.state.title}/> 
					</div>
					<br />
					<div>
						<label>Body</label><br/>
						<textarea name="body" onChange= {(e) => this.onChangeHandler(e)} value = {this.state.body}></textarea> 
						<br />
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}
export default PostForm;