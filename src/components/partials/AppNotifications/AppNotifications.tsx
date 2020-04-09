import React, { FunctionComponent } from 'react';
import { getNotifications } from 'store/notifications/selectors';
import { useSelector } from 'react-redux';
import Notifications from 'react-notification-system-redux';

const style = {
  Containers: {
    DefaultStyle: {
      right: '30px',
    },
  },
  NotificationItem: {
    DefaultStyle: {
      margin: '20px',
      padding: '20px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#2196f3',
      color: '#ffffff',
      fontSize: '14px',
    },
  },
  Dismiss: {
    DefaultStyle: {
      display: 'none',
    },
  },
  Title: {
    DefaultStyle: {
      fontWeight: 400,
      fontSize: '16px',
      margin: 0,
      color: '#ffffff',
    },
  },
};

export const AppNotifications: FunctionComponent = () => {
  const notifications = useSelector(getNotifications);

  return <Notifications notifications={notifications} style={style} />;
};

export default AppNotifications;
