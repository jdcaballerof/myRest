import React, { useEffect } from 'react'

export const Img = ( {src, id} ) => {

    useEffect(() => {
      console.log('cargo imagen', id);
    }, [])
    
  return (
    <img src={src} width="800" height="682" />
  )
}
