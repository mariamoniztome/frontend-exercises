/**
 * A React component that displays a heads-up notification with a title, text, and a close button.
 * @returns The HeadsUpNotification component.
 */
import React, { useState } from 'react';
import './headsupnotification.scss';
import icon from "../../assets/img/icon.svg";

const HeadsUpNotification = () => {
  // State to control the visibility of the notification content
  const [isContentVisible, setIsContentVisible] = useState(true);

  // Function to handle the click event on the close button
  const handleTitleCloseClick = () => {
    console.log('Closing notification');
    setIsContentVisible(false);
  };

  return (
    <div className={`heads-up ${isContentVisible ? '' : 'content-hidden'}`}>
      <div className="heads-up__content">
        <div className="heads-up__content__title">
          <div className="heads-up__content__title__close" onClick={handleTitleCloseClick}>x</div>
          20€ Grátis em Casino 
        </div>
        <div className="heads-up__content__text">
          O <b>Solverde</b> oferece-te 20€ gratuitos para jogares casino online!
          <a href="#" className="btn btn-primary heads-up__content__button" target="_blank">
            Recebe
          </a>
        </div>
      </div>
      <div className="heads-up__logo">
        <img src={icon} className="heads-up__logo__image" alt="Logo" loading="lazy"/>
      </div>
    </div>
  );
};

export default HeadsUpNotification;
