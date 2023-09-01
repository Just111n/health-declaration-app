import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TablePagination,
  Box,
} from "@mui/material";
import { COVID_FORM_KEY } from "../../../config/constant";
import mock from "../../../data/mock.json";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { useNavigate } from "react-router-dom";

export default function DataTable() {
  const [data, setData] = useState(mock);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);
  const navigate = useNavigate();

  // Fetch data from local storage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem(COVID_FORM_KEY);
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    // Update local storage whenever the data changes
    localStorage.setItem(COVID_FORM_KEY, JSON.stringify(data));
  }, [data]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEdit = (id) => {
    navigate(`/form/${id}`);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <TableContainer component={Paper} style={{ width: "80%" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>

              <TableCell>Form ID</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Object</TableCell>
              <TableCell>Date Of Birth</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Contact Province</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).length > 0 ? (
              (rowsPerPage > 0
                ? data.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : data
              ).map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                  <TableCell>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px", // for spacing between elements
                      }}
                    >
                      <div
                        onClick={() => handleEdit(row.id)}
                        style={{ cursor: "pointer" }}
                      >
                        <ModeEditOutlineOutlinedIcon />
                      </div>

                      <div
                        onClick={() => handleDelete(row.id)}
                        style={{ cursor: "pointer" }}
                      >
                        <DeleteOutlinedIcon />
                      </div>

                      <span>{row.id}</span>
                    </div>
                  </TableCell>

                  <TableCell>{row.fullName}</TableCell>
                  <TableCell>{row.object}</TableCell>
                  <TableCell>
                    {new Date(row.dateOfBirth).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell>{row.province}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} style={{ textAlign: "center" }}>
                  No declarations
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[2, 4, 6]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
}
