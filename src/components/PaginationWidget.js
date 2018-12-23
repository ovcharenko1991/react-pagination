import React from "react";

export const PaginationWidget = props => {
  const { currentPage, pagesCount, data, onPageTileClick, loading } = props;

  const pageBadges = new Array(pagesCount).fill(true).map((value, idx) => {
    const className =
      idx + 1 === currentPage ? "page-tile selected" : "page-tile";

    return (
      <span
        key={`page-${idx + 1}`}
        className={className}
        onClick={() => onPageTileClick(idx + 1)}
      >
        {idx + 1}
      </span>
    );
  });

  const renderedUserData = data.map(({ id, name, surname, desc }) => (
    <div className="data">{`ID: ${id}, Name: ${name}, Surname: ${surname}, Desc: ${desc}`}</div>
  ));

  return (
    <div className="data-container">
      {loading && <div className="loader">
        <div className="b1">
          <div className="b2">
            <div className="b3"></div>
          </div>
        </div>
      </div>}
      {renderedUserData}
      <div className="pagination">{pageBadges}</div>
    </div>
  );
};

export default PaginationWidget;
