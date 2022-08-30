import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
export default class BaiTapBookingTicket extends Component {
  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            position: "fixed",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div
                  className="text-warning display-4"
                  style={{ textTransform: "uppercase" }}
                >
                  Đặt vé xem phim cybetlearn.vh
                </div>
                <div className="mt-3 text-light" style={{ fontSize: 25 }}>
                  Màn hình
                </div>
                <div
                  className="mt-1"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                </div>
              </div>
              <div className="col-4">
                <div
                  className="text-light text-center"
                  style={{ textTransform: "uppercase", fontSize: 35 }}
                >
                  danh sách ghế bạn chọn
                </div>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
