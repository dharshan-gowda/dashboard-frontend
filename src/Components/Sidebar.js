import React from 'react'
import './style.css'
import img from '../avatar.png'

function Sidebar(){
    return(
        <div className="sidebar">
            <div className="profile">
                <img src={img} alt="Avatar" className="avatar"></img>
                <p>Shen Zhi</p>
            </div>
            <div className="col-3">
                <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><i className="fas fa-th-large"></i>Dashboard</a>
                <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i className="icon fas fa-users"></i>Users</a>
                <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i className="fas fa-luggage-cart"></i>Products</a>
                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"><i className="fas fa-lock"></i>Authentication</a>
                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"><i className="fas fa-font"></i>Typography</a>
                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"><i className="far fa-image"></i>Icons</a>
                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"><i className="fas fa-user-circle"></i>Account</a>
                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"><i className="fas fa-cog"></i>Settings</a>
            </div>
            <div className="upgrade">
                <h6>Upgrade to Pro</h6>
                <button type="button" className="upgradebtn btn btn-sm">UPGRADE</button>
            </div>
        </div>
    )
}

export default Sidebar
