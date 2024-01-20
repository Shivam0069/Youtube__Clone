import VideoDetails from "@/app/components/VideoDetails";
import React from "react";

export default function page({ params }) {
  const id = params.videoId;
  return (
    <div>
        
      <VideoDetails id={id} />
    </div>
  );
}
