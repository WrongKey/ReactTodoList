var AppActions = require('src/js/actions/appActions')
var ReactDOM = require('react-dom');
var React = require('react');

var FilterableTodoList = React.createClass({
    render: function () {
        return (
            <div>
                <FilterBox />
                <TodoList todoList={this.props.todoList}/>
                <AddForm />
            </div>
        );
    }
});

ReactDOM.render(
    <FilterableTodoList todoList={AppActions.loadTodoList()}/>,
    document.getElementById('app')
);