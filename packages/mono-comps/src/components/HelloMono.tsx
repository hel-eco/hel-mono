import React from 'react';
import { hello } from '@mc/utils';

export function HelloMono() {
  const [num, setNum] = React.useState(0);
  hello();

  return (
    <div>
      <h1>sub mod new version 888888 new 2012---</h1>
      <h3>num: {num}</h3>
      <button onClick={() => setNum(Date.now())}>change num</button>
    </div>
  );
}
