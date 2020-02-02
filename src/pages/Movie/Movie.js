import React from 'react';
import AppIntro from '@/components/ui/AppIntro';
import AppContent from '@/components/ui/AppContent';
import AppCarousel from '@/components/ui/AppCarousel';
import AppFooter from '@/components/partials/AppFooter';

export default class Movie extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppContent>
          <AppIntro />
          <AppCarousel />
          <AppCarousel />
        </AppContent>
        <AppFooter />
      </React.Fragment>
    );
  }
}
