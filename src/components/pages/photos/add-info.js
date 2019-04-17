import React from "react";

const AddInfo = ({ arr }) => {
  let url = null;
  if (arr[0]) {
    url = arr[0].urls.raw;
  }

  return (
    <div className="raw">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {url}
      </a>
    </div>
  );
};

export default AddInfo;
