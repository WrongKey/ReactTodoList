var Reflux = require('reflux');

var AppActions = Reflux.createActions({
        loadTodoList: {sync: true},
        addTodo: {sync: true},
        filterTodoList: {sync: true}
    }
);

module.exports = AppActions