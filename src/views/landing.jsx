import { Button } from "react-bootstrap";
import React from "react";
import Footer from "../components/footer";

const LandingView = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="center landing-header">
          <h1>Welcome to the LCS Covid-19 Tracker</h1>
          <Button
            variant="outline-dark"
            href="/LCS-Covid-Tracker/#/covid-stats">
            Lemme see stats
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingView;
