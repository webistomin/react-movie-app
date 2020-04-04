import React, { FunctionComponent, ReactNode, useState } from 'react';
import { cn } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

import './AppTabs.sass';

export interface ITab {
  title: string;
  id: string;
  component: ReactNode;
}

interface IProps {
  className?: string;
  tabs: ITab[];
}

const b = cn('Tabs');

export const AppTabs: FunctionComponent<IProps> = ({ className, tabs }) => {
  const [currentTab, setTab] = useState(tabs[0].id);

  return (
    <div className={classnames(b(), className)}>
      <div className={classnames(b('Heading'))}>
        <ul className={classnames(b('List'))}>
          {tabs.map((tab) => {
            const isActive = currentTab === tab.id;
            return (
              <li className={classnames(b('ListItem'))} key={tab.id}>
                <button type='button' className={classnames(b('TabBtn', { isActive }))} onClick={() => setTab(tab.id)}>
                  {tab.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classnames(b('Content'))}>
        {tabs.map((tab) => {
          const isVisible = currentTab === tab.id;
          return isVisible ? (
            <div className={classnames(b('Tab', { isVisible }))} key={tab.id}>
              {tab.component}
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default AppTabs;
