import React from 'react';
import { tabs } from '../constants';
import { getNews } from '../requests';
import Tabs from './Tabs';
import NewsList from './NewsList';


interface Item {
  "source": {
    "id": null | string,
    "name": null | string
  },
  "author": null | string,
  "title": null | string,
  "description": null | string,
  "url": null | string,
  "urlToImage": null | string,
  "publishedAt": null | string,
  "content": null | string;
}

interface State {
  data: Item[];
  activeTab: string;
}

class News extends React.Component<{}, State, {}> {
  state = {
    data: [],
    activeTab: tabs[0]
  }

  componentDidMount(): void {
    this.setActiveTab(tabs[0])();
  }

  setActiveTab = (activeTab: string) => () => {
    getNews(activeTab)
      .then(data => this.setState({ data: data.articles, activeTab }));
  }

  render(): JSX.Element {
    const { data, activeTab } = this.state;

    return <>
      <Tabs
        activeTab={ activeTab }
        setActiveTab={ this.setActiveTab }
      />
      <NewsList data={ data } />
    </>
  }
}

export default News;