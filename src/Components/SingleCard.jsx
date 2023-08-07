import React from 'react';

import Link from 'next/link';
const SingleCard = ({post}) => {


  

    return (
        <div>
            
<div className="card w-96 bg-base-100 shadow-xl">
        <figure>
       
        </figure>
        <div className="card-body">
          <h2 className="card-title">{post.post}</h2>
          <p>{post.postedDate}</p>

          <div className="card-actions ">
        <button className="btn btn-primary">Details </button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SingleCard;