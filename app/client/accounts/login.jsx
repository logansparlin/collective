Login = React.createClass({
    getInitialState() {
        return {
            mounted: false
        }
    },
    componentDidMount() {
        this.setState({mounted: true})
    },
    onSubmit(e) {
        e.preventDefault();
        var doc = {
            user: $('#user').val(),
            password: $('#password').val()
        }
        Meteor.loginWithPassword(doc.user, doc.password, function(err) {
            if(err) {
                console.log(err)
            } else {
                console.log('logged in')
            }
        })
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
                        <Input type="text" id="user" label="username or email" />
                        <Input type="password" id="password" label="password" />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        )
    }
})
