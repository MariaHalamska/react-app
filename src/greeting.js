import PropTypes from "prop-types";

function greeting(props) {
  const welcomeMessage = <h2>Welcome, {props.name}!</h2>;
  const goodbyeMessage = <h2>Goodbye, {props.name}!</h2>;
  return props.isLoggedIn ? welcomeMessage : goodbyeMessage;
}
export default greeting;
