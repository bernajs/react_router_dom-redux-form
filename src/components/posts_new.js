import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'
import {Link} from 'react-router-dom'
import {createPost} from '../actions/index'
import {connect} from 'react-redux'

class PostsNew extends Component {
    renderField(field) {
        const className = `form-group ${field.meta.touched && field.meta.error
            ? 'has-danger'
            : ''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input}/>
                <div className="text-help">
                    {field.meta.touched
                        ? field.meta.error
                        : ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        this
            .props
            .createPost(values)
            .then(() => this.props.history.push('/'));
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field label="Title" name="title" component={this.renderField}></Field>
                <Field label="Categories" name="categories" component={this.renderField}></Field>
                <Field label="Content" name="content" component={this.renderField}></Field>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-secondary">Back</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Please enter a title';
    }
    if (!values.categories) {
        errors.categories = 'Please enter a category';
    }
    if (!values.content) {
        errors.content = 'Please enter a content';
    }

    return errors;
}

export default reduxForm({validate, form: 'PostsNewForm'})(connect(null, {createPost})(PostsNew));

//Me quede en componentes