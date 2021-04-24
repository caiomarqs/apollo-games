import React from 'react'

interface ImgProfilePorps{
    img: string;
}

const ImgProfile = (props:ImgProfilePorps) =>{
    return(
        <div
        className="img-container"
        style={{ backgroundImage: `/uploads/${props.img}` }}
      />
    )
}

export default ImgProfile;