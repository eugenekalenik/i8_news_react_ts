import React from "react";
import { tabs } from "../constants";
import { getNews } from "../requests";
import NewsList from "./NewsList";
import Tabs from "./Tabs";


interface Item {
  "source": {
    "id": null | string,
    "name": null | string,
  };
  "author": null | string;
  "title": null | string;
  "description": null | string;
  "url": null | string;
  "urlToImage": null | string;
  "publishedAt": null | string;
  "content": null | string;
}

interface IState {
  activeTab: string;
  data: Item[];
}

class News extends React.Component<{}, IState, {}> {
  public state = {
    activeTab: tabs[0],
    data: [],
  };

  public componentDidMount(): void {
    this.setActiveTab(tabs[0])();
  }

  public setActiveTab = (activeTab: string) => () => {
    getNews(activeTab)
      .then((data) => this.setState({ data: data.articles, activeTab }));
  }

  public render(): JSX.Element {
    const { data, activeTab } = this.state;

    return <>
      <Tabs
        activeTab={ activeTab }
        setActiveTab={ this.setActiveTab }
      />
      <NewsList data={ data } />
    </>;
  }
}

export default News;
