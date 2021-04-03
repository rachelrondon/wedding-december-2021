import React from 'react';
import horizontalOne from './horizontalOne.JPG';
import horizontalTwo from './horizontalTwo.JPG';
import horizontalThree from './horizontalThree.JPG';
import horizontalSix from './horizontalSix.jpg';
import verticalOne from './verticalOne.jpg';
import verticalTwo from './verticalTwo.jpg';
import horizontalSeven from './horizontalSeven.jpg';
import horizontalEight from './horizontalEight.jpg';
import horizontalNine from './horizontalNine.jpg';
import horizontalTen from './horizontalTen.jpg';
import horizontalEleven from './horizontalEleven.jpg';

const Photos = () =>  {
  return (
    <div className="photos-page">
        <div className="photos-row">
          <div className="horizontal-photo">
            <img className="photo" src={horizontalSix} alt="catharine-sean"></img>
          </div>
        </div>

        <div className="photos-row">
          <div className="horizontal-photo">
            <img className="photo" src={horizontalSeven} alt="catharine-sean"></img>
          </div>
        </div>


        <div className="photos-row">
          <div className="horizontal-photo">
            <img className="photo" src={horizontalEight} alt="catharine-sean"></img>
          </div>
        </div>

        <div className="photos-row">
          <div className="horizontal-photo">
            <img className="photo" src={horizontalNine} alt="catharine-sean"></img>
          </div>
        </div>

        <div className="photos-row">
          <div className="horizontal-photo">
            <img className="photo" src={horizontalTen} alt="catharine-sean"></img>
          </div>
        </div>

        <div className="photos-row">
          <div className="horizontal-photo">
            <img className="photo" src={horizontalEleven} alt="catharine-sean"></img>
          </div>
        </div>

        <div className="photos-row">
          <div className="photo-vertical">
              <img className="photo" src={verticalOne} alt="catharine-sean"></img>
          </div>
          <div className="photo-vertical">
              <img className="photo" src={verticalTwo} alt="catharine-sean" ></img>
          </div>
        </div>

        <div className="photos-row">
          <div className="horizontal-photo">
              <img className="photo" src={horizontalOne} alt="catharine-sean"></img>
          </div>
        </div>

        <div className="photos-row">
          <div className="horizontal-photo add-margin">
              <img className="photo" src={horizontalTwo} alt="catharine-sean"></img>
          </div>
        </div>

        <div className="photos-row">
          <div className="horizontal-photo">
            <img className="photo" src={horizontalThree} alt="catharine-sean"></img>
          </div>
        </div>
    </div>
  )
}

export default Photos;
