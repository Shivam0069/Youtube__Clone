// Feed component
import React, { useContext } from "react";
import LeftNav from "./LeftNav";
import { Context } from "../context/contextApi";
import VideoCard from "./VideoCard";

export default function Feed() {
  const { loading, searchResults } = useContext(Context);

  return (
    <div className="flex flex-row h-[calc(100%-56px)] overflow-hidden">
      <LeftNav />
      <div className="flex-grow w-[calc(100% - 240px)] ml-[240px] h-full overflow-y-auto dark:bg-black bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading &&
            searchResults?.map((item) => {
              if (item.type !== "video") return false;
              return <VideoCard key={item?.video?.videoId} video={item?.video} />;
            })}
        </div>
      </div>
    </div>
  );
}
