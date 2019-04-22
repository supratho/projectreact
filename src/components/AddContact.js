import React from 'react'

class AddContact extends React.Component {
    //step1
    //create 2 reference variable
    contactname = React.createRef();
    contactnumber = React.createRef();

    // step 3
     handleAddContact = () => {
         let contObject={
         contactname:this.contactname.current.value,
         contactnumber:this.contactnumber.current.value,
     };
     this.props.addContact(contObject)
    }
    render() {
        return (
            <div className="well">
                <form>
                    {/* step 2 */}
                    {/* attact the ref variable to your input fields */}
                    Contact Name <input ref={this.contactname} />
                   <br/><br/>
                    Contact Number  <input ref={this.contactnumber} />
                    <br /><br/>
                    <button onClick={this.handleAddContact} className="btn btn-success">
                        Add New Contact</button>
                </form>
            </div>
        )
    }
}
export default AddContact;
