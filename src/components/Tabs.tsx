import React from 'react';
import { tabs } from '../constants';


interface Props {
  activeTab: string;
  setActiveTab: (activeTab: string) => () => void;
}

const Tabs: React.SFC<Props> = ({ activeTab, setActiveTab }) => {
  const isTabActive = (tab: string) => {
    if (activeTab === tab) {
      return 'active';
    }

    return '';
  }

  return <div className="tabs">
    { tabs.map(tab =>
      <div
        key={ tab }
        className={ `tab ${isTabActive(tab)}` }
        onClick={ setActiveTab(tab) }
      >
        { tab.toUpperCase() }
      </div>
    ) }
  </div>
}

export default Tabs;