import { useParams } from 'react-router-dom';
import { getById } from '../services/crud-service';
import { BOOKS } from '../constans/urls';
import { useEffect, useState } from 'react';
import { IBook, InitialBook } from '../interfaces/book.interface';
import { Details } from '@capgeminiuk/dcx-react-library';
import './detail.css';

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
      <p>title: {data.title}</p>
      <p>author: {data.author}</p>
      <p>date: {data.date}</p>
      <p>kind: {data.kind}</p>
      <img src={data.imageUrl} alt="" referrerPolicy="no-referrer" />
      <Details
        summary="Descripción"
        detailsClassName="govuk-details"
        summaryClassName="govuk-details__summary"
        summaryTextClassName="govuk-details__summary-text"
        detailsTextClassName="govuk-details__text">
        {data.description}
      </Details>
    </section>
  );
}

export default Detail;
