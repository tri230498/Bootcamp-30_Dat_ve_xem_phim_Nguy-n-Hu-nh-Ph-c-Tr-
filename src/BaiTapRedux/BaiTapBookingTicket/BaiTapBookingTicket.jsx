import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
export default class BaiTapBookingTicket extends Component {
  render() {
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')",
          backgroundSize : "cover",
          backgroundPosition: "center"
        }}
      >
        <div style={{backgroundColor: "rgba(0,0,0,0.6)", position:"fixed", width: "100%", height: "100%"}}>

        </div>
      </div>
    );
  }
}
