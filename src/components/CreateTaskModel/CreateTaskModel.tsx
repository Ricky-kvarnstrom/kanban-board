import React from "react";
import "./CreateTaskModel.scss";
import { X } from "react-feather";

export default function CreateTaskModel() {
  return (
    <div className="model-container">
      <div className="model-card">
        <div className="model-close">
          <X />
        </div>
      </div>
    </div>
  );
}
