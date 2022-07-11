import React from 'react'


const Body = ({icon1, icon2, icon3, icon4}) => {

    return (
        <div className='body'>
            <div className='icons'>
                <img src={icon1} alt=""></img>
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs</p>
            </div>

            <div className='icons'>
                <img src={icon2} alt=""></img>
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state</p>
            </div>
                
            <div className='icons'>
                <img src={icon3} alt=""></img>
                <h2>Single-Way</h2>
                <p>A set of immutable values are passed to the component's</p>
            </div>

            <div className='icons'>
                <img src={icon4} alt=""></img>
                <h2>JSX</h2>
                <p>Statically-typed, designed to run on modern browsers</p>
            </div>
        </div>
    );
}

export default Body;