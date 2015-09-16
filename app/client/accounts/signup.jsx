Signup = React.createClass({
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
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            username: $('#username').val(),
            email: $('#email').val(),
            password: $('#password').val()
        }
        console.log(doc)
        Accounts.createUser(doc, function(err) {
            if(err) {
                console.log(err)
            } else {
                console.log('success')
            }
        })
        this.props.toggleSignup()
    },
    render() {
        return (
            <div className="signup-container accounts-container">
                <div className="overlay" onClick={this.props.toggleSignup}></div>
                <div className="close-icon" onClick={this.props.toggleSignup}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <h2>Signup</h2>
                <div className="accounts-form signup-form">
                    <form onSubmit={this.onSubmit}>
                        <h2>Signup</h2>
                        <Input type="text" id="firstName" label="first name" width="half"/>
                        <Input type="text" id="lastName" label="last name" width="half"/>
                        <Input type="text" id="username" label="username" />
                        <Input type="text" id="email" label="email" />
                        <Input type="password" id="password" label="password" />
                        <button type="submit">Signup</button>
                    </form>
                </div>
            </div>
        )
    }
})
