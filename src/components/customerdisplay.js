import React from 'react'
class CustomerDisplay1 extends React.Component{
    render()
    {
        const user = this.props.userData;
        return(
            <div>
                <h1>Display the Customer Information</h1>
                <p>{user.userName}</p>
                <p>{user.userEmail}</p>
                <p>{user.userMobile}</p>
                <p>{user.userAddress}</p>
                <p>{user.userDescription}</p>
                <p>{user.userDateofVisit}</p>
                <button className="btn btn-danger"
                 onClick={()=>this.props.deleteCustomer()}>Delete</button>
            </div>
        )
    }
}
export default CustomerDisplay1