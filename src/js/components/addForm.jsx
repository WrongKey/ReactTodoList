var AppActions = require('src/js/actions/appActions')

var AddForm = React.createClass({
    getInitialState: function () {
        return {text: ''}
    },

    handleUserInput: function(e) {
        this.setState({text: e.target.value})
    },

    addTodo:function() {
        AppActions.addTodo(this.state.text)
        this.setState({text: ''})
    },

    render: function () {
        return (
            <form onSubmit={this.addTodo}>
                <input onChange={this.handleUserInput} value={this.state.text}/>
                <button>{'Add new todo'}</button>
            </form>
        );
    }
})

module.exports = AddForm