import * as React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export default function AboutTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <div className='main_div'>
    <div className='aboutMe_heading' >
    <h1>About Me</h1>
   
    <Tabs>
    <TabList>
      <Tab>Who I Am</Tab>
      <Tab>My Vision</Tab>
      <Tab>My History</Tab>
    </TabList>

    <TabPanel>
      <p>I am Sachin Gupta, an experienced finance professional with 17 years of expertise in Stock Market. With an MBA in finance , I have honed my skills in various financial roles, making impactful contributions and driving success for both investors and organizations. I specialize in investment management, risk assessment, and portfolio optimization. My analytical skills enable me to interpret market trends and provide valuable insights. I am known for my expertise in market timing, identifying optimal entry and exit points in the market.</p>
    </TabPanel>
    <TabPanel>
      <p>I am Sachin Gupta, an experienced finance professional with 17 years of expertise in Stock Market. With an MBA in finance , I have honed my skills in various financial roles, making impactful contributions and driving success for both investors and organizations. I specialize in investment management, risk assessment, and portfolio optimization. My analytical skills enable me to interpret market trends and provide valuable insights. I am known for my expertise in market timing, identifying optimal entry and exit points in the market.</p>
    </TabPanel>
    <TabPanel>
      <p>I am Sachin Gupta, an experienced finance professional with 17 years of expertise in Stock Market. With an MBA in finance , I have honed my skills in various financial roles, making impactful contributions and driving success for both investors and organizations. I specialize in investment management, risk assessment, and portfolio optimization. My analytical skills enable me to interpret market trends and provide valuable insights. I am known for my expertise in market timing, identifying optimal entry and exit points in the market.</p>
    </TabPanel>
  </Tabs>
    </div>
    </div>
    </>
  );
}