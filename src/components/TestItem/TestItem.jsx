import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const TestItem = ({ list }) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    Promise.allSettled(list.map((item) => axios.get(`/get/${item}`))).then((res) => setState(res));
  }, [list]);

  console.log('state', state);

  // let test = state.filter((item) => {
  //   return item.status === 'fulfilled';
  // });
  // console.log('test', test);

  return (
    <ul>
      {/* {test &&
        test.map((item, index) => {
          console.log(item.value.data.data.firstName);
          return (
            <div key={index}>
              <p>{item.value.data.data.firstName}</p>
            </div>
          );
        })} */}
    </ul>
  );
};
