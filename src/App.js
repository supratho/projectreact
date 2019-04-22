import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { Welcome } from './components/welcome'
import { Funclassdemo } from './components/functcomponent'
import Greeting from './components/Greetings';
import GreetingClassComponents from './components/GreetingClassComponents';
import NumListClassComp from './components/NumListClassComp';
import ListDemo from './components/Listdemo';
import Home from './components/Home';
import About from './components/About';
import Header from './components/header';
import Form from './components/form';
import FormEg from './components/formdemo1';
import Form2 from './components/formdemo2';
import RefsDemo1 from './components/Refsdemo1';
import CustomerInfo from './components/customer-info';
import LifecycleA from './components/Lifecycle';
import ViewContacts from './components/viewContacts';
import ParentComponent from './components/prop'

class App extends Component {
  render() {
    // let numbers=[11,22,33,14];

    // let user ={
    //   name: "supriya rathore",
    //   hobbies: ["sports","swimming","Music","shopping","dancing"],
    // };
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>

      //  <div className="container">
      //  <div className="row">
      //  <div className="col-xs-12">
      //  <Greeting name="supriya"/>
      //  <Greeting name="vipul"/>
      //  <Greeting name="abhi"/>
      //  <Greeting name="yogesh"/>

      //  <GreetingClassComponents name="sup"/>
      //  <NumListClassComp numbers={numbers}/>
      //  <ListDemo name ={user.name} age={30} user={user}/>

      //  <h2></h2>
      // </div>
      // </div>
      // </div>
      // <div>
      // {/* <h1>Hello welcome in my app</h1>*/}
      // <h1>This is another tag</h1> */}
      // {/* <Welcome/> */}
      //  {/* <Funclassdemo/> */}
      //<Greeting/>
      // </div>

            
                  //  <BrowserRouter>

                  //    <div>
                  //      <ul>
                  //        <li>
                  //          <Link to="/">Home</Link>
                  //        </li>
                  //        <li>
                  //          <Link to="/about">About</Link>
                  //        </li>
                  //      </ul>
                  //     <hr />
                  //      <div>
                  //        <Switch>
                  //         <Route exact path="/" component={Home} />
                  //         <Route path="/about" component={About} />
                  //       </Switch>
                  //      </div>
                  //   </div>
                  // </BrowserRouter>
               
      <Router>

        <div>

          <Header/>

          <div className="container">

            <Switch>
              <Route exact path="/"component={Home} />

              <Route exact path="/about" component={About} />

              <Route exact path="/form" component={Form}/>
              <Route exact path="/FormEg" component={FormEg}/>

              <Route exact path="/Form2" component={Form2}/>

               <Route exact path="/RefsDemo1" component={RefsDemo1}/>

                  <Route exact path="/addDelete" component={CustomerInfo}/>

                   <Route exact path="/LifecycleA" component={LifecycleA}/>

                    <Route exact path="/ViewContacts" component={ViewContacts}/>
                    <Route exact path="/ParentComponent" component={ParentComponent}/>

            </Switch>

          </div>

        </div>

      </Router>


    );
  }
}

export default App;
