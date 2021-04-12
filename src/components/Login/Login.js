import React from 'react';
import Button from '@material-ui/core/Button';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

class Login extends React.Component {

    render() {
        return (
            <div>
                <Button 
                variant="contained"
                style={{color:"#e3f2fd",
                backgroundColor:"#5471d2",
                margin:"15px"}}
                startIcon={<PermIdentityIcon />}
                >
                Login</Button>
            </div>
        )
    }
}

export default Login;