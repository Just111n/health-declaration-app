import React from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";

function TablePaginationActions({ count, page, rowsPerPage, onPageChange }) {
  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handlePageNumberClick = (event, pageNumber) => {
    onPageChange(event, pageNumber);
  };

  const totalPages = Math.ceil(count / rowsPerPage);
  const pageNumbers = [...Array(totalPages).keys()]; // This gives [0,1,2,..., totalPages-1]

  return (
    <div
      style={{
        flexShrink: 0,
        marginLeft: "2.5rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Button
        variant="outlined"
        onClick={handleBackButtonClick}
        disabled={page === 0}
      >
        Previous
      </Button>

      {/* Render page numbers */}
      <ButtonGroup>
        {pageNumbers.map((pageNumber) => (
          <Button
            key={pageNumber}
            onClick={(e) => handlePageNumberClick(e, pageNumber)}
            variant={pageNumber === page ? "contained" : "outlined"}
            //   style={{
            //     cursor: "pointer",
            //     color: pageNumber === page ? "blue" : "black",
            //   }}
          >
            {pageNumber + 1}
          </Button>
        ))}
      </ButtonGroup>

      <Button
        variant="outlined"
        onClick={handleNextButtonClick}
        disabled={page >= totalPages - 1}
      >
        Next
      </Button>
    </div>
  );
}

export default TablePaginationActions;
