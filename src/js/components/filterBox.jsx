var AppActions = require('src/js/actions/appActions')

var FilterBox = React.createClass({
    getInitialState: function () {
        return {condition: ''}
    },

    filterTodoList:function() {
        this.setState({condition: e.target.value});
        AppActions.filterTodoList(this.state.condition)
    },

    render: function () {
        return (
            <input onChange={this.filterTodoList} value={this.state.condition}/>
        );
    }
})

module.exports = FilterBox