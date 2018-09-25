import React from 'react';
import { GoogleLogin } from 'react-google-login';


class Login extends React.Component {
  responseGoogle = (response) => {
    console.log(response);
  }
  render() {
    return (
      <div>
        <div>
          <h1>Login</h1>
          <GoogleLogin
            clientId="190153861043-sujtgpvqf43md02ctr6qufb2rne1gtgv.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
          />
        </div>
      </div>
    );
  }
}

export default Login;
