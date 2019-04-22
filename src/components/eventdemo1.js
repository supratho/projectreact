import React from 'react'

class EventDemo1 extends React.Component{
    
    callEvent()
    {
        console.log('Am from an event');
    }
    render(){
        return(
        <button onClick={() => this.callEvent()}>Event Click Me</button>
        )
    }
}
export default EventDemo1;