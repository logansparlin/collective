Login = React.createClass({
    componentDidMount() {
        var el = $('.accounts-form');
        TweenMax.fromTo(el, 0.5, {opacity: 0, yPercent: 20}, {opacity: 1, yPercent: 0, autoRound: false, force3D: true})
    },
    render() {
        return (
            <div className="login-container accounts-container">
                <div className="overlay" onClick={this.props.toggleLogin}></div>
                <div className="close-icon" onClick={this.props.toggleLogin}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <div className="accounts-form login-form">
                    <form onSubmit={this.onSubmit}>
                        <h2>Login</h2>
                        <Input type="text" id="email" label="email" />
                        <Input type="password" id="password" label="password" />
                    </form>
                </div>
            </div>
        )
    }
})
