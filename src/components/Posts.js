import React, { Component } from 'react';
import Postform from './Postform';

class Posts extends Component {
	/*constructor (props) {
		super(props);
		this.state = {
			postData : []
		}
	}
	componentWillReceiveProps (nextProps) {
		this.setState ({
			postData : nextProps
		}) 
	}
*/
	render () {
		console.log(this.props.postData)
		let postItems = '';
			postItems = this.props.postData.map(post =>(
				<div key={post.id}>
					<h3>{ post.title }</h3>
					<p>{ post.body }</p>
				</div>
			));
		
		return (
			<div>
				<h1>Posts</h1>
				{postItems}
			</div>
		)
	}
}
export default Posts;