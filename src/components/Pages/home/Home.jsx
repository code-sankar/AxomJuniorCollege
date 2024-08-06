import React, { useEffect, useState } from "react";
import MovingNotice from "./MovingNotice";
import Items from "./Items";
import SocialMediaBar from "./SocialMediaBar";
import ReviewAndFAQ from "./ReviewAndFAQ";
import StudentAdmin from "../../StudentPortal/StudentPortalBtn";
import SmallPara from "./SmallPara";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMsy-adN7tvsVAdUOzm5TWbvk5oJ-CJS2fBA&s",
    "https://via.placeholder.com/800x400.png?text=Slide+2",
    "https://via.placeholder.com/800x400.png?text=Slide+3",
    "https://via.placeholder.com/800x400.png?text=Slide+4",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <section>
        <div className="flex w-full justify-center items-start bg-gray-100 h-auto">
          <div className="sliding-bar relative w-full md:w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="sliding-img relative md:h-128 w-full overflow-hidden">
              {" "}
              {/* Adjust the height here */}
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              ))}
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition duration-300"
                onClick={handlePrev}
              >
                &#10094;
              </button>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition duration-300"
                onClick={handleNext}
              >
                &#10095;
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <MovingNotice />
      </section>
      
      <section>
        <StudentAdmin />
      </section>

      <section>
        <SmallPara />
      </section>

      <section>
        <div className="text-black">
          <Items />
        </div>
      </section>
      <section>
        <div className="">
          <SocialMediaBar />
        </div>
      </section>
      <section>
        <div className="">
          <ReviewAndFAQ />
        </div>
      </section>
    </div>
  );
}

export default Home;
