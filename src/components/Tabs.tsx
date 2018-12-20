import React from "react";
import { tabs } from "../constants";


interface IProps {
  activeTab: string;
  setActiveTab: (activeTab: string) => () => void;
}

const Tabs: React.SFC<IProps> = ({ activeTab, setActiveTab }) => {
  const isTabActive = (tab: string) => {
    if (activeTab === tab) {
      return "active";
    }

    return "";
  };

  return <div className="tabs">
    {tabs.map((tab) =>
      <div
        key={tab}
        className={`tab ${isTabActive(tab)}`}
        onClick={setActiveTab(tab)}
      >
        {tab.toUpperCase()}
      </div>)
    }
  </div>;
};

export default Tabs;
