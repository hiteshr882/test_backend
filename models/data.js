const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    pk: { type: String },
    account: { type: String },
    amount: { type: String },
    business_area: { type: String },
    coast_center: { type: String },
    assignment: { type: String },
    inter_co_code: { type: String },
    internal_order: { type: String },
    webs_element: { type: String },
    plan: { type: String },
    material: { type: String },
    quantity: { type: String },
    unit_of_measure: { type: String },
    text: { type: String },
    po: { type: String },
    po_line: { type: String },
    reference_key_3: { type: String },
  },
  { timestamps: true }
);

const Data = mongoose.model("Data", DataSchema);

module.exports = Data;
