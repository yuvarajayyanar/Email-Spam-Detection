import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function Ribbon(props) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000);

    setTime(new Date());

    return () => clearInterval(timer);
  }, []);

  const timeOptions = { hour: "2-digit", minute: "2-digit" };
  const formattedTime = time.toLocaleTimeString([], timeOptions);

  const dateOptions = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = time.toLocaleDateString(undefined, dateOptions);
  return (
    <div className="ribbon-outer">
      <div className="ribbon">
        <div className="date">
          {/* <div className="mail-icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div> */}
          <div style={{ marginLeft: "0.5rem" }}>
            {formattedTime}
            <span style={{ fontWeight: "500", marginLeft: "1rem" }}>
              {formattedDate}
            </span>
          </div>
        </div>
        <div className="ribbon-right">
          <div>
            <button
              className="create-button"
              onClick={() => props.newMessage(true)}
            >
              Create new
            </button>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="Search people, word or anything..."
            />
          </div>
          <div className="user">
            <div className="user-logo">SB</div>
            {/* <div>Sophia Bennett</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
