import { useFormik } from 'formik';

export const SearchForm = ({ submit }) => {
  const formik = useFormik({
    initialValues: {
      searchMoviesInput: '',
    },
    onSubmit: values => {
      submit(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="searchMoviesInput"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.searchMoviesInput}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
