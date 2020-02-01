import React from 'react';
import AppIntro from '@/components/ui/AppIntro';
import AppCarousel from '@/components/ui/AppCarousel';
import AppContent from '@/components/ui/AppContent';
import AppFooter from '@/components/partials/AppFooter';

export default class Home extends React.Component {
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
