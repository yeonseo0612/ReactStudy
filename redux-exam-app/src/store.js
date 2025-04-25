import {createStore} from 'redux'
import { todoReducer } from './TodoReducer'

export const store = createStore(todoReducer);

