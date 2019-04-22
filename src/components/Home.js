import React,{Component} from 'react'
export class Home extends Component{

    render()
    {
        
        return(
            <div>
            <h1>Hello from Home</h1>
            <img src={require('./images/images.jpg')} />
            </div>
        )
    }
}
export default Home;

 