import React, { useEffect } from 'react'
import  axios from '../axios'

interface Rowprops {
    title?: string;
    fetchUrl: any;
}

const Row: React.FC<Rowprops> = ({title, fetchUrl}) => {
    const [movies, setMovies] = React.useState([])

    // a snippet of code that runs based on a specific condition/variable
   useEffect(() => {
    
    }, []);
        
  return (
    <div>
      <p>{title}</p>
      <p>{fetchUrl}</p>
    </div>
  )
}
 
export default Row
