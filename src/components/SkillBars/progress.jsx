import "./progress.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import $ from "jquery";
import { myLanguages } from "../../data/languagesData";

var nav = $("body");
const responsive = {
  0: {
    items: 1,
  },
  380: {
    items: 1,
  },
  512: {
    items: 2,
  },
  665: {
    items: 3,
  },
  767: {
    items: 3,
  },
  870: {
    items: 4,
  },
  1024: {
    items: 6,
  },
  1265: {
    items: 6,
  },
};

if (nav.length) {
  var offsetTop = nav.offset().top;
  $(window).on("scroll", function () {
    var height = $(window).height();
    if ($(window).scrollTop() + height > offsetTop) {
      $(".fullwidth").each(function () {
        $(this)
          .find(".skill-bar")
          .animate(
            {
              width: $(this).attr("data-percent"),
            },
            2000
          );
      });
    }
  });
}

const Progress = () => {
  const items = myLanguages?.map((details4) => {
    return (
      <div
        className="mylang mt-1 mb-3"
        title={details4.lang_name}
        key={details4.id}
      >
        <div className="lang-info">
          <div className="lang-img">
            <img src={details4.icon} alt="" />
          </div>
          <h3>{details4.lang_name}</h3>
          <p className={`${details4.exp_level}`}>{details4.exp_level}</p>
        </div>
      </div>
    );
  });
  return (
    <>
      <section id="skills">
        <div className="progress-container">
          <div className="progress-title">
            <h2>My Skills Progress so far</h2>

            <h3>My Skills</h3>
          </div>
          <div className="progress-row2">
            <div className="lang row py-2">
              {/* {items} */}
              <AliceCarousel
                responsive={responsive}
                infinite
                autoPlay
                disableButtonsControls
                disableDotsControls
                mouseTracking
                autoPlayInterval={1500}
                items={items}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Progress;
