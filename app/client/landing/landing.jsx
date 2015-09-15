Landing = React.createClass({
    getInitialState() {
        return {
            loginActive: false,
            signupActive: false
        }
    },
    toggleLogin() {
        console.log('toggle login')
        this.setState({loginActive: !this.state.loginActive, signupActive: false})
    },
    toggleSignup() {
        console.log('toggle signup')
        this.setState({loginActive: false, signupActive: !this.state.signupActive})
    },
    render() {
        return (
            <div id="landing-container">
                {(this.state.loginActive) ? <Login toggleLogin={this.toggleLogin}/> : ''}
                {(this.state.signupActive) ? <Signup toggleSignup={this.toggleSignup} /> : ''}
                <div className="landing-hero">
                    <h1>Collective</h1>
                    <LandingNav
                        toggleLogin={this.toggleLogin}
                        toggleSignup={this.toggleSignup}
                    />
                </div>
            </div>
        )
    }
})
