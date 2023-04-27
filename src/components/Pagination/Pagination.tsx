import { useState } from "react";
import Button from "../Button/Button";

type Props = {
  count: number;
  defaultPage?: number;
  disabled?: boolean;
  variant?: "outlined" | "filled";
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "default";
  shape?: "circular" | "rounded";
  onChange?: (e: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
};

const Pagination = ({
  count,
  defaultPage = 1,
  disabled = false,
  variant = "filled",
  size = "medium",
  color = "default",
  shape = "circular",
  onChange,
}: Props) => {
  const [currentPage, setCurrentPage] = useState(defaultPage);

  // const constructClassName: () => string = () => {
  //   let className = "";
  //   if (shape === "circular") className += "circular-btn ";
  //   else if(shape === "rounded") className += ""
  //   return className;
  // };
  const changePage = (
    e: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => {
    setCurrentPage(newPage);
    onChange?.(e, newPage);
  };
  const constructClassName = (i: number = -1) => {
    const isActive = i === currentPage ? "isActive" : "notActive";
    const colorVariantCls = `pagination-btn-${color}-${variant}-${isActive}`;
    const sizeCls = `pagination-btn-${size}`;
    const shapeCls = `pagination-btn-${shape}`;
    return ["pagination-btn", colorVariantCls, sizeCls, shapeCls].join(" ");
  };

  const showButtons = () => {
    // Needs refactoring
    const arr = [];
    arr.push(
      <button
        disabled={disabled || currentPage === 1}
        onClick={(e) => changePage(e, currentPage - 1)}
        className={constructClassName()}
      >
        {"<"}
      </button>
    );
    arr.push(
      <Button
        className={constructClassName(1)}
        onClick={(e) => changePage(e, 1)}
        disabled={disabled}
      >
        1
      </Button>
    );
    if (currentPage >= count - 3) {
      arr.push(<div className={constructClassName()}>&hellip;</div>);
      for (let i = count - 4; i <= count - 1; i++) {
        arr.push(
          <Button
            className={constructClassName(i)}
            onClick={(e) => changePage(e, i)}
            disabled={disabled}
          >
            {i}
          </Button>
        );
      }
    } else if (currentPage < 5) {
      for (let i = 2; i <= 5; i++) {
        arr.push(
          <Button
            className={constructClassName(i)}
            onClick={(e) => changePage(e, i)}
            disabled={disabled}
          >
            {i}
          </Button>
        );
      }
      arr.push(<div className={constructClassName()}>&hellip;</div>);
    } else {
      arr.push(<div className={constructClassName()}>&hellip;</div>);
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        arr.push(
          <Button
            className={constructClassName(i)}
            onClick={(e) => changePage(e, i)}
            disabled={disabled}
          >
            {i}
          </Button>
        );
      }
      arr.push(<div className={constructClassName()}>&hellip;</div>);
    }
    arr.push(
      <Button
        className={constructClassName(count)}
        onClick={(e) => changePage(e, count)}
        disabled={disabled}
      >
        {count}
      </Button>
    );
    arr.push(
      <Button
        disabled={disabled || currentPage === count}
        onClick={(e) => changePage(e, currentPage + 1)}
        className={constructClassName()}
      >
        {">"}
      </Button>
    );
    return arr;
  };
  return <div style={{ display: "flex" }}>{showButtons()}</div>;
};

export default Pagination;
