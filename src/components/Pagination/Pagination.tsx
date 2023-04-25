import { useState } from "react";
import Button from "../Button/Button";

type Props = {
  count: number;
  defaultPage?: number;
  disabled?: boolean;
};

const Pagination = ({ count, defaultPage, disabled = false }: Props) => {
  const [currentPage, setCurrentPage] = useState(defaultPage || 6);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const showButtons = () => {
    // Needs refactoring
    const arr = [];
    arr.push(
      <Button
        disabled={disabled || currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
      >
        {"<"}
      </Button>
    );
    if (currentPage >= count - 3) {
      for (let i = count - 4; i <= count; i++) {
        arr.push(
          <Button
            className={currentPage === i ? "reddd" : ""}
            onClick={() => goToPage(i)}
            disabled={disabled}
          >
            {i}
          </Button>
        );
      }
    } else if (currentPage < 5) {
      for (let i = 1; i <= 5; i++) {
        arr.push(
          <Button
            className={currentPage === i ? "reddd" : ""}
            onClick={() => goToPage(i)}
            disabled={disabled}
          >
            {i}
          </Button>
        );
      }
    } else {
      arr.push(<Button disabled={true}>...</Button>);
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        arr.push(
          <Button
            className={currentPage === i ? "reddd" : ""}
            onClick={() => goToPage(i)}
            disabled={disabled}
          >
            {i}
          </Button>
        );
      }
      arr.push(<Button disabled={true}>...</Button>);
    }
    arr.push(
      <Button
        disabled={disabled || currentPage === count}
        onClick={() => goToPage(currentPage + 1)}
      >
        {">"}
      </Button>
    );
    return arr;
  };
  return <div style={{ display: "flex" }}>{showButtons()}</div>;
};

export default Pagination;
