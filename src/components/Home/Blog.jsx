import blogImage1 from "../../assets/img/blog/blog-1.jpg";


const Blog = () => {
  const setBg = (img) => {
    return {
      backgroundImage: `url(${img})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    };
  }
  return (
    <section className="blog-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <span>Hotel News</span>
              <h2>Our Blog &amp; Event</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div
              className="blog-item set-bg"
              style={setBg(blogImage1)}
            >
              <div className="bi-text">
                <span className="b-tag">Travel Trip</span>
                <h4>
                  <a href="#">Tremblant In Canada</a>
                </h4>
                <div className="b-time">
                  <i className="icon_clock_alt" /> 15th April, 2019
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="blog-item set-bg"
              style={setBg(blogImage1)}
            >
              <div className="bi-text">
                <span className="b-tag">Camping</span>
                <h4>
                  <a href="#">Choosing A Static Caravan</a>
                </h4>
                <div className="b-time">
                  <i className="icon_clock_alt" /> 15th April, 2019
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="blog-item set-bg"
              style={setBg(blogImage1)}
            >
              <div className="bi-text">
                <span className="b-tag">Event</span>
                <h4>
                  <a href="#">Copper Canyon</a>
                </h4>
                <div className="b-time">
                  <i className="icon_clock_alt" /> 21th April, 2019
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div
              className="blog-item small-size set-bg"
              style={setBg(blogImage1)}
            >
              <div className="bi-text">
                <span className="b-tag">Event</span>
                <h4>
                  <a href="#">
                    Trip To Iqaluit In Nunavut A Canadian Arctic City
                  </a>
                </h4>
                <div className="b-time">
                  <i className="icon_clock_alt" /> 08th April, 2019
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="blog-item small-size set-bg"
              style={setBg(blogImage1)}
            >
              <div className="bi-text">
                <span className="b-tag">Travel</span>
                <h4>
                  <a href="#">Traveling To Barcelona</a>
                </h4>
                <div className="b-time">
                  <i className="icon_clock_alt" /> 12th April, 2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
