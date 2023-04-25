import { useEffect, useState } from "react";
import Button from "../Button/Button";

type Props = {
  count: number;
  defaultPage?: number;
  disabled?: boolean;
};

const Pagination = ({ count, defaultPage, disabled = false }: Props) => {
  const [currentPage, setCurrentPage] = useState(defaultPage || 6);
  const [pages, setPages] = useState<{ display: boolean }[]>([]);

  useEffect(() => {
    const newPages = new Array(count).fill(0);
    setPages(newPages);
  }, [count]);

  const hideButtons =
    count > 4 && (currentPage >= 5 || currentPage < count - 4);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const showRightButtons = () => {
    const buttonsArr = [];
    if (currentPage < count - 1) {
      for (let i = currentPage + 1; i < count - 1; i++) {
        buttonsArr.push(
          <Button onClick={() => goToPage(i)} disabled={disabled}>
            {i}
          </Button>
        );
      }
    }
    console.log(buttonsArr);
    return buttonsArr;
  };
  return (
    <div>
      <Button
        disabled={disabled || currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
      >
        {"<"}
      </Button>
      {pages.length ? (
        <Button
          className={currentPage === 1 ? "reddd" : ""}
          onClick={() => goToPage(2)}
          disabled={disabled}
        >
          {1}
        </Button>
      ) : (
        ""
      )}

      {currentPage >= 5 && <Button disabled={true}>...</Button>}
      <Button onClick={() => goToPage(currentPage - 1)} disabled={disabled}>
        {currentPage - 1}
      </Button>
      <Button
        className={"reddd"}
        onClick={() => goToPage(count - 1)}
        disabled={disabled}
      >
        {currentPage}
      </Button>
      {currentPage < 9 && (
        <Button onClick={() => goToPage(currentPage + 1)} disabled={disabled}>
          {currentPage + 1}
        </Button>
      )}
      {currentPage < count - 3 ? (
        <Button disabled={true}>...</Button>
      ) : (
        showRightButtons()
      )}

      {pages.length ? (
        <Button
          className={currentPage === count ? "reddd" : ""}
          onClick={() => goToPage(count - 1)}
          disabled={disabled}
        >
          {count}
        </Button>
      ) : (
        ""
      )}
      <Button
        disabled={disabled || currentPage === count}
        onClick={() => goToPage(currentPage + 1)}
      >
        {">"}
      </Button>
    </div>
  );
};

export default Pagination;
