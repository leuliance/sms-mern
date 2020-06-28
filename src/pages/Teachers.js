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

import { useFormik } from "formik";

import React from "react";

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

  const { handleBlur, handleChange, handleSubmit } = formik;
  return (
    <div className={classes.root}>
      <Card>
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
  );
};

export default Teachers;
