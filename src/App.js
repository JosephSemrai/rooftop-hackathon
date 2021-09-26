import "./styles.css";
import { useState } from "react";
import Timer from "./Timer";
import WorkspaceSelector from "./WorkspaceSelector";
import VideoChat from "./VideoChat";
import CatalystChat from "catalyst-vc-react";
import ReactPlayer from "react-player";

export default function App() {
  const [isVideoChatOpen, setIsVideoChatOpen] = useState(false);
  return (
    <>
      <div className="main-container">
        <div>
          <Timer />
          <WorkspaceSelector />
          <VideoChat
            isVideoChatOpen={isVideoChatOpen}
            setIsVideoChatOpen={setIsVideoChatOpen}
          />
        </div>

        {isVideoChatOpen && (
          <div className="container">
            <CatalystChat
              room="PUBLIC_STUDY"
              appId="XuWdJjuRRWgJpyiF8a0wmORgFut1"
              onEndCall={() => setIsVideoChatOpen(false)}
            />
          </div>
        )}
      </div>
    </>
  );
}
