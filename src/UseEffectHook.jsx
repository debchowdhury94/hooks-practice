import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [resourceType, setResourceType] = useState("posts");
  // const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  // 	fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  // 	.then(response => response.json())
  // 	.then(json => setItems(json));
  // }, [resourceType]);

  useEffect(() => {
    console.log("resource changed");

    //clean-up
    return () => {
      console.log("return from resource changed");
    };
  });

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    //clean-up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="wrapper">
      <div className="inner">
        <button className="posts" onClick={() => setResourceType("posts")}>
          Posts
        </button>
        <button className="users" onClick={() => setResourceType("users")}>
          Users
        </button>
        <button
          className="comments"
          onClick={() => setResourceType("comments")}
        >
          Comments
        </button>
      </div>
      <h1>{resourceType}</h1>
      {/* {items.map(item => {
				return <pre>{JSON.stringify(item)}</pre>
			})} */}
      <h1>{windowWidth}</h1>
    </div>
  );
};

export default UseEffectHook;
