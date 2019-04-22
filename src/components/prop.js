import React from 'react';

import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
class ParentComponent extends React.Component {

	render() {

console.log(this.props);
return (
<div>
{/* printing all props */}
<h1>
{this.props.arrayProp}
<br/>

{this.props.stringProp}
<br/>

{this.props.numberProp}
<br />

{this.props.boolProp}
<br />

<h1>{this.props.firstName}
{this.props.lastName}</h1>

<p>Age: {this.props.age +10}</p>
</h1>
</div>
);

}

}

// validating prop types 
ParentComponent.propTypes = {
arrayProp: PropTypes.array,

stringProp: PropTypes.string,

numberProp: PropTypes.number,

boolProp: PropTypes.bool,

firstName: PropTypes.string,

lastName: PropTypes.string,

age: PropTypes.number,

age: PropTypes.number.isRequired

}

// creating default props 
ParentComponent.defaultProps = {
arrayProp: ['anu','parth', 'rashmi'],

stringProp: "hello",
numberProp: "10",
boolProp: true,
}

export default ParentComponent;
