import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Box,
} from "@mui/material";
import { COVID_FORM_KEY } from "../../../config/constant";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { useNavigate } from "react-router-dom";
import { alpha } from "@mui/material/styles";
import TablePaginationActions from "./TablePaginationActions";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";

export default function DataTable({ searchTerm }) {
  const dataArr = JSON.parse(localStorage.getItem(COVID_FORM_KEY));

  const [data, setData] = useState(dataArr || []);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem(COVID_FORM_KEY);
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(COVID_FORM_KEY, JSON.stringify(data));
  }, [data]);

  const filteredData = data.filter((row) => {
    return (
      row.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.object.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.id.toString().includes(searchTerm) ||
      row.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.province.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEdit = (id) => {
    navigate(`/form/${id}`);
    const point = data.find((item) => item.id === id);
    console.log(point);
  };

  const handleDelete = (id) => {
    setData((prevState) => prevState.filter((item) => item.id !== id));
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#D1E7DD",
      fontWeight: 800,
    },
    [`&.${tableCellClasses.body}`]: {},
  }));
  const DataRow = ({ row, handleEdit, handleDelete, rowIndex }) => (
    <TableRow
      key={row.id}
      sx={{
        "&:hover": {
          backgroundColor: alpha("#212529", 0.1),
          cursor: "pointer",
        },
      }}
    >
      <TableCell>{rowIndex + 1}</TableCell>
      <TableCell>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px", // for spacing between elements
          }}
        >
          <div onClick={() => handleEdit(row.id)} style={{ cursor: "pointer" }}>
            <ModeEditOutlineOutlinedIcon color="primary" />
          </div>

          <div
            onClick={() => handleDelete(row.id)}
            style={{ cursor: "pointer" }}
          >
            <DeleteOutlinedIcon color="error" />
          </div>

          <span>{row.id}</span>
        </div>
      </TableCell>
      <TableCell>{row.fullName}</TableCell>
      <TableCell>{row.object}</TableCell>
      <TableCell>{new Date(row.dateOfBirth).toLocaleDateString()}</TableCell>
      <TableCell>{row.gender}</TableCell>
      <TableCell>{row.province}</TableCell>
    </TableRow>
  );

  function renderTableBody(
    filteredData,
    page,
    rowsPerPage,
    handleEdit,
    handleDelete
  ) {
    const dataToDisplay =
      rowsPerPage > 0
        ? filteredData.slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
          )
        : filteredData;

    if (dataToDisplay.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={12} style={{ textAlign: "center" }}>
            <Typography variant="h6">No Declarations</Typography>
          </TableCell>
        </TableRow>
      );
    }

    return dataToDisplay.map((row, index) => (
      <DataRow
        row={row}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        rowIndex={page * rowsPerPage + index}
        key={index.toString()}
      />
    ));
  }

  return (
    <Box display="flex">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell>Form ID</StyledTableCell>
              <StyledTableCell>Full Name</StyledTableCell>
              <StyledTableCell>Object</StyledTableCell>
              <StyledTableCell>Date Of Birth</StyledTableCell>
              <StyledTableCell>Gender</StyledTableCell>
              <StyledTableCell>Contact Province</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {renderTableBody(
              filteredData,
              page,
              rowsPerPage,
              handleEdit,
              handleDelete
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[2, 4, 6]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Items/Page"
          ActionsComponent={TablePaginationActions} // This line uses the custom actions
        />
      </TableContainer>
    </Box>
  );
}
