import React , { useState } from 'react';

export default function Style(props) {
  const [stylePath, setStylePath] = useState(props.path);

  return (
    <div>
      <link rel="stylesheet" type="text/css" href={stylePath} />
    </div>
  );
}