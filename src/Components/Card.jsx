"use client" 
import React, { useEffect } from "react";
import SingleCard from "./SingleCard";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "@/DataSlice";

const Card = () => {
  const posts = useSelector(state => state.counter.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 7); // Subtract 7 days from the current date
  const lastSevenDaysPosts = posts.filter((post) => {
    const postDate = new Date(post.postedDate);
    return postDate >= currentDate;
  });

  return (
    <div className="grid grid-cols-3 gap-5 mt-5 mb-16">
      {lastSevenDaysPosts.map((post) => (
        <SingleCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Card;
