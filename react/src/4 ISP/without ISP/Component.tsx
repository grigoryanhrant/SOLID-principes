import {Component} from "react";

class PostTable extends Component {

    render() {
        const post = {_id: 1, name: 'Top 10 React Native Best Practices', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'};
        return (
            <div>
                <PostRow post={post}/>
            </div>
        );
    }
}

class PostRow extends Component {

    static propTypes = {
        post: PropTypes.object.isRequired,
    };

    render() {
        return (
            <tr>
                <td>Id: {this.props.post._id}</td>
                <td>Name: {this.props.post.name}</td>
            </tr>
        )
    }
}
