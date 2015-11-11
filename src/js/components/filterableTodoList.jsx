var AppActions = require('src/js/actions/appActions')

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