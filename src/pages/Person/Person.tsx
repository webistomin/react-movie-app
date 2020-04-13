import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AppContent from 'components/ui/AppContent';
import AppFooter from 'components/partials/AppFooter';
import { clearPersonDetails, fetchPersonDetailsStart } from 'store/person/actions';
import AppDetails from 'components/ui/AppDetails/AppDetails';
import { getPersonDetails } from 'store/person/selectors';

import { b } from 'components/ui/AppContent/AppContent';
import { b as bCarousel } from 'components/ui/AppCarousel/AppCarousel';
import { parsePersonDetails } from 'components/ui/AppDetails/parsePersonDetails';
import AppCarousel from 'components/ui/AppCarousel';

interface IRouteParams {
  id: string;
}

export const Person: FunctionComponent = () => {
  const dispatch = useDispatch();
  const params = useParams<IRouteParams>();
  const personDetails = useSelector(getPersonDetails);

  useEffect(() => {
    dispatch(fetchPersonDetailsStart(Number(params.id)));

    return () => {
      dispatch(clearPersonDetails());
    };
  }, [dispatch, params]);

  useEffect(() => {
    document.title = `${personDetails?.name || 'Person page'}`;
  }, [personDetails]);

  const parsedDetails = parsePersonDetails(personDetails);

  return (
    <>
      <AppContent className={b({ withPaddings: true })}>
        {personDetails && (
          <AppDetails title={personDetails.name} poster={personDetails.profile_path} details={parsedDetails} />
        )}
        {personDetails?.movie_credits?.cast ? (
          <AppCarousel
            className={bCarousel({ noPaddings: true })}
            title='Known for'
            cast={personDetails?.movie_credits?.cast}
          />
        ) : null}
      </AppContent>
      <AppFooter />
    </>
  );
};

export default Person;
