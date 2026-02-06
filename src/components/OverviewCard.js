import React from "react";
import { Card } from "react-bootstrap";

export default function OverviewCard({ title, value, imageAlt, imageSrc }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex align-items-center justify-content-between">
        <div>
          <div className="text-muted small">{title}</div>
          <div className="fs-4 fw-semibold">{value}</div>
        </div>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt || title}
            style={{ width: 44, height: 44, objectFit: "contain" }}
          />
        ) : null}
      </Card.Body>
    </Card>
  );
}

