import React, { Component } from 'react';
import Posts from './Posts';
import PostForm from './Postform';

class PostListContainer extends Component {
	constructor (props) {
		super(props);
		this.state = {
			postData : [],
			name : '',
		}
		this.addedItem = this.addedItem.bind(this)
  }

	componentWillMount(props) {
			fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(data => this.setState({ postData : data}))
	}
	 
	addedItem( {data} ) {
		const curData = [...this.state.postData]
		curData.push(data);
		this.setState({postData : curData})
	}
		

	render () {
		return (			
			<div>
				<PostForm updateItem = {this.addedItem} />
				<Posts postData = {this.state.postData}/>
			</div>

		)
	}
}
export default PostListContainer;