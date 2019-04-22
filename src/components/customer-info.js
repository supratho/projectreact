import React from 'react'
import CustomerDisplay1 from './customerdisplay'
class CustomerInfo extends React.Component{
constructor(){
    super()
    //step1
    this.state={
        user:{
            userName:'',
            userEmail:'',
            userMobile:'',
            userAddress:'',
            userDescription:'',
            userDateofVisit:''
        }//user end
        // ,
        // display: false
    }//state end
}//constructor end

//step 4 define an event method
handleSubmit(e) {
    e.preventDefault();
    alert(`${this.state.user.userName}`)
    alert(`${this.state.user.userMobile}`)
    alert(`${this.state.user.userAddress}`)
    alert(`${this.state.user.userDescription}`)
    this.setState({display:true})
}

 UpdateState(ctrl,value)
 {
     const {user} = this.state; //fet the current state
     user[ctrl]=value; //update the user enter
     this.setState({user}); //update the new state
 }
   resetState()
   {
       this.setState(
           {
            user:{
                userName:'',
                userEmail:'',
                userMobile:'',
                userAddress:'',
                userDescription:'',
                userDateofVisit:''
            }
            ,
            display: false
           } 
       )
    }


    render()
    {
        //step2
        const {user} = this.state;
        return(
            <div>
            <h1>State Add and Delete</h1>
           
            {/* define an event OnSubmit and call a method */}
            <form onSubmit={(e)=>this.handleSubmit(e)}>
                <label>User Name</label>
                <input type="text" value={user.userName} 
                onChange={(e)=>this.UpdateState('userName',e.currentTarget.value)}/>
                <br/>
                
                <label>Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" value={user.userEmail} onChange={(e)=>this.UpdateState('userEmail',e.currentTarget.value)}/>
                <br/>

            
                <label>Mobile</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" value={user.userMobile} onChange={(e)=>this.UpdateState('userMobile',e.currentTarget.value)}/>

                <br/>
                
                <label>Address</label>&nbsp;&nbsp;&nbsp;
                <input type="text" value={user.userAddress} onChange={(e)=>this.UpdateState('userAddress',e.currentTarget.value)}/>
                <br/>

                <label>Description</label>
                <input type="text" value={user.userDescription} onChange={(e)=>this.UpdateState('userDescription',e.currentTarget.value)}/>
                <br/>

                <label>User Date of visit</label>
                <input type="text" value={user.userDateofVisit} onChange={(e)=>this.UpdateState('userDateofVisit',e.currentTarget.value)}/>
                <br/>

                <button className="btn btn-success" type="submit">Submit</button>


            </form>
            {
            this.state.display ?
            <CustomerDisplay1  deleteCustomer={(e)=>this.resetState()}
             userData={this.state.user} /> : null
            }
            </div>
            
        )
    }
}
export default CustomerInfo