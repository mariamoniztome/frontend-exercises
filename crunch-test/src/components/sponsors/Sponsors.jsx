/**
 * Renders a component that displays a list of official sponsors.
 * @returns The rendered component.
 */
import React from 'react';
import './sponsors.scss';
import images from '../../assets/img';

const Sponsors = () => {
  return (
    <div className="sponsors-wrapper container">
      <h2>Patrocinador Oficial</h2>
      <div className="row row-sponsors">
        <div className="col-12">
          <div className="flex-list">
            <ul className="footer-sponsors__list">
              <li className="footer-sponsors__list--icon">
                <img alt="Patrocinador Oficial" src={images.imgSrc10} loading="lazy" width={100} height={200}/>
              </li>
              <li className="footer-sponsors__list--icon">
                <img alt="Patrocinador Oficial" src={images.imgSrc11} loading="lazy" width={100} height={200}/>
              </li>
              <li className="footer-sponsors__list--icon">
                <img alt="Patrocinador Oficial" src={images.imgSrc12} loading="lazy" width={100} height={200}/>
              </li>
              <li className="footer-sponsors__list--icon">
                <img alt="Patrocinador Oficial" src={images.imgSrc13} loading="lazy" width={100} height={200}/>
              </li>
              <li className="footer-sponsors__list--icon">
                <img alt="Patrocinador Oficial" src={images.imgSrc14} loading="lazy" width={100} height={200}/>
              </li>
              <li className="footer-sponsors__list--icon">
                <img alt="Patrocinador Oficial" src={images.imgSrc15} loading="lazy" width={100} height={200}/>
              </li>
              <li className="footer-sponsors__list--icon">
                <img alt="Patrocinador Oficial" src={images.imgSrc16} loading="lazy" width={100} height={200}/>
              </li>
              <li className="footer-sponsors__list--icon">
                <img alt="Patrocinador Oficial" src={images.imgSrc17} loading="lazy" width={100} height={200}/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
