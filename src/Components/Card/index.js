import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const OurClientsList = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/Zoox_Motors_qhr2hn.png",
    height: 130,
    width: 130,
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/Taulia_ffxzhx.png",
    height: 130,
    width: 130,
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/Tata_Alexis_ptw73z.png",
    height: 130,
    width: 130,
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927041/Medtronic_xgouix.png",
    height: 130,
    width: 130,
  },
  {
    id: 5,
    src: "data:image/png;base64,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",
    height: 140,
    width: 140,
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689926991/64_BitStore_poolzk.png",
    height: 130,
    width: 130,
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/siemens_s7ucfi.png",
    height: 130,
    width: 130,
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/sedemac_dlcgdk.jpg",
    height: 130,
    width: 130,
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927042/ptc_xxn1tl.png",
    height: 130,
    width: 130,
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927041/Padmini-Vna_ep4pwk.jpg",
    height: 130,
    width: 130,
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/CIBT_Visas_cfxkcy.png",
    height: 100,
    width: 130,
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Cognizant_esfsi8.png",
    height: 130,
    width: 130,
  },
  {
    id: 13,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927040/HCL_igijlj.png",
    height: 130,
    width: 130,
  },
  {
    id: 14,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Alcove_Furniture_feq4qz.png",
    height: 100,
    width: 130,
  },
  {
    id: 15,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927008/Air_BNB_ijkep7.png",
    height: 90,
    width: 130,
  },
  {
    id: 16,
    src: "https://res.cloudinary.com/dg81jw9qd/image/upload/v1689927041/Nityas_Fashion_a9ly47.png",
    height: 100,
    width: 130,
  },
  {
    id: 17,
    src: "https://www.iccqatar.org/wp-content/uploads/2018/11/Al-Khaliji-Bank-Logo.jpg",
    height: 130,
    width: 130,
  },
  {
    id: 18,
    src: "https://image.shutterstock.com/image-photo/image-260nw-2323172151.jpg",
    height: 130,
    width: 130,
  },
];

function Card() {
  return (
    <div className="container our-clients-main-container mt-4">
      <h1 className="text-center our-clients-heading">Our Clients</h1>
      <div className="h-line"></div>
      <div className="row">
        {OurClientsList.map((eachClient) => (
          <div
            className="col-6 col-md-4 col-lg-2 our-clients-image-container"
            key={eachClient.id}
          >
            <div className="our-clients-card-image">
              <img className="clinets-image-size"
                alt={`Client ${eachClient.id}`}
                src={eachClient.src}
                height={eachClient.height}
                width={eachClient.width}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Card;
