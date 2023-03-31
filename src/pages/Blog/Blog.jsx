import Title from "../../components/Title";
import Introduction from "../../components/About-us/Introduction";
import Header from "../../components/Header";

const Blog = () => {
  return (
    <div>
      <Header />
      {/* <Title title="Rooms" /> */}
      {Title("Blog", "Blog Grid")}
      <section className="blog-section blog-page spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="blog-item set-bg"
                data-setbg="img/blog/blog-1.jpg"
              >
                <div className="bi-text">
                  <span className="b-tag">Travel Trip</span>
                  <h4>
                    <a href="./blog-details.html">Tremblant In Canada</a>
                  </h4>
                  <div className="b-time">
                    <i className="icon_clock_alt" /> 15th April, 2019
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="blog-item set-bg"
                data-setbg="img/blog/blog-2.jpg"
              >
                <div className="bi-text">
                  <span className="b-tag">Camping</span>
                  <h4>
                    <a href="./blog-details.html">Choosing A Static Caravan</a>
                  </h4>
                  <div className="b-time">
                    <i className="icon_clock_alt" /> 15th April, 2019
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="blog-item set-bg"
                data-setbg="img/blog/blog-3.jpg"
              >
                <div className="bi-text">
                  <span className="b-tag">Event</span>
                  <h4>
                    <a href="./blog-details.html">Copper Canyon</a>
                  </h4>
                  <div className="b-time">
                    <i className="icon_clock_alt" /> 21th April, 2019
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="blog-item set-bg"
                data-setbg="img/blog/blog-4.jpg"
              >
                <div className="bi-text">
                  <span className="b-tag">Trivago</span>
                  <h4>
                    <a href="./blog-details.html">A Time Travel Postcard</a>
                  </h4>
                  <div className="b-time">
                    <i className="icon_clock_alt" /> 22th April, 2019
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="blog-item set-bg"
                data-setbg="img/blog/blog-5.jpg"
              >
                <div className="bi-text">
                  <span className="b-tag">Camping</span>
                  <h4>
                    <a href="./blog-details.html">A Time Travel Postcard</a>
                  </h4>
                  <div className="b-time">
                    <i className="icon_clock_alt" /> 25th April, 2019
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="blog-item set-bg"
                data-setbg="img/blog/blog-6.jpg"
              >
                <div className="bi-text">
                  <span className="b-tag">Travel Trip</span>
                  <h4>
                    <a href="./blog-details.html">Virginia Travel For Kids</a>
                  </h4>
                  <div className="b-time">
                    <i className="icon_clock_alt" /> 28th April, 2019
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="blog-item set-bg"
                data-setbg="img/blog/blog-7.jpg"
              >
                <div className="bi-text">
                  <span className="b-tag">Travel Trip</span>
                  <h4>
                    <a href="./blog-details.html">Bryce Canyon A Stunning</a>
                  </h4>
                  <div className="b-time">
                    <i className="icon_clock_alt" /> 29th April, 2019
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="blog-item set-bg"
                data-setbg="img/blog/blog-8.jpg"
              >
                <div className="bi-text">
                  <span className="b-tag">Event &amp; Travel</span>
                  <h4>
                    <a href="./blog-details.html">Motorhome Or Trailer</a>
                  </h4>
                  <div className="b-time">
                    <i className="icon_clock_alt" /> 30th April, 2019
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="blog-item set-bg"
                data-setbg="img/blog/blog-9.jpg"
              >
                <div className="bi-text">
                  <span className="b-tag">Camping</span>
                  <h4>
                    <a href="./blog-details.html">Lost In Lagos Portugal</a>
                  </h4>
                  <div className="b-time">
                    <i className="icon_clock_alt" /> 30th April, 2019
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="load-more">
                <a href="#" className="primary-btn">
                  Load More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
