var AppActions = require('src/js/actions/appActions')
var ReactDOM = require('react-dom');
var React = require('react');
var FilterBox = require('src/js/components/filterBox');
var TodoList = require('src/js/components/todoList');
var AddForm = require('src/js/components/addForm');


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