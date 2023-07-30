import { useEffect, useState } from "react";
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Skeleton from "../skeleton/Skeleton";
import Spinner from "../spinner/Spinner";

import PropTypes from "prop-types";

import "./charInfo.scss";

const CharInfo = props => {
  const [char, setChar] = useState(null);

  const { loading, error, getCharacter, clearError } = useMarvelService();

  useEffect(() => {
    updateChar();
  }, [props.charId]);

  const updateChar = () => {
    const { charId } = props;
    if (!charId) {
      return;
    }
    clearError();
    getCharacter(charId).then(onCharLoaded);
  };

  const onCharLoaded = char => {
    setChar(char);
  };

  const skeleton = char || loading || error ? null : <Skeleton />;
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(error || loading || !char) ? <View char={char} /> : null;

  return (
    <div className="char__info">
      {content}
      {skeleton}
      {errorMessage}
      {spinner}
    </div>
  );
};

const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char;
  let imgStyle = { objectFit: "cover" };
  if (
    thumbnail ===
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ||
    thumbnail ===
      "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif"
  ) {
    imgStyle = { objectFit: "contain" };
  }

  return (
    <>
      <div className="char__basics">
        <img src={thumbnail} alt="abyss" style={imgStyle} />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">{description}</div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {comics.length > 0 ? null : "No comics"}
        {comics.map((comicsItem, i) => {
          // eslint-disable-next-line
          if (i > 9) return;
          return (
            <li className="char__comics-item" key={i}>
              <a href={comicsItem.resourceURI}>{comicsItem.name}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

CharInfo.propTypes = {
  charId: PropTypes.number,
};

export default CharInfo;
