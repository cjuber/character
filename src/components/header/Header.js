import React, { Component } from 'react'
import caretImg from '../../assets/caret.png'
export default class Header extends Component {
    render() {
       
        return (
            <div>
                <header>
                    <div className='title'>
                    <h1>Character</h1>
                    <h3>Sheet</h3>
                    </div>
                    <div className='account'>
                    <button>face</button>
                    <img src={require('../../assets/caret.png')} className='caret' alt='caret'/> 
                    </div>
                </header>
            </div>
        )
    }
}
