import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";

const EventCard = () => {
  const values = useSelector((state) => state.newEvent);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid #F3F3F3",
        boxShadow: "0px 4px 15px rgba(179, 179, 179, 0.1)",
        borderRadius: "25px",
        marginTop: "40px",
      }}
    >
      {values.photo !== "null" ? (
        <div style={{ display: "flex", width: "100%" }}>
          <img
            style={{
              width: "40%",
              border: "8px solid #58D473",
              borderRadius: "25px",
              maxHeight: "250px",
            }}
            src={values.photo}
            alt="bbq"
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              marginLeft: "30px",
              textAlign: "left",
              width: "50%",
              fontSize: "1.6rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: "500",
                color: "#1A0F2C",
              }}
            >
              {values.title}
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p style={{ color: "rgba(0, 0, 0, 0.35)" }}>
                {moment(parseInt(values.startTime)).format("MMM Do, YYYY")}
                .&nbsp;
              </p>
              <div style={{ display: "flex", marginTop: "5%" }}>
                <p
                  style={{
                    color: "#82DF96",
                    fontWeight: "500",
                  }}
                >
                  {moment(parseInt(values.startTime)).format("h:mmA")}&nbsp;
                </p>
                {values.endTime && (
                  <>
                    <p style={{ color: "rgba(0, 0, 0, 0.5)" }}>to&nbsp;</p>
                    <p
                      style={{
                        color: "#ea6565",
                        fontWeight: "500",
                      }}
                    >
                      {moment(parseInt(values.endTime)).format("h:mmA")}
                    </p>
                  </>
                )}
              </div>
            </div>
            <p style={{ color: "rgba(0, 0, 0, 0.5)" }}>{values.address}</p>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "spaceEvenly",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              marginLeft: "30px",
              textAlign: "left",
              width: "50%",
              fontSize: "1.6rem",
              height: "200px",
            }}
          >
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: "500",
                color: "#1A0F2C",
                marginBottom: "5px",
              }}
            >
              {values.title}
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p style={{ color: "rgba(0, 0, 0, 0.35)" }}>
                {moment(parseInt(values.startTime)).format("MMM Do, YYYY")}
                .&nbsp;
              </p>
              <div style={{ display: "flex", marginTop: "25px" }}>
                <p
                  style={{
                    color: "#82DF96",
                    fontWeight: "500",
                  }}
                >
                  {moment(parseInt(values.startTime)).format("h:mmA")}&nbsp;
                </p>
                {values.endTime && (
                  <>
                    <p style={{ color: "rgba(0, 0, 0, 0.5)" }}>to&nbsp;</p>
                    <p
                      style={{
                        color: "#ea6565",
                        fontWeight: "500",
                      }}
                    >
                      {moment(parseInt(values.endTime)).format("h:mmA")}
                    </p>
                  </>
                )}
              </div>
            </div>
            <p style={{ color: "rgba(0, 0, 0, 0.5)" }}>{values.address}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCard;
