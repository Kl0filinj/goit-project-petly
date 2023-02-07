import { useState } from 'react';
import { FilterInput } from 'shared/components';
import { ToastContainer, toast } from 'react-toastify'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { noticesOperations } from 'redux/notices';

const NoticesSearch = ({ searchFunction }) => {
  const [query, setQuery] = useState('');
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const pathnameArr = pathname.split('/');

  const handleChange = e => {
    setQuery(e.target.value.toLowerCase());
    searchFunction(e.target.value);
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (query.trim() === '') {
  //     toast('What pet do you need?');
  //     return;
  //   }
  //   searchFunction(query);
  // };
  const handleSubmit = evt => {
    evt.preventDefault();
    if (pathnameArr[2] === 'sell') {
      toast('What pet do you need?');
      dispatch(
        noticesOperations.getNoticesByCategory({ category: 'sell', query })
      );
    }
    if (pathnameArr[2] === 'lost-found') {
      toast('What pet do you need?');
      dispatch(
        noticesOperations.getNoticesByCategory({
          category: 'lost/found',
          query,
        })
      );
    }
    if (pathnameArr[2] === 'for-free') {
      toast('What pet do you need?');
      dispatch(
        noticesOperations.getNoticesByCategory({
          category: 'in_good_hands',
          query,
        })
      );
    }
   
  };

  const clearInput = () => {
    setQuery("");
    searchFunction("");
  };

  return (
    <>
    <FilterInput
      name={'search'}
      onChange={handleChange}
      handleSearch={handleSubmit}
      handleClear={clearInput}
      value={query}
      mb={'28px'}
    />
    <ToastContainer />
    </>
  );
};


export default NoticesSearch;
