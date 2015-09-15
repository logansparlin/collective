Input = React.createClass({

    getInitialState() {
        return {
            focused: false,
            empty: true
        }
    },
    focus(e) {
        this.setState({focused: true})
    },
    blur(e) {
        this.setState({focused: false})
        if(e.target.value) {
            this.setState({empty: false})
        } else {
            this.setState({empty: true})
        }
    },
    render() {
        var classes = cx({
            'focused': this.state.focused,
            'has-value': !this.state.empty,
            'input-container': true
        })
        return (
            <div className={classes}>
                <label forHTML={this.props.id}>{this.props.label}</label>
                <input
                    onFocus={this.focus}
                    onBlur={this.blur}
                    type={this.props.type}
                    id={this.props.id} />
            </div>
        )
    }
})
