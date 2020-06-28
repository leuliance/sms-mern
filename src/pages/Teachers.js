import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import {
  TextField,
  Box,
  FormGroup,
  Button,
  Card,
  CardContent,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { useFormik } from "formik";

import React from "react";

import DummyData from "../DummyData/Dummy";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex-row",
    flexWrap: "wrap",
    alignItems: "center",
    "& > *": {
      padding: theme.spacing(1),
      width: "40%",
      height: "100%",
    },
  },
}));
const initialValues = {
  fullName: "",
  username: "",
  gradeLevel: "",
  subject: "",
  password: "",
  confirmPassword: "",
};

const Teachers = (props) => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const MyForm = ({ name, label, onBlur, touched }) => {
    return (
      <Box marginBottom={2}>
        <FormGroup>
          <TextField
            // onBlur={onBlur}
            // touched={touched}
            name={name}
            variant="outlined"
            label={label}
            size="small"
          />
        </FormGroup>
      </Box>
    );
  };

  const { handleBlur, handleSubmit } = formik;
  return (
    <div className="row h-100" style={{ backgroundColor: "#f3f3f3" }}>
      <div className="col w-auto">
        <Card className="w-75">
          <CardContent>
            <form onSubmit={handleSubmit}>
              <MyForm
                name="fullName"
                label="Full Name"
                onBlur={handleBlur}
                touched={formik.touched.fullName}
              />
              <MyForm
                name="username"
                label="Username"
                onBlur={handleBlur}
                touched={formik.touched.username}
              />
              <MyForm
                name="gradeLevel"
                label="Grade Level"
                onBlur={handleBlur}
                touched={formik.touched.gradeLevel}
              />
              <MyForm
                name="subject"
                label="Subject"
                onBlur={handleBlur}
                touched={formik.touched.subject}
              />
              <MyForm
                name="password"
                label="Password"
                onBlur={handleBlur}
                touched={formik.touched.password}
              />
              <MyForm
                name="confirmPassword"
                label="Confirm Password"
                onBlur={handleBlur}
                touched={formik.touched.confirmPassword}
              />
              <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<SaveIcon />}
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="col w-auto">
        <table className="table table-bordered ">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">fullName</th>
              <th scope="col">username</th>
              <th scope="col">grade</th>
              <th scope="col">subject</th>
            </tr>
          </thead>
          <tbody>
            {DummyData.map((data, index) => {
              const { fullName, username, gradeLevel, subject } = data;
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{fullName}</td>
                  <td>{username}</td>
                  <td>{gradeLevel}</td>
                  <td>{subject}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination count={15} variant="outlined" shape="rounded" />
      </div>
    </div>
  );
};

export default Teachers;
