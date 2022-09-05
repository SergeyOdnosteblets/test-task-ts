import React, { useEffect, useState } from 'react';

import { Item } from '../pages/Item/Item';
import axios from 'axios';

export const List: React.FC = () => {
  let [list, setList] = useState<string[]>([]);

  useEffect(() => {
    axios.get('/list').then((request) => {
      if (request.status === 200) {
        setList(request.data.data);
      }
    });
  }, []);

  return (
    <div data-testid="all-user-id">{list && list.map((item) => <Item id={item} key={item} />)}</div>
  );
};
