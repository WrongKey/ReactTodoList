'use strict'

var AppActions = require('src/js/actions/appActions')
var Reflux = require('reflux')

var TodoListStore = Reflux.createStore({
    init:function() {
        this.todoList = ['react js', 'reflux', 'mocha']
        this.listenTo(AppActions.loadTodoList,'onLoadTodoList')
        this.listenTo(AppActions.filterTodoList,'onFilterTodoList')
        this.listenTo(AppActions.addTodo,'onAddTodo')
    },

    onLoadTodoList: function() {
        this.trigger(this.state.todoList)
    },

    onFilterTodoList: function(condition) {
        var filteredTodoList = this.todoList.filter(function(item) {
            return item.contains(condition)
        })

        this.trigger(filteredTodoList)
    },

    onAddTodo: function(item) {
        this.state.todoList.push(item)
        this.trigger(this.state.todoList)
    }
})

module.exports = TodoListStore