import React, { FC } from 'react';
import { Button, Tabs } from 'antd';
import Line from './component/Line';
import Column from './component/Column';
import Pie from './component/Pie';
import './App.css';

const { TabPane } = Tabs;

function handleTabs(key: any) {
  console.log(key);
}

const App: FC = () => (
  <div className="App">
    <Tabs defaultActiveKey="1" onChange={handleTabs}>
      <TabPane tab="line" key="1">
        <Line></Line>
      </TabPane>
      <TabPane tab="Column" key="2">
        <Column></Column>
      </TabPane>
      <TabPane tab="Pie" key="3">
        <Pie></Pie>
      </TabPane>
    </Tabs>
    <Button type="primary">Button</Button>
  </div>
);

export default App;
