import PropTypes from "prop-types";
import { useEffect, useMemo, useRef, useState } from "react";
import useMarvelService from "../../services/useMarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

import "./charList.scss";

const setContent = (process, Component, newItemLoading) => {
  switch (process) {
    case "waiting":
      return <Spinner />;
    case "loading":
      return newItemLoading ? <Component /> : <Spinner />;
    case "confirmed":
      return <Component />;
    case "error":
      return <ErrorMessage />;
    default:
      throw new Error("Unexpected process state");
  }
};

const CharList = props => {
  const [charList, setCharList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(210);
  const [charEnded, setCharEnded] = useState(false);

  const { getAllCharacters, process, setProcess } = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
    // eslint-disable-next-line
  }, []);

  const onRequest = (offset, initial) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true);
    getAllCharacters(offset)
      .then(onCharListLoaded)
      .then(() => setProcess("confirmed"));
  };

  const onCharListLoaded = newCharList => {
    let ended = false;
    if (newCharList.length < 9) {
      ended = true;
    }

    setCharList(charList => [...charList, ...newCharList]);
    setNewItemLoading(false);
    setOffset(offset => offset + 9);
    setCharEnded(ended);
  };

  const itemRefs = useRef([]);

  const focusOnItem = id => {
    itemRefs.current.forEach(item =>
      item.classList.remove("char__item_selected")
    );
    itemRefs.current[id].classList.add("char__item_selected");
    itemRefs.current[id].focus();
  };

  // Этот метод создан для оптимизации,
  // чтобы не помещать такую конструкцию в метод render
  const renderItems = arr => {
    const items = arr.map((item, i) => {
      let imgStyle = { objectFit: "cover" };
      if (
        item.thumbnail ===
          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ||
        item.thumbnail ===
          "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif"
      ) {
        imgStyle = { objectFit: "unset" };
      }

      return (
        <li
          className="char__item"
          key={item.id}
          tabIndex={0}
          ref={el => (itemRefs.current[i] = el)}
          onClick={() => {
            focusOnItem(i);
            props.onCharSelected(item.id);
          }}
          onKeyDown={e => {
            if (e.key === "Enter") {
              props.onCharSelected(item.id);
              focusOnItem(i);
            }
          }}
        >
          <img src={item.thumbnail} alt={item.name} style={imgStyle} />
          <div className="char__name">{item.name}</div>
        </li>
      );
    });
    // А эта конструкция вынесена для центровки спиннера/ошибки
    return <ul className="char__grid">{items}</ul>;
  };

  const elements = useMemo(() => {
    return setContent(process, () => renderItems(charList), newItemLoading);
    // eslint-disable-next-line
  }, [process]);

  return (
    <div className="char__list">
      {elements}
      <button
        className="button button__main button__long"
        disabled={newItemLoading}
        onClick={() => onRequest(offset, false)}
        style={{ display: charEnded ? "none" : "block" }}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

CharList.propTypes = {
  onCharSelected: PropTypes.func.isRequired,
};

export default CharList;