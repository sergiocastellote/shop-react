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
      <div className="img_container">
        <img className="img" src={data.imageUrl} alt="" referrerPolicy="no-referrer" />
      </div>
      <div className="txt_container">
        <h1 className="title">{data.title}</h1>
        <p>Autor: {data.author}</p>
        <p>Fecha de publicación: {data.date}</p>
        <p>Género: {data.kind}</p>
        <p>Id: {id}</p>
        <div className="details">
          <Details
            summary="Descripción"
            detailsClassName="govuk-details"
            summaryClassName="govuk-details__summary"
            summaryTextClassName="govuk-details__summary-text"
            detailsTextClassName="govuk-details__text">
            {data.description}
          </Details>
        </div>
      </div>
    </section>
  );
}

export default Detail;
