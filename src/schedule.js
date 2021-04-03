import React from 'react';

const Schedule = () =>  {
  return (
      <div className="schedule">
        <div className="column">
          <div className="left-column">
            <div className="details">
              <h2 className="details-title">Wedding</h2>
              <h3 className="detail">Friday, December 10, 2021</h3>
              <h3 className="details-title-location">Rosecliff Mansion</h3>
              <h3 className="detail">548 Bellevue Avenue, Newport, RI 02840</h3>
              <h3 className="detail">5:30pm - 11:00pm</h3>
              <h3 className="detail">Please arrive at 5:30pm to enjoy mingling and refreshments. The ceremony will begin promptly at 6pm.</h3>
              <h3 className="detail">Black Tie Optional</h3>
            </div>
            <div className="details">
              <h2 className="details-title">Ceremony</h2>
              <h3 className="detail">6:00pm - 6:30pm</h3>
            </div>
            <div className="details">
              <h2 className="details-title">Cocktail Hour</h2>
              <h3 className="detail">6:30pm - 7:30pm</h3>
            </div>
            <div className="details">
              <h2 className="details-title">Reception</h2>
              <h3 className="detail">7:30pm - 11:00pm</h3>
            </div>
            </div>
          </div>
        </div>
    )
  }

export default Schedule;
