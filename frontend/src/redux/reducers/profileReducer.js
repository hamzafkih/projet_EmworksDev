import { GET_PROFILE, PROFILE_ERROR,ClEAR_PROFILE,UPDATE_PROFILE,GET_PROFILES,GET_REPOS} from "../types/type"

const initialState = {
profile:null,
profiles:[],
repos:[],
loading:true,
error:{}
}

export default function(state = initialState, { type, payload }){
  switch (type) {

  case GET_PROFILE:
  case UPDATE_PROFILE:
    return { ...state, profile:payload ,loading:false }
  case  GET_PROFILES:
    return {...state,profiles:payload,loading:false}  
  case PROFILE_ERROR:
    return {...state,error:payload,loading:false}
  case ClEAR_PROFILE:
    return {...state,profile:null,loading:false} 
  case GET_REPOS:
    return {...state,repos:payload,loading:false}
  default:
    return state
  }
}
