import React from 'react'
class RefsDemo1 extends React.Component{
    constructor(props)
    {
        super(props)
        //step1
        this.myrefvar=React.createRef();
    }
    //step3
     componentDidMount()
     {
         this.myrefvar.current.focus();
         console.log(this.myrefvar);
     }
    render()
    {
        return(
            <div>
                {/* step2 */}
                <input type="text" ref={this.myrefvar}/>
                <button>Click</button>
            </div>
        )
    }
}
export default RefsDemo1;