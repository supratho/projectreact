import React from 'react'
class Eventprops extends React.Component{

    updateage()
    {
        this.age=this.props.age;
        console.log("Before age update" +this.age);
        this.age+=5;
        console.log("After age update" +this.age);
    }
    render()
   {
       return( 
       
           <div>
           <h1>{this.props.age}</h1>
           <button onClick={()=>this.updateage()}>Update age</button>
           </div>
       )
   }
}
export default Eventprops;
