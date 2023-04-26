import { useState } from "react";
import Button from "../Button/Button";

type Props = {
  count: number;
  defaultPage?: number;
  disabled?: boolean;
  variant?: "outlined" | "text";
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "default";
  shape?: "circular" | "rounded";
};

const Pagination = ({
  count,
  defaultPage,
  disabled = false,
  variant = "text",
  size = "medium",
  color = "default",
  shape = "circular",
}: Props) => {
  const [currentPage, setCurrentPage] = useState(defaultPage || 6);

  const constructClassName: () => string = () => {
    let className = "";
    if (shape === "circular") className += "circular-btn ";
    return className;
  };
  const showButtons = () => {
    // Needs refactoring
    const arr = [];
    arr.push(
      <Button
        size={size}
        variant={variant}
        disabled={disabled || currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        color={color}
        className={constructClassName()}
      >
        {"<"}
      </Button>
    );
    arr.push(
      <Button
        size={size}
        variant={variant}
        className={
          currentPage === 1
            ? "reddd " + constructClassName()
            : constructClassName()
        }
        onClick={() => setCurrentPage(1)}
        disabled={disabled}
        color={color}
      >
        1
      </Button>
    );
    if (currentPage >= count - 3) {
      arr.push(
        <Button
          variant={variant}
          disabled={true}
          size={size}
          color={color}
          className={constructClassName()}
        >
          &hellip;
        </Button>
      );
      for (let i = count - 4; i <= count - 1; i++) {
        arr.push(
          <Button
            size={size}
            variant={variant}
            className={
              currentPage === i
                ? "reddd " + constructClassName()
                : constructClassName()
            }
            onClick={() => setCurrentPage(i)}
            disabled={disabled}
            color={color}
          >
            {i}
          </Button>
        );
      }
    } else if (currentPage < 5) {
      for (let i = 2; i <= 5; i++) {
        arr.push(
          <Button
            size={size}
            variant={variant}
            className={
              currentPage === i
                ? "reddd " + constructClassName()
                : constructClassName()
            }
            onClick={() => setCurrentPage(i)}
            disabled={disabled}
            color={color}
          >
            {i}
          </Button>
        );
      }
      arr.push(
        <Button
          size={size}
          variant={variant}
          disabled={true}
          color={color}
          className={constructClassName()}
        >
          &hellip;
        </Button>
      );
    } else {
      arr.push(
        <Button
          size={size}
          variant={variant}
          disabled={true}
          color={color}
          className={constructClassName()}
        >
          &hellip;
        </Button>
      );
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        arr.push(
          <Button
            size={size}
            variant={variant}
            className={
              currentPage === i
                ? "reddd " + constructClassName()
                : constructClassName()
            }
            onClick={() => setCurrentPage(i)}
            disabled={disabled}
            color={color}
          >
            {i}
          </Button>
        );
      }
      arr.push(
        <Button
          size={size}
          variant={variant}
          disabled={true}
          color={color}
          className={constructClassName()}
        >
          &hellip;
        </Button>
      );
    }
    arr.push(
      <Button
        size={size}
        variant={variant}
        className={currentPage === count ? "reddd" : ""}
        onClick={() => setCurrentPage(count)}
        disabled={disabled}
        color={color}
      >
        {count}
      </Button>
    );
    arr.push(
      <Button
        size={size}
        variant={variant}
        disabled={disabled || currentPage === count}
        onClick={() => setCurrentPage(currentPage + 1)}
        color={color}
      >
        {">"}
      </Button>
    );
    return arr;
  };
  return <div style={{ display: "flex" }}>{showButtons()}</div>;
};

export default Pagination;
