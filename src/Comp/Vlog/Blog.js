import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-2xl'>What are the different ways to manage a state in a React application?</h1>
            <p>We have to set initial state value inside constructor function and set click event handler of the element upon which click, results in changing state. Then pass the function to the click handler and change the state of the component inside the function using setState.</p>
            <h1 className='text-2xl'> How does prototypical inheritance work?</h1>
            <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
            <h1 className='text-2xl'>What is a unit test? Why should we write unit tests?</h1>
            <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.
            </p>

            <h1 className='text-3xl'> React vs. Angular vs. Vue?</h1>
            <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>

        </div>
    );
};

export default Blog;