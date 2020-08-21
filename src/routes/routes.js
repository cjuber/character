import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from '../components/auth/Auth'
import Account from '../components/account/Account'
import Character from '../components/character/Character'
import Custom from '../components/custom/Custom'
import Home from '../components/home/Home'
import Upload from '../components/upload/Upload'


export default (
   
            <Switch>

                <Route exact path='/' component={Auth}></Route>
                <Route path='/account' component={Account}></Route>
                <Route path='/character' component={Character}></Route>
                <Route path='/custom' component={Custom}></Route>
                <Route path='/home' component={Home}></Route>
                <Route path='/upload' component={Upload}></Route>
                
            </Switch>
      
)
