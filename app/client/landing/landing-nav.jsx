LandingNav = React.createClass({
    render() {
        return (
            <nav id="landing-nav">
                <ul>
                    <li onClick={this.props.toggleLogin}>Login</li>
                    <li onClick={this.props.toggleSignup} className="signup-link">Signup</li>
                </ul>
            </nav>
        )
    }
})
