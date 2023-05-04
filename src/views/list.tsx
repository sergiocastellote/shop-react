import { Table } from '@capgeminiuk/dcx-react-library';
import { useEffect, useState } from 'react';
import { get } from '../services/crud-service';
import { useNavigate } from 'react-router-dom';
import { BOOKS } from '../constans/urls';

function List() {
  const [data, setData] = useState([]);
  let navigate = useNavigate();

  const handleCellClick = (evt: any, value: any) => {
    if (evt.target.name === 'goToDetail') {
      return navigate('/detail/' + value.id);
    }
  };

  useEffect(() => {
    get(BOOKS).then(response => {
      const newData = response.data.map((item: any) => ({
        ...item,
        actions: (
          <button className="btn btn-danger" name="goToDetail">
            Ir al detalle
          </button>
        ),
      }));
      setData(newData);
    });
  }, []);

  return (
    <>
      {data.length > 0 ? (
        <div>
          Introduce texto para realizar búsqueda:
          <Table
            dataSource={data}
            withSearch={true}
            tableClassName="table"
            theadClassName="thead"
            trClassName="header-row"
            thClassName="th"
            tbodyClassName="tbody"
            tdClassName="td"
            selectedRowClassName="trSelected"
            columnsToOmit={['id', 'imageUrl']}
            customHeaderLabels={['Título', 'Autor', 'Año de publicación', 'Género', 'Decripción', '']}
            handleCellClick={handleCellClick}
          />
        </div>
      ) : null}
    </>
  );
}

export default List;
