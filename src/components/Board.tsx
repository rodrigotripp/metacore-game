import { mainBoardType, item } from '@/types/types';
import { useEffect, useState } from 'react';

import Cell from './Cell';
import Sidebar from './Sidebar';

function Board() {
  const [data, setData] = useState<mainBoardType>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [selectedItem, setSelected] = useState<item>();

  const getData = () => {
    fetch('/static/assignment.json')
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
        return resData.items;
      })
      .then((items) => (items.length > 0 ? setLoading(false) : setLoading(true)));
  };
  useEffect(() => {
    getData();
  }, [isLoading, selectedItem]);

  return (
    <div className="flex flex-row">
      {
        selectedItem ? <Sidebar {...selectedItem} /> : null
      }
      <div>
        <div
          className={`grid grid-cols-${data?.width} gap-1 grid-rows-${data?.height}`}
        >
          {data?.items.map((gameItem) => (
            <Cell key={`${gameItem?.itemId}-${String(Math.random())}`} {...gameItem} handleClick={setSelected} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Board;
