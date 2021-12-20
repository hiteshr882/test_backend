const Data = require("../models/data");

const Fetch = async (req, res, next) => {
  try {
    const data = Data.find({});
    res.send({
      data,
    });
  } catch (e) {
    next(e);
  }
};

const UploadFile = async (req, res, next) => {
  try {
    const request = req.body;

    for (let key in request) {
      if (key > 0 && request[key].length > 0) {
        const row =  Data({
          pk: request[key][0],
          account: request[key][1],
          amount: request[key][2],
          business_area: request[key][3],
          coast_center: request[key][4],
          assignment: request[key][5],
          inter_co_code: request[key][6],
          internal_order: request[key][7],
          webs_element: request[key][8],
          plan: request[key][9],
          material: request[key][10],
          quantity: request[key][11],
          unit_of_measure: request[key][12],
          text: request[key][13],
          po: request[key][14],
          po_line: request[key][15],
          reference_key_3: request[key][16],
        })

        await row.save()
      }
    }
    res.send({
      message: "Uploaded Successfully",
    });
  } catch (e) {
    next(e);
  }
};

module.exports = { Fetch, UploadFile };
