import styles from "./SearchForm.module.scss";
import TextInput from "../TextInput/TextInput.js";
import Button from "../Button/Button.js";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addSearchString, clearSearchString } from "../../redux/searchStringReducer";

const SearchForm = () => {
  const [string, setString] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(addSearchString(string));
  };

  useEffect(() => {
    dispatch(clearSearchString(""));
  }, [dispatch]);

  return (
    <form className={styles.searchForm}>
      <TextInput
        placeholder='Search...'
        onChange={(e) => setString(e.target.value)}
      />
      <Button onClick={handleSearch}>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
