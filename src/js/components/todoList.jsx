var AppActions = require('src/js/actions/appActions')
var TodoRow = require('src/js/components/todoRow')

var TodoList = React.createClass({

    render: function () {
        var rows = []
        this.props.todoList.forEach(function(todo) {
            rows.push(<TodoRow item={todo}/>)
        })
        return (
            <div>
                <ul>rows</ul>
            </div>
        );
    }
})

module.exports = TodoList