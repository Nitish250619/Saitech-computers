import React from 'react'
import Gallery from '../Gallery/Gallery'
import "./MainGallery.css"


const MainGallery = () => {
  return (
    <div className='container-gallery'>
        <h4>Gallery</h4>
        <div>
            <Gallery/>
        </div>
    </div>
  )
}

export default MainGallery