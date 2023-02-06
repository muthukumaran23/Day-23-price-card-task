
//import React from "react";
import "font-awesome/css/font-awesome.css"


function PriceCard(props) {
  return (

  <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.result.plan}</h5>
            <h6 className="card-price text-center">${props.result.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={props.result.userEnable ? "":"text-muted"}><span className="fa-li"><i className={props.result.userEnable ?"fas fa-check":"fas fa-times"}></i></span>{props.result.plan ==="Free"? <>{props.result.user}</>:<b>{props.result.user}</b>}</li>
              <li className={props.result.storageEnable ? "":"text-muted"}><span className="fa-li"><i className={props.result.storageEnable ?"fas fa-check":"fas fa-times"}></i></span>{props.result.storage}</li>
              <li className={props.result.publicEnable ? "":"text-muted"}><span className="fa-li"><i className={props.result.publicEnable ?"fas fa-check":"fas fa-times"}></i></span>{props.result.publicProject}</li>
              <li className={props.result.accessEnable ? "":"text-muted"}><span className="fa-li"><i className={props.result.accessEnable ? "fas fa-check":"fas fa-times"}></i></span>{props.result.access}</li>
              <li className={props.result.privateEnable ? "":"text-muted"}><span className="fa-li"><i className={props.result.privateEnable ?"fas fa-check":"fas fa-times"}></i></span>{props.result.privateProject}
                </li>
              <li className={props.result.supportEnable ? "":"text-muted"}><span className="fa-li"><i className={props.result.supportEnable ?"fas fa-check":"fas fa-times"}></i></span>{props.result.support}
                </li>
              <li className={props.result.domainEnable ? "":"text-muted"}><span className="fa-li"><i className={props.result.domainEnable ? "fas fa-check":"fas fa-times"} ></i></span> {props.result.plan==="Pro"?<><b>Unlimited</b>&nbsp;{props.result.subdomain}</>:<>{props.result.subdomain}</>}
              </li>
              <li className={props.result.statusEnable ? "":"text-muted"}><span className="fa-li"><i className={props.result.statusEnable ? "fas fa-check":"fas fa-times"}></i></span>{props.result.status}
            </li>
            </ul>
            <div className="d-grid">
              <a href="javascript(void)" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
     </div> 
      
    

 
    
  )     
}

export default PriceCard;