import {createStore,applyMiddleware,compose} from 'redux';
import {getJson} from './api.js';
import thunk from 'redux-thunk';

const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST'
const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'
const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE'

const initialState = {
    loading: false,
    todos:[],
    error:''
}

const fetchTodosRequest = () => {
  return {
    type: FETCH_TODOS_REQUEST
  }
}

const fetchTodosSuccess = todos => {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: todos
  }
}

const fetchTodosFailure = error => {
  return {
    type: FETCH_TODOS_FAILURE,
    payload: error
  }
}

export const getTodosRedux = (dispatch) =>{
 //Q1
    dispatch(fetchTodosRequest())
    getJson()
      .then(response => {
        // response.data is the todos
        const todo = response.data
        console.log("success" + response.data)
        dispatch(fetchTodosSuccess(todo))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchTodosFailure(error.message))
      })
}

const todos = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
  
    case FETCH_TODOS_REQUEST:
      return {
        ...state,    // Q2  //
       // loading: false,
       // todos:[],
        //error:'',
        loading: true
      }
    case FETCH_TODOS_SUCCESS:
      return {
        loading: false,
        todos: action.payload,
        error: ''
      }
    case FETCH_TODOS_FAILURE:
      return {
        loading: false,
        todos: [],
        error: action.payload
      }
      default:    //Q3
          return state
  }
}

let composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(todos, composeEnchancer(applyMiddleware(thunk)))

