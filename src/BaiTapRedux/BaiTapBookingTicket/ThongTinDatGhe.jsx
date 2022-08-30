import React, { Component } from "react";

export default class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>
          <span className="text-light ms-2" style={{ fontSize: 30 }}>
            Ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon"></button>
          <span className="text-light ms-2" style={{ fontSize: 30 }}>
            Ghế chưa chọn
          </span>
          <br />
          <button className="ghe"></button>
          <span className="text-light ms-2" style={{ fontSize: 30 }}>
            Ghế đã đặt
          </span>
        </div>
        <div>
          <table className="table text-light" border={2}>
            <thead>
              <tr style={{ fontSize: 25 }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </tbody>
            <footer>
              <tr></tr>
            </footer>
          </table>
        </div>
      </div>
    );
  }
}
