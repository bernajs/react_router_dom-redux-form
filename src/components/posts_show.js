import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchPost, deletePost} from '../actions/index'
import {Link} from 'react-router-dom'

class PostsShow extends Component {
    componentDidMount() {
        this
            .props
            .fetchPost(this.props.match.params.id);
    }
    deletePost(){
        this.props.deletePost(this.props.match.params.id).then(()=> this.props.history.push('/'));
    }
    render() {
        const post = (this.props.posts[this.props.match.params.id]);
        return (
            <div>
                <h3>Title: {post.title}</h3>
                <span>Category: {post.categories}</span>
                <p>{post.content}</p>
                <Link to="/" className="btn btn-secondary">Back</Link>
                <a onClick={this.deletePost.bind(this)} className="btn btn-danger">Delete</a>
            </div>
        );
    }
}

function mapStateToprops(state,) {
    return {posts: state.posts}
}

export default connect(mapStateToprops, {fetchPost, deletePost})(PostsShow);