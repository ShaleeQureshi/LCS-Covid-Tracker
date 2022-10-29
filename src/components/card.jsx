import React from "react";
import { Card } from "react-bootstrap";

const CustomCards = (props) => {
  return (
    <Card
      bg="dark"
      key="Dark"
      text="white"
      style={{ width: "17rem" }}
      className="mb-2">
      <Card.Header>Covid Stats</Card.Header>
      <Card.Body>
        <Card.Title>
          {props.country} | {props.countryCode}
        </Card.Title>
        <p>New Confirmed Cases: {props.newConfirmed}</p>
        <p>New Deaths: {props.newDeaths}</p>
        <p>New Recovered: {props.newRecovered}</p>
        <p>Total Confirmed: {props.confirmed}</p>
        <p>Total Deaths: {props.deaths}</p>
        <p>Total Recovered: {props.recovered}</p>
      </Card.Body>
    </Card>
  );
};
export default CustomCards;
