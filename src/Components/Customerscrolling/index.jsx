import "./index.css";

const BannerRight = ({ images, speed = 10000 }) => {
  return (
    <div className="inner">
      <div className="wrapper">
        <section className="section" style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <img className="img1" src={image} alt={id} />
            </div>
          ))}
        </section>
        <section className="section" style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <img className="img1" src={image} alt={id} />
            </div>
          ))}
        </section>
        <section className="section" style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image }) => (
            <div className="image" key={id}>
              <img className="img1" src={image} alt={id} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export { BannerRight };
