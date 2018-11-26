import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import appointments from './appointments'
import clients from './clients'
import stylists from './stylists'


const rootReducer = combineReducers({appointments, clients, stylists, routing: routerReducer})

export default rootReducer
