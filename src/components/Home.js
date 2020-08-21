import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import Articulo from "./Articulo";



const Home = ({nodos,hasError,isLoading,onGet,match,oProps}) => {
      
    console.log("match--ll",match);
    console.log("id--Z", oProps);
    let id = '';
    if (match.path != "/"){
       id = oProps.idSec.id; 
    }
    console.log("id--YY", id);
    useEffect(() => {
      // Actualiza el título del documento usando la API del navegador
      onGet(id)
    },[id]);
   
    if (hasError) {
      return (
        <div className="container">
          <h6>Disculpa hubo un error con los artículos.</h6>
        </div>
      )
    }
  
    if (isLoading) {
      return (
        <div className="container">
          <h6>Loading…</h6>
        </div>
      )
    }
     
    return (
      <div className="container">
        
        <div className="row">
          {
            nodos.map((node, index) => {
             
              return (
                <Articulo 
                key={node.news_id}
                url={node.url}
                title={node.title} 
                img_url={node.img_url}
                source={node.source_name}
                />)
              })
          } 
        </div>
      </div>
     );  

    
  };

  
  Home.propTypes = {
    onGet: PropTypes.func
  };

  export default Home;