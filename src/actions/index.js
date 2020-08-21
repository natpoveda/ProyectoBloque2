import * as actionsType from "./actionsType";
import { act } from "react-dom/test-utils";

const formatDate = () => {
  var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

export const loadingError = (bool) => (
    {
      type: actionsType.LOADING_ERROR,
      payload:{hasErrored: bool}
    }
  )
  
  export const loadingInProgress = (bool) => (
    {
      type: actionsType.LOADING_IN_PROGRESS,
      payload:{isLoading: bool}
    }
  )
     
  export const loadingSuccessHome = (items) => {
    return (
        {
          type: actionsType.LOADING_SUCCESS_HOME,
          payload : {items}
        }
      )
  }

  export const loadingID = id =>{
     return ({
         type: actionsType.LOADING_ID,
         payload: {id}
     })
  }

  export const clearAll = () => (
    {
      type: 'CLEAR_ALL'
    }
  )


  export const getHome = () => {
    
    const dateStart = formatDate();
        
    return dispatch => {
      dispatch(clearAll())
  
      dispatch(loadingError(false))
  
      dispatch(loadingInProgress(true))
     
      fetch(`https://api.canillitapp.com/latest/${dateStart}`)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText)
          }
  
          dispatch(loadingInProgress(false))
  
          return response
        })
        .then((response) => response.json())
        .then((items) => dispatch(loadingSuccessHome(items.slice(0,10))))
        .catch(() => dispatch(loadingError(true)))
    }
  }


  export const getSeccion = (idSecc) => {
    console.log("getSeccion",idSecc); 
    
    return dispatch => {
      dispatch(clearAll())
  
      dispatch(loadingError(false))
  
      dispatch(loadingInProgress(true))

      dispatch(loadingID(idSecc))
  
      fetch(`https://api.canillitapp.com/news/category/${idSecc}`)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText)
          }
  
          dispatch(loadingInProgress(false))
  
          return response
        })
        .then((response) => response.json())
        .then((items) => dispatch(loadingSuccessHome(items.slice(0,10))))
        .catch(() => dispatch(loadingError(true)))
    }
  }

  export const getSearch = (input) => {
    console.log("getSearch", input); 
    
    return dispatch => {
      dispatch(clearAll())
  
      dispatch(loadingError(false))
  
      dispatch(loadingInProgress(true))
  
      fetch(`https://api.canillitapp.com/search/${input}`)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText)
          }
  
          dispatch(loadingInProgress(false))
  
          return response
        })
        .then((response) => response.json())
        .then((items) => dispatch(loadingSuccessHome(items.slice(0,10))))
        .catch(() => dispatch(loadingError(true)))
    }
  }

