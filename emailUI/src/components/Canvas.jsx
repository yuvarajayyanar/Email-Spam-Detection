import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faReply,
  faStar as faStarSolid,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
export default function Canvas(props) {
  return (
    <div className="canvas">
      <div className="canvas-header">
        {props.active === 1 && (
          <div className="canvas-user-info">
            <div className="name-tag">
              <div className="sender-logo">KJ</div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                  Kenda Jenner
                </div>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "0.8rem",
                    color: "rgb(87, 87, 87)",
                  }}
                >
                  kendajenner@mail.com
                </div>
              </div>
            </div>
            <div className="canvas-options">
              <div style={{ fontWeight: "bold", fontSize: "0.7rem" }}>
                18:30 PDT
              </div>
              <div>
                <FontAwesomeIcon icon={faReply} />
              </div>
              <div onClick={props.handleStarred}>
                {props.starState ? (
                  <FontAwesomeIcon
                    icon={faStarSolid}
                    style={{ fontSize: "0.9rem" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faStarRegular}
                    style={{ fontSize: "0.9rem" }}
                  />
                )}
              </div>
            </div>
          </div>
        )}
        <div className="header-comp">
          {props.active == 1 && (
            <p style={{ fontFamily: "Roboto", fontSize: "1.1rem" }}>
              Kenda Jenner
            </p>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
}
