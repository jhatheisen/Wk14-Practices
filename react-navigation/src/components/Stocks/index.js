import { Redirect } from "react-router-dom";

function Stocks() {
  let loggedIn = false;

  if (!loggedIn) {
    return <Redirect to="/not-logged-in" />;
  }

  return (
    <div className="comp orange">
      <h1>Stocks Component</h1>
    </div>
  );
}

export default Stocks;
