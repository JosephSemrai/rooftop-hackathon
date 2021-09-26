import "./selectorStyles.css";
import ReactPlayer from "react-player";
import { useState } from "react";

export default function WorkspaceSelector() {
  const [selectedMediaURL, setSelectedMediaURL] = useState(
    "https://www.youtube.com/watch?v=KUgrBTNbSe4"
  );
  const [selectedMediaTitle, setSelectedMediaTitle] = useState(
    "Tropical Beach"
  );

  const [currentCategory, setCurrentCategory] = useState("beach");

  const VIDEO_URLS_BY_CATEGORY = {
    beach: [
      {
        title: "Tropical Beach",
        url: "https://www.youtube.com/watch?v=KUgrBTNbSe4"
      },
      {
        title: "Fiji Islands",
        url: "https://www.youtube.com/watch?v=gnMajPQgkiA"
      }
    ],
    city: [
      {
        title: "Downtown Los Angeles",
        url: "https://www.youtube.com/watch?v=kAM7wnaF6KM&t=1736s"
      }
    ],
    fantasy: [
      {
        title: "Middle Ages Castle",
        url: "https://www.youtube.com/watch?v=u73l0yMy4WU"
      }
    ],
    cafe: [
      {
        title: "Coffee Shop Ambience",
        url: "https://www.youtube.com/watch?v=wSEWdmmk_1o"
      }
    ],
    nature: [
      {
        title: "Flyover Nature",
        url: "https://www.youtube.com/watch?v=BHACKCNDMW8"
      }
    ],
    snow: [
      {
        title: "Cozy Mountain Cabin",
        url: "https://www.youtube.com/watch?v=3SHG_U2R1mk"
      }
    ]
  };

  const handleCategorySelect = (category) => {
    setCurrentCategory(category);

    const categoryVideos = VIDEO_URLS_BY_CATEGORY[category];

    const retrievedVideo =
      categoryVideos[Math.floor(Math.random() * categoryVideos.length)];

    setSelectedMediaTitle(retrievedVideo.title);
    setSelectedMediaURL(retrievedVideo.url);
  };

  return (
    <>
      <div className="wrapper">
        <ReactPlayer
          url={selectedMediaURL}
          muted={true}
          playing={true}
          className="video-player"
        />
      </div>
      <div className="container" style={{ margin: "15px" }}>
        <div className="calculator" name="calc">
          <div class="value" style={{ height: "55px" }}>
            <p style={{ textAlign: "left", fontSize: "14px", padding: "10px" }}>
              Select your workspace
            </p>
          </div>

          <span
            className={`${currentCategory === "beach" && "workspace-active"}`}
            role="img"
            aria-label="beach"
            onClick={() => handleCategorySelect("beach")}
          >
            ⛱️
          </span>
          <span
            className={`${currentCategory === "city" && "workspace-active"}`}
            role="img"
            aria-label="city"
            onClick={() => handleCategorySelect("city")}
          >
            🌆
          </span>
          <span
            className={`${currentCategory === "fantasy" && "workspace-active"}`}
            role="img"
            aria-label="fantasy"
            onClick={() => handleCategorySelect("fantasy")}
          >
            🧙
          </span>

          <span
            className="num plus"
            onClick={() => alert("More spaces coming soon!")}
          >
            >
          </span>

          <span
            className={`${currentCategory === "cafe" && "workspace-active"}`}
            role="img"
            aria-label="cafe"
            onClick={() => handleCategorySelect("cafe")}
          >
            ☕
          </span>
          <span
            className={`${currentCategory === "nature" && "workspace-active"}`}
            role="img"
            aria-label="nature"
            onClick={() => handleCategorySelect("nature")}
          >
            ⛰️
          </span>
          <span
            className={`${currentCategory === "snow" && "workspace-active"}`}
            role="img"
            aria-label="snow"
            onClick={() => handleCategorySelect("snow")}
          >
            ❄️
          </span>

          <div class="video-title" style={{ height: "55px" }}>
            <p
              style={{
                textAlign: "left",
                fontSize: "10px",
                paddingLeft: "10px"
              }}
            >
              Now Playing
            </p>
            <p
              style={{
                textAlign: "left",
                fontSize: "17px",
                paddingLeft: "10px"
              }}
            >
              {selectedMediaTitle}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
