import styles from "./SearchForm.module.scss";
import TextInput from "../TextInput/TextInput.js";
import Button from "../Button/Button.js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSearchString } from "../../redux/store";

const SearchForm = () => {
  const [string, setString] = useState("");
  const dispatch = useDispatch();

  const handleSearch = e => {
    e.preventDefault();
    dispatch(addSearchString(string));
  };

  return (
    <form className={styles.searchForm}>
      <TextInput
        placeholder='Search...'
        onChange={e => setString(e.target.value)}
      />
      <Button onClick={handleSearch}>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
