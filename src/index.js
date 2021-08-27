import ReactDOM from 'react-dom';

import paintings from './paintings.json';

function Painting(props) {
  console.log(props);
  return (
    <div>
      <img src={props.url} alt={painting.title} width="480" />
      <h2></h2>
      <p>
        Автор: <a href={props.profileUrl}>{props.authorName}</a>
      </p>
      <p>Цена: кредитов</p>
      <p>Доступность: заканчивается или есть в наличии</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

const painting = paintings[0];
ReactDOM.render(
  <Painting
    url={painting.url}
    title={painting.title}
    authorName={painting.author.tag}
    profileUrl={painting.author.url}
  />,
  document.querySelector('#root'),
);
