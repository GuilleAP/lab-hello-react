import React from 'react'


function Head({imagen1, imagen2}) {

    return (
        <div className='fondoBody'>
            <div className='header'>
                <img src={imagen1} alt=""></img>
                <img src={imagen2} alt=""></img>
            </div>

            <div className='title'>
                <h1>Say Hello to ReactJS</h1>
                <p>
                    You will learn how to use <br/>
                    the most popular frontend library, <br/>
                    and become a super Ninja developer
                </p>
                <br />
                <button><h3>Awesome</h3></button>
            </div>
            
                    
        </div>
    );
}

export default Head;