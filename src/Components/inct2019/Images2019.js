import React, { useState } from 'react';
import './Images2019.css';
import image1 from '../../images/inctf2019/g1.jpg';
import image2 from '../../images/inctf2019/g2.jpg';
import image3 from '../../images/inctf2019/g3.jpg';
import image4 from '../../images/inctf2019/g4.jpg';
import image5 from '../../images/inctf2019/g5.jpg';
import image6 from '../../images/inctf2019/g6.jpg';

//IMAGES
//you can also import a local file, the syntax would look like:
//import image1 from './images/imagename.jpg'



//IMAGE ARRAY
const images = [image1, image2, image3, image4, image5, image6];


//MAIN APP COMPONENT
function Images2019() {
    return (
        <div className="App">
            <h3 className="title" style={{color: 'chocolate'}}>
                        Some last year images
                    </h3>
            <ImageGallery />
            <br/><br/><br/>
        </div>
    );
}

export default Images2019


//MAIN LIGHTBOX
//Holds Images Cards and Lightbox
//this is where all of our logic will live
function ImageGallery() {
    const [imageToShow, setImageToShow] = useState("");
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);
    
    //looping through our images array to create img elements
    const imageCards = images.map((image) => (
      <img className="image-card" onClick={() => showImage(image)} src={image} alt=""/>
    ));
  
    //function to show a specific image in the lightbox, amd make lightbox visible
    const showImage = (image) => {
      setImageToShow(image);
      setLightBoxDisplay(true);
    };
  
    //hide lightbox
    const hideLightBox = () => {
      setLightBoxDisplay(false);
    };
  
    //show next image in lightbox
    const showNext = (e) => {
      e.stopPropagation();
      let currentIndex = images.indexOf(imageToShow);
      if (currentIndex >= images.length - 1) {
        setLightBoxDisplay(false);
      } else {
        let nextImage = images[currentIndex + 1];
        setImageToShow(nextImage);
      }
    };
  
    //show previous image in lightbox
    const showPrev = (e) => {
      e.stopPropagation();
      let currentIndex = images.indexOf(imageToShow);
      if (currentIndex <= 0) {
        setLightBoxDisplay(false);
      } else {
        let nextImage = images[currentIndex - 1];
        setImageToShow(nextImage);
      }
    };
    
  
    return (
      <>
        <div>{imageCards}</div>
        
        {
          lightboxDisplay ? 
          <div id="lightbox" onClick={hideLightBox}>
            <button onClick={showPrev}>⭠</button>
            <img id="lightbox-img" src={imageToShow} alt=""></img>
            <button onClick={showNext}>⭢</button>
          </div>
         : ""
        }
      </>
    );
  }