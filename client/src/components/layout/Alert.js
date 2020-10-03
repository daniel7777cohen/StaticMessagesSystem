import React from "react";
import { connect } from "react-redux";
import { AlertText, AlertsContainer } from "../../styled-components/styles";

const Alert = ({ alerts }) => {
  return (
    alerts !== null &&
    alerts.length > 0 && (
      <>
        <AlertsContainer>
          {" "}
          {alerts.map((alert, index) => {
            return (
              <AlertText key={index} alertType={alert.alertType}>
                {alert.msg}
              </AlertText>
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
