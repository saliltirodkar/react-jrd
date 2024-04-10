import React from "react";

const Value = ({ icon, description }) => {
  return (
    <>
      <figure class="snip1533">
        <i className={icon}></i>

        {/* far fa-gem far fa-check-square*/}
        <blockquote>
          <p>{description}</p>
        </blockquote>
      </figure>
    </>
  );
};

export default Value;
