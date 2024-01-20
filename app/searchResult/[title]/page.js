import SearchResult from "@/app/components/SearchResult";
import React from "react";

export default function page({ params }) {
  const searchQuery = params.title;
  return (
    <div>
      <SearchResult searchQuery={searchQuery} />
    </div>
  );
}
