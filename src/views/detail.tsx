import { useParams } from 'react-router-dom';
import { getById } from '../services/crud-service';
import { BOOKS } from '../constans/urls';
import { useEffect, useState } from 'react';
import './detail.css';
import { IBook, InitialBook } from '../interfaces/book.interface';

function Detail() {
  const { id } = useParams();
  const [data, setData] = useState<IBook>(InitialBook);

  useEffect(() => {
    getById(BOOKS, id!).then(response => {
      setData(response.data);
    });
  }, []);

  return (
    <section className="section_detail">
      <h1>Detail</h1>
      <p>id: {id}</p>
      <p>data: {data.title}</p>
    </section>
  );
}

export default Detail;
