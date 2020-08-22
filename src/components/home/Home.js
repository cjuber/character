import React, { Component } from 'react';


export default class Home extends Component {
    render() {
        return (
            
            <div className='home'>
               
                <div className='container'>
                    <div className='search'>
                        <input placeholder='Search'></input>
                    </div>
                    <div className='cards'>
                        <div className='card'>
                            <div className='title'>
                                <div className='titleName'>
                                    <h2>Sibacus</h2>
                                </div>
                                <div className='race'>
                                    <h2>Simic Hybrid</h2>
                                </div>                  
                            </div>
                            <div className='bg'></div>
                            <div className='info'>
                                <div className='class-level'>
                                        <h2>Blood Hunter</h2>
                                        <h3>Level 20</h3>
                                </div>
                            </div>
                        </div>
                        <div className='card'></div>
                        <div className='card'></div>
                        <div className='card'></div>
                        <div className='card'></div>
                        
                        
                    </div>

                </div>
                
            </div>
        )
    }
}
