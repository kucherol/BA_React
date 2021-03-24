import React from 'react';
import ReactDom from 'react-dom';
import Navigation from './Navigation';
import Greetings from './Greetings';
import Numbers from './Numbers';
import Users from './Users';




const component = (
  <>
    <Navigation list={['Home', 'Products', 'Contacts']} />
    <Greetings text="Vasya"/>
    <Numbers from={5} to={12} oddEven="odd"/>
    <Users />
 
  </>
)

ReactDom.render(component, document.getElementById('app'))