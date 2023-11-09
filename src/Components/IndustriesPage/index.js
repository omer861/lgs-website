import React from "react";
import { useInView } from "react-intersection-observer";


import "./index.css";

const IndustriesList = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dkajxnnlq/image/upload/v1690527089/Mask_group-6_ndvhi3.png",
    industriesClass: "industriesImage",
    title: "HOSPITAL",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dkajxnnlq/image/upload/v1690529315/Mask_group-5_bprtvd.png",
    industriesClass: "industriesImage",
    title: "TRAVEL",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dkajxnnlq/image/upload/v1690530584/Mask_group-4_bjsibf.png",
    industriesClass: "industriesImage",
    title: "LOGISTIC & SHIPPING",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dkajxnnlq/image/upload/v1690530818/Mask_group-2_okkdon.png",
    industriesClass: "industriesImage",
    title: "BANKING",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dkajxnnlq/image/upload/v1690531020/Mask_group_vgkgra.png",
    industriesClass: "industriesImage",
    title: "TECHNOLOGY",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dkajxnnlq/image/upload/v1690531175/Mask_group-1_dsblk8.png",
    industriesClass: "industriesImage",
    title: "MANUFACTURING",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dkajxnnlq/image/upload/v1690531387/Layer_x0020_1_fv8ovq.png",
    industriesClass: "industriesImage",
    title: "ECOMMERCE",
  },
  {
    id: 8,
    src: 'https://res.cloudinary.com/dots1s0gu/image/upload/v1692619600/Pngtree_white_book_icon_label_4695326_olas0w.png',
    industriesClass: "industriesImage",
    title: "EDUCATION",
  },
];

const IndustriesPage = () => {
  return (
    <div className="container totalToolsPageContainer">
      <div className="row">
        <div className="col-12">
          <h1 className="industries-heading">Industries</h1>
          <div className="h-line"></div>

          <div className="ToolsPageContainer">
            {IndustriesList.map((eachIndustrie) => (
              <div
                className="col-6 col-lg-3 col-md-4 text-center"
                key={eachIndustrie.id}
              >
                <div className="imageContainer">
                  <ImageElement
                    alt={`industries ${eachIndustrie.id}`}
                    className={eachIndustrie.industriesClass}
                    src={eachIndustrie.src}
                  />
                  <p className="industries-para">{eachIndustrie.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageElement = ({ src, className, alt }) => {
  const [visible, setVisible] = React.useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <div className={`image-evolution ${visible ? "evolved" : ""}`} ref={ref}>
      <img src={src} className={className} alt={alt} />
    </div>
  );
};

export default IndustriesPage;
