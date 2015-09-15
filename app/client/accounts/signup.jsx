Signup = React.createClass({
    render() {
        return (
            <div className="signup-container accounts-container">
                <div className="overlay" onClick={this.props.toggleSignup}></div>
                <div className="close-icon" onClick={this.props.toggleSignup}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <h2>Signup</h2>
            </div>
        )
    }
})
