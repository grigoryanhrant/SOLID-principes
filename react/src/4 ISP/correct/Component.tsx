import {Component} from "react";

class PostTable extends Component {
    render() {
        const post = {_id: 1, name: 'Top 10 React Native Best Practices', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'};
        return (
            <div>
                <PostRow id={post._id} name={post.name}/>
            </div>
        );
    }
}

class PostRow extends Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    };

    render() {
        return (
            <tr>
                <td>Id: {this.props.id}</td>
                <td>Name: {this.props.name}</td>
            </tr>
        )
    }
}
