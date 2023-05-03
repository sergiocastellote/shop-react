import { Table } from '@capgeminiuk/dcx-react-library';
import { useEffect, useState } from 'react';
import { get } from '../services/crud-service';
import { BOOKS } from '../constans/urls';

function List() {

  const [ data, setData ] = useState([]);
  const handleCellClick = (evt: any, value: any) => {
    if (evt.target.name === 'goToDetail') {
      alert('goToDetail');
    }
  };

  useEffect(() => {
    get(BOOKS).then((response) => {
      const newData = response.data.map((item: any) => ({...item, actions: 
          <button className="btn btn-danger" name="goToDetail">
            Go To Detail
          </button>
       }))
      setData(newData);
    });
  }, []);

  return <>{ data.length > 0 ?  <Table dataSource={data} handleCellClick={handleCellClick}/> : null}</>;
}

export default List
