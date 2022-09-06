import React, { useEffect, useState } from 'react';

import { ListItem } from '../../components/ListItem/ListItem';
import axios from 'axios';

export const List: React.FC = () => {
  let [list, setList] = useState<string[]>([]);

  // const userLink = (id: string) => {
  //   setTest()
  // };

  useEffect(() => {
    axios.get('/list').then((request) => {
      if (request.status === 200) {
        setList(request.data.data);
        
      }
    });
  }, []);

  return (
    <div data-testid="all-user-id">
      {list && list.map((item) => <ListItem id={item} key={item} />)}
    </div>
  );
};
