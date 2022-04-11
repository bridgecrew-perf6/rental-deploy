import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "../../components";
import { filterVehicle } from "../../utils/https/vehicle";

const Allproduct = () => {
  const location = useLocation();
  const { vState } = location.state;
  // console.log(vState);

  const [vehicle, setvehicle] = useState([]);

  useEffect(() => {
    let type = vState;
    let limit = "";
    let search = "";
    let location = "";
    const fetchData = () => {
      filterVehicle(limit, type, search, location)
        .then((response) => {
          setvehicle(response.data.result.data);
          // console.log("View All Vehhicle : ", response.data.result);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);
  return (
    <>
      <div>
        <h1>All {vState}</h1>
        {/* <h2>{vState}</h2> */}
        <div className="container-fluid view-popular-home">
          <div className="row">
            {vehicle.length > 0 &&
              vehicle.map((vehicle, idx) => (
                <Card
                  location={vehicle.location}
                  key={idx}
                  city={vehicle.city}
                  name={vehicle.name}
                  id={vehicle.id}
                  images={vehicle.images}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Allproduct;
