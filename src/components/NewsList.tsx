import React from 'react';


interface Item {
  "source": {
    "id": null | string,
    "name": string
  },
  "author": string,
  "title": string,
  "description": string,
  "url": string,
  "urlToImage": string,
  "publishedAt": string,
  "content": string;
}

interface Props {
  data: Item[];
}

const NewsList: React.SFC<Props> = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  if (!data.length) {
    return <div>There are no items.</div>;
  }

  return <div className="news-list">
    { data.map((item: Item) => {
      return <div key={ item.title } className="news-item" style={ {
        backgroundImage: `url(${item.urlToImage})`,
        backgroundSize: 'cover'
      } }>
        <div className="filter">
          <div className="date">{ new Date(item.publishedAt).toDateString() }</div>
          <div className="title">{ item.title }</div>
          <div className="author"><span>Author:</span> { item.author }</div>
          <a className="source" href={ item.url }>{ item.source.name }</a>
        </div>
      </div>
    }) }
  </div>
};

export default NewsList;