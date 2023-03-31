import React from 'react';

const Writings = () => {
    return (
        <div className='my-5 mt-5 mb-5'>
            <div className='card border solid border-danger p-3 my-3  '>
                <h1 className='fw-bold'>Props vs State</h1>
                <hr />
                <p className='fs-3' >Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable. The state is Mutable and It is local to the component only.</p>
            </div>
            <div className='card border solid border-danger p-3 my-3  '>
                <h1 className='fw-bold'>How does useState work?</h1>
                <hr />
                <p className='fs-3' >useState is a hook in React that allows functional components to manage state. When you call useState, it returns an array with two values: the current state value and a function that allows you to update that value.</p>
            </div>
            <div className='card border solid border-danger p-3 my-3  '>
                <h1 className='fw-bold'>Purpose of useEffect other than fetching data</h1>
                <hr />
                <p className='fs-3' >The useEffect in react js allows you to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional.The useEffect hook will make a network request on component render. When that fetch resolves, it will set the response from the server to the local state using the setState function. This, in turn, will cause the component to render so as to update the DOM with the data.</p>
            </div>
            <div className='card border solid border-danger p-3 my-3 '>
                <h1 className='fw-bold'>How does React work?</h1>
                <hr />
                <p className='fs-3' >React is a JavaScript library for building user interfaces. It works by allowing developers to break down their application into small, reusable components. These components can be easily composed to create complex user interfaces.

                    React uses a Virtual DOM (Document Object Model) to keep track of changes to the user interface. When a component's state changes, React updates the Virtual DOM, and then compares it to the previous version of the Virtual DOM. React then calculates the most efficient way to update the actual DOM, and only updates the parts of the DOM that have changed.</p>
            </div>
        </div>
    );
};

export default Writings;