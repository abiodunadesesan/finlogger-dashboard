import React from "react";
import { Row, Col } from "react-bootstrap";
import OverviewCard from "./OverviewCard";
import { useAppContext } from "../context/AppContext";

export default function Overview() {
  const { totalExpenses } = useAppContext();

  const cards = [
    { title: "Total Expenses", value: `$${totalExpenses}`, img: "/images/balance.png" },
    { title: "Income", value: "$1400", img: "/images/income.png" },
    { title: "Spending", value: `$${totalExpenses}`, img: "/images/spending.png" },
  ];

  return (
    <Row className="g-3">
      {cards.map((c) => (
        <Col key={c.title} xs={12} md={4}>
          <OverviewCard title={c.title} value={c.value} imageSrc={c.img} />
        </Col>
      ))}
    </Row>
  );
}

