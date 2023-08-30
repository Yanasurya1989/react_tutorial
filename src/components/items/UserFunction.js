import React from "react";
import UserIamge from '../../static/images/user.png'

const UserFunction = (ieuTehprops) => {

    const {name, email, subretber} = ieuTehprops
    return (
        <div style={{ display: 'grid', gap: 10, gridTemplateColumns: "50px 1fr", marginBottom: 25 }}>
            <img src={UserIamge} alt="User avatar" style={{height: 50, width: 50}} />
            <div>
                {/* <h1>Props in Function Componen</h1> */}
                <h6 style={{margin: 0, textAlign: "left"}}>{name}</h6>
                <p style={{margin: 0, textAlign: "left"}}>{email}</p>
                <p style={{margin: 0, textAlign: "left"}}>subretber: {subretber}</p>
            </div>
        </div>
    );
}

export default UserFunction;