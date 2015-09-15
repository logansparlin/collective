cx = React.addons.classSet;

App = React.createClass({
    render() {
        return (
            <div id="app-container">
                {this.props.content}
            </div>
        )
    }
})
