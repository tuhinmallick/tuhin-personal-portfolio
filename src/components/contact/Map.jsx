import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className="embed-responsive-item"
            title="location title"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2592.6848066776765!2d8.437041316027102!3d49.4715699793523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797cc7167071787%3A0xb57c65881a3ddd94!2sSaarlandstra%C3%9Fe%20116%2C%2067061%20Ludwigshafen%20am%20Rhein!5e0!3m2!1sen!2sde!4v1645219073666!5m2!1sen!2sde"
          ></iframe>
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
