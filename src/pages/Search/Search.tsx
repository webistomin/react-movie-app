import React, { FunctionComponent, useEffect } from 'react';

import AppContent from 'components/ui/AppContent';
import AppFooter from 'components/partials/AppFooter';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchContent } from 'store/search/selectors';
import AppCardList from 'components/ui/AppCardList';
import { toggleSearchBarVisibility } from 'store/search/actions';
import { b } from 'components/ui/AppContent/AppContent';

const Search: FunctionComponent = () => {
  const searchResult = useSelector(getSearchContent);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(toggleSearchBarVisibility(false));
    };
  });

  return (
    <>
      <AppContent className={b({ withPaddings: true })}>
        {searchResult?.results && <AppCardList title='Search Result' movies={searchResult.results} />}
      </AppContent>
      <AppFooter />
    </>
  );
};

export default Search;
