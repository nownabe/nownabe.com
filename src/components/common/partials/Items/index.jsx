import React from 'react';

import Item from './Item';

export default ({ contents }) => (
  <div>
    {contents.map(content => (
      <Item {...content} key={content.title} />
    ))}
  </div>
);
