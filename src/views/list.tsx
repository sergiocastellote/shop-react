import { Table } from '@capgeminiuk/dcx-react-library';
import { useEffect, useState } from 'react';
import { get } from '../services/crud-service';
import { BOOKS } from '../constans/urls';

function List() {

  const [ data, setData ] = useState([]);

  useEffect(() => {
    get(BOOKS).then((response) => {
      setData(response.data);
    });
  }, []);

  return (<>{JSON.stringify(data)}</>)
}

export default List
