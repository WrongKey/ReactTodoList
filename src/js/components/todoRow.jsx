var React = require('react');

var TodoRow = React.createClass({
    render: function () {
        return (
            <li>{this.props.item}</li>
        );
    }
});

module.exports = TodoRow