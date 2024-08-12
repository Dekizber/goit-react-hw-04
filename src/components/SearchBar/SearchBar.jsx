import { Formik, Form, Field } from "formik";

const SearchBar = () => {
  return (
    <Formik>
      <Form>
        <Field
          type="text"
          name="query"
          autocomplete="off"
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
