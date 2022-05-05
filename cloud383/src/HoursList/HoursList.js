import React from 'react';
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Hours from "../Hours/Hours.js";

function HoursList({dataWeather}) {
  
  console.log(dataWeather);
  
  return (
    <div>
      <Slide
        slidesToShow={3}
        slidesToScroll={1}
        defaultIndex={0}
        autoplay={false}
        canSwipe={true}
        // cssClass={css.slideContainer}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 10,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 8,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
            },
          },
        ]}
      >
        { dataWeather?  
          dataWeather.hourly.map((hour, index) => {
          return (
            <Hours 
              hourData={hour}
              key={index}     
            />
          );
        })
        :
        "no data"
        }
      </Slide>
    </div>
  );
}

export default HoursList