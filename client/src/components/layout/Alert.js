import React from "react";
import { connect } from "react-redux";
import { AlertsContainer } from "../../App";

const Alert = ({ alerts }) => {
  return (
    alerts !== null &&
    alerts.length > 0 && (
      <>
        <AlertsContainer>
          {" "}
          {alerts.map((alert, index) => {
            return (
              <div key={index} className={`alert alert-${alert.alertType}`}>
                {alert.msg}
              </div>
            );
          })}
        </AlertsContainer>
      </>
    )
  );
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
