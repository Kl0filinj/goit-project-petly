import { useState} from 'react';
import { FormControl, FormLabel, Button, IconButton, Input } from '@chakra-ui/react'
// import { Search, SearchForm, FormButton, FormInput } from "components/NoticesSearch/NoticesSearch"
import PropTypes from "prop-types"
import { CloseIcon } from '@chakra-ui/icon'

import SearchIcon from ""
const NoticesSearch = (onSubmit) => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase());
    setFilteredData(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(query.trim() === "") {
      alert("What pet do you need?");
      return;
    }
    onSubmit(query);
  }

  const clearInput = () => {
    setFilteredData("");
  }
  console.log(filteredData);
  return (
    <FormControl>
      <FormLabel onSubmit={handleSubmit}>
        <Input
      type="text"
      name="input"
      autocomplete="off"
      placeholder="Search"
      onChange={handleChange}
      value={filteredData}
      />
        <Button type="submit">
{filteredData.length === 0 ?
  <IconButton aria-label='Search database' icon={<SearchIcon />} /> : <CloseIcon onClick={clearInput} />
}
        </Button>
      </FormLabel>
    </FormControl>
  )
}
NoticesSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default NoticesSearch;