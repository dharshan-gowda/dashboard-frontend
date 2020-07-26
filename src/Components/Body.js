import React, { useEffect } from 'react'
import './style.css'
import Chart from 'chart.js'

function Body(){

    var data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
          label: "Latest sales",
          backgroundColor: "rgb(63, 81, 181)",
          borderColor: "rgb(63, 81, 181)",
          borderWidth: 2,
          data: [15, 30, 20, 5, 40, 55, 25],
          barThickness:3
        }],
      };

      var data1 = {
        labels: ["Desktop", "Tablet", "Mobile"],
        datasets: [{
          label: "Users By Device",
          backgroundColor: ["rgb(255, 166, 0)","rgb(255, 0, 0)","rgb(0, 0, 255)"],
          borderWidth:0,
          
          data: [63,15,23]
        }],
      };
      
      var option = {
        responsive: false,
        scales: {
          yAxes: [{
            stacked: true,
            gridLines: {
              display: false,
              color: "rgba(255,99,132,0.2)",
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        }
      };

      var option1 = {
        responsive: false,
        legend:{
            display:false
        },
        cutoutPercentage:80,
      };

      useEffect(() => {
        Chart.Bar("chart_0", {
            options: option,
            data: data
          });
          Chart.Doughnut("chart_1", {
            options: option1,
            data: data1
          });
      },[data,data1,option,option1])
      
      
    return(<div className="mainbody">
            <div className="topcontent" >
            <div className="cards">
                <div className="container">
                    <div className="row">
                        <div className="topcol col-sm">
                        <div className="topcard card">
                            <div className="topcardbody card-body">
                                <i className="icon fas fa-money-bill-wave"></i>
                                <h6>Budget</h6>
                                <h5>$24000</h5>
                                <p>Since last month</p>
                            </div>
                        </div>
                        </div>
                        <div className="topcol col-sm">
                        <div className="topcard card">
                            <div className="topcardbody card-body">
                                <i className="icon fas fa-users"></i>
                                <h6>Total Users</h6>
                                <h5>1600</h5>
                                <p>Since last month</p>
                            </div>
                        </div>
                        </div>
                        <div className="topcol col-sm">
                        <div className="topcard card">
                            <div className="topcardbody card-body">
                                <i className="icon fas fa-tasks"></i>
                                <h6>Task Progress</h6>
                                <h5>25%</h5>
                                <div className="progress">
                                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="topcol col-sm">
                        <div className="last-card">
                            <div className="topcardbody card-body">
                                <i className="icon fas fa-dollar-sign"></i>
                                <h6>Total Profit</h6>
                                <h5>$23200</h5>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    
            <div className="bodycontainer">
                <div className="barchart col-sm">
                        <div className="barchartbody card">
                            <canvas className="bar" id="chart_0"/>
                        </div>
                </div>
                <div className="piechart col-sm">
                        <div className="piechartbody card">
                            <p className="piecharttitle">Users By Device</p>
                                <canvas className="pie" id="chart_1"/>
                                <div className="users">
                                    <span className="desktop">
                                        <i className="fas fa-desktop"><p>Desktop</p><h6>63%</h6></i>
                                    </span>
                                    <span className="tablet">
                                        <i className="tablet fas fa-tablet"><p>Tablet</p><h6>15%</h6></i>
                                    </span>
                                    <span className="mobile">
                                        <i className="mobile fas fa-mobile-alt"> <p>Mobile</p><h6>23%</h6></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                </div>

                <div className="footer">
                    <div className="footlist col-sm">
                        <div className="card">
                            <ul className="list-group">
                            <li className="list-group-item"><h5>Products</h5></li>
                            <li className="list-group-item">Dropbox</li>
                            <li className="list-group-item">Medium Corporation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="foottable col-sm">
                        <div className="card">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>    
        </div>)
}

export default Body