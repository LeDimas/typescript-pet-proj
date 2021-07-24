import Card, { CardVariant } from "./components/Card";
import React , {FC, useState , useEffect} from 'react';
import {BrowserRouter , NavLink, Route} from 'react-router-dom'
import { ITodo, IUser } from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventExample from "./components/EventsExample";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import SingleUserPage from "./components/SingleUserPage";
import SingleTodoPage from "./components/SingleTodoPage";




export interface AppProps {
  
}



const App: FC<AppProps> = () => (

  <BrowserRouter>
    <div>
      <div>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/todos'>Todos</NavLink>
      </div>
      <Route path={'/users'} exact>
        <UserPage />
      </Route>

      <Route path={'/todos'} exact>
        <TodosPage />
      </Route>

      <Route path={'/user/:id'} exact>
        <SingleUserPage />
      </Route>

      <Route path={'/todo/:id'} exact>
        <SingleTodoPage />
      </Route>

    </div>
  </BrowserRouter>
)
 
export default App;