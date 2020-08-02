import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Lesson from './components/Lesson/Lesson'
import App from './App'
import User from './components/User/User'
import LessonOV from './components/LessonOV/LessonOV'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'

export default (
  <Switch>
    <Route exact path="/" component={App}></Route>
    <Route path="/Lesson" component={Lesson}></Route>
    <Route path="/User" component={User}></Route>
    <Route path="/Login" component={Login}></Route>
    <Route path="/LessonOV" component={LessonOV}></Route>
    <Route path="/Register" component={Register}></Route>
  </Switch>
)
