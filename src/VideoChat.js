import "./videoChatStyles.css";

export default function VideoChat({ isVideoChatOpen, setIsVideoChatOpen }) {
  return (
    <div className="container" style={{ margin: "15px" }}>
      <div className="calculator" name="calc">
        <div className="value" name="txt" id="display">
          <div style={{ display: "flex" }} id="counter">
            <p
              style={{
                flex: 2,
                fontSize: 14,
                padding: "10px",
                textAlign: "left"
              }}
            >
              Join Virtual Study Room
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
                alignContent: "center",
                alignItems: "center"
              }}
            >
              <button
                className="start"
                onClick={() => {
                  setIsVideoChatOpen((isVideoChatOpen) => !isVideoChatOpen);
                }}
              >
                {isVideoChatOpen ? "Close Chat" : "Join"}
              </button>
            </div>
          </div>

          <div
            id="timer-select"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <button
              className="type-select-button active"
              style={{ marginTop: "5px" }}
              onClick={() => alert("Private rooms coming soon.")}
            >
              Create a private room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
