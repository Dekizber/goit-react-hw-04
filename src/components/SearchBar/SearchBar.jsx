import s from "./SearchBar.module.css";
import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ handleChangeQuery }) => {
  const handleSubmit = (values) => {
    if (values.query === "") {
      toast.error("Please, enter the query!");
    }
    handleChangeQuery(values.query);
  };
  return (
    <>
      <Formik onSubmit={handleSubmit} initialValues={{ query: "" }}>
        <Form className={s.formContainer}>
          <Field
            className={s.field}
            type="text"
            name="query"
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      <Toaster position="top-left" reverseOrder={false} />
    </>
  );
};
export default SearchBar;
