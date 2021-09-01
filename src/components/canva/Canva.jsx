import React, { useState } from 'react';
import './canva.css'

const Canva = ({image, caption}) => {
  const [canva, setCanva] = useState('')
  function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }
  
  toDataURL(image, function(dataUrl) {
    setCanva(dataUrl)
  })
  return (
    <figure className="figure">
      <img src={canva} alt="" width="640px" />
      <figcaption className="caption">{caption}</figcaption>
    </figure>
  )
}

export default Canva
