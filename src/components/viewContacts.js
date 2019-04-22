import React from 'react'
import AddContact from './AddContact';
import ShowContact from './ShowContact';
import axios from 'axios'

class ViewContacts extends React.Component {
    constructor(){
        super()
   
    this.state={contact:[]}
}
    baseURL=" http://localhost:3000/contact/";
    componentDidMount()
     {
         this.getContact()
        
    }   
    getContact=()=>{
        axios.get(this.baseURL).then((response)=>{
            this.setState({ contact: response.data})
        });
    }
    addContact=(contact)=> {
        axios.post(this.baseURL,contact).then((response)=>{
            this.getContact();
            alert('Contact Added');
        })
    }

    deleteContact=(id) => {
        alert('contact id :' + id)
        axios.delete(this.baseURL + id).then((res)=>{
            this.getContact();

        },(err)  => {
            this.setState({ errors:err})
        })
    }
    render()
    {
        
        return(
     <div>
     <h1 className="page-header">Manage Contacts</h1>
           <AddContact addContact={(contact)=>
        this.addContact(contact)}/>
           <ShowContact contact={this.state.contact} deleteContact={this.deleteContact}/>
           
     </div>
        )
    }
}
export default ViewContacts;
