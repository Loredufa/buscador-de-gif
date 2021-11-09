
import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid'
 
export const GifExpertApp = () => {

   // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball']
   
   const [categorias, setCategorias] = useState(['One Punch'])

   return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias= { setCategorias } /> 
            <hr/>
            
            <ol>
                {
                categorias.map( category => (
                    <GifGrid 
                    key={category}
                    category={category}/>
                ))
                }
            </ol>
        </div>
          )
    }