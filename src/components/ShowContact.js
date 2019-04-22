import React from 'react'

class ShowContact extends React.Component {

    render() {
        const contact = this.props.contact;
        return (
            <div>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Contact Name</th>
                          
                            <th>Contact Number</th>
                        </tr>

                    </thead>
                    <tbody>

                        {contact.map(contact => (
                                <tr key={contact.id}>
                                    <td>{contact.contactname}</td>
                                    <td>{contact.contactnumber}</td>
                                    <td><button onClick={()=>this.props.deleteContact
                                    (contact.id)}
                                    className="btn btn-danger">X</button></td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ShowContact;
