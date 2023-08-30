import React, {Component} from "react";
import UserImage from '../../static/images/user.png'

class UserClass extends Component{
    render(){
        const {name, email, subretber} = this.props
        return (
            <div style={{ display: 'grid', gap: 10, gridTemplateColumns: "50px 1fr", marginBottom: 25 }}>
                <img src={UserImage} alt="tok" style={{height: 50, width: 50}} />
                <div>
                    {/* <h1>Props in Class Componen</h1> */}
                    <h6 style={{margin: 0, textAlign: "left"}}>{name}</h6>
                    <p style={{margin: 0, textAlign: "left"}}>{email}</p>
                    <p style={{margin: 0, textAlign: "left"}}>subretber: {subretber}</p>
                </div>
            </div>
        )
    }
}

export default UserClass