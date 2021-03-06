import { combineReducers, Reducer } from 'redux'

import authReducer from './auth';
import { RootState } from 'src/types'

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  authState: authReducer,
})

export default rootReducer