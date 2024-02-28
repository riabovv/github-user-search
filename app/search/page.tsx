"use client";

import { useLayoutEffect } from "react";
import { redirect, useSearchParams } from "next/navigation";
import Header from "../components/layout/Header/Header";
import LoadingSkeleton from "../components/LoadingSkeleton/LoadingSkeleton";

const Search = () => {
  const searchParams = useSearchParams();
  const hasQueryParam = !!searchParams.get("q");

  useLayoutEffect(() => {
    if (!hasQueryParam) {
      redirect("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header shouldLogoRedirect />
      <LoadingSkeleton />
    </>
  );
};

export default Search;
