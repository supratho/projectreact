import React from 'react'
import { Link } from 'react-router-dom';
export const Header = ()=> {

        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-dark">

                <div className="container-fluid">

                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Brand</Link>
                    </div>

                    <div className="collapse navbar-collapse"
                      id="bs-example-navbar-collapse-1">

                        <ul className="nav navbar-nav">

                            <li className="active"><Link to="/">Home
                          <span className="sr-only">

                                    </span></Link></li>
                            <li><Link
                                to="/about">About</Link></li>

                                  <li><Link
                                to="/form">Form</Link></li>

                                 <li><Link
                                to="/FormEg">Form demo1</Link></li>

                                  <li><Link
                                to="/Form2">Form demo2</Link></li>

                                <li><Link
                                to="/RefsDemo1">Refs demo1</Link></li>

                                 <li><Link
                                to="/addDelete">Customer Info</Link></li>

                                 <li><Link
                                to="/LifecycleA">Lifecycle </Link></li>

                                
                                <li><Link
                                to="/ViewContacts">View Contacts </Link></li>

                                 <li><Link
                                to="/ParentComponent">Parent Component </Link></li>
               </ul>

              <ul
                 className="nav navbar-nav navbar-right">

               {/* <li><Link to="/login">Login</Link></li> */}

             </ul>

         </div>

     </div>
 </nav>
 );

}
export default Header;