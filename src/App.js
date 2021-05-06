import './App.css'

import {
  MoreMenu,
  Panel,
  PanelHeader,
  PanelHeaderActions,
  PanelListItem,
  PanelListItemAdd,
  PanelListItemInset,
  PanelListItemMenu,
  TogglePanelButtons,
  TogglePanelContent,
  TogglePanel,
  PanelListScrollable,
  Checkbox,
  ToggleSwitch,
  NavigationTabs,
  NavigationTabsList,
  NavigationTabsPanel,
  NavigationTabsPanels,
  NavigationTab,
  Tabs,
  Tab,
  TabPanel,
  TabsList,
  Avatar,
  AvatarIcon,
  AvatarImage,
  AvatarInitials,
  AvatarLabel,
  Alert,
  LabelTitle,
  LabelDescription,
} from '@fuze/react-fuzzy'
// import { DropdownItem } from 'reactstrap'

function App() {
  return (
    <>
      {/* <NavigationTabs>
        <NavigationTabsList align="left">
          <NavigationTab to="/home">Home</NavigationTab>
          <NavigationTab to="/tests">tests</NavigationTab>
          <NavigationTab to="/devices">devices</NavigationTab>
        </NavigationTabsList>
        <NavigationTabsPanels>
          <NavigationTabsPanel path="/home">d
            <TabPanel>Home Content</TabPanel>
          </NavigationTabsPanel>

          <NavigationTabsPanel exact path="/tests">
            <TabPanel>tests Content</TabPanel>
          </NavigationTabsPanel>
          <NavigationTabsPanel exact path="/devices">
            <TabPanel>devices Content</TabPanel>
          </NavigationTabsPanel>
        </NavigationTabsPanels>
      </NavigationTabs>
      */}
      {/* <Tabs>
        <TabsList ariaLabel="Tabs List" align="left">
          <Tab id="1">Tab 1</Tab>
          <Tab id="2">Tab 2</Tab>
        </TabsList>
        <TabPanel id="1">Tab Content 1</TabPanel>
        <TabPanel id="2">Tab Content 2</TabPanel>
      </Tabs> */}
      {/* 
      <Avatar size="small">
        <AvatarIcon>
          <i className="icon">i</i>
        </AvatarIcon>
        <AvatarImage backgroundImage="https://pbs.twimg.com/profile_images/626369708430897152/JBxbodhe_400x400.jpg" />
        <AvatarInitials>A</AvatarInitials>
        <AvatarLabel>Avatar Label</AvatarLabel>
      </Avatar>

      <Avatar>
        <AvatarIcon>
          <i className="icon">i</i>
        </AvatarIcon>
        <AvatarImage backgroundImage="https://pbs.twimg.com/profile_images/626369708430897152/JBxbodhe_400x400.jpg" />
        <AvatarInitials>A</AvatarInitials>
        <AvatarLabel>Avatar Label</AvatarLabel>
      </Avatar>

      <Avatar size="large">
        <AvatarIcon>
          <i className="icon">i</i>
        </AvatarIcon>
        <AvatarImage backgroundImage="https://pbs.twimg.com/profile_images/626369708430897152/JBxbodhe_400x400.jpg" />
        <AvatarInitials>A</AvatarInitials>
        <AvatarLabel>Avatar Label</AvatarLabel>
      </Avatar> */}
      <Checkbox id="test">
        <LabelTitle>Label Title</LabelTitle>
        <LabelDescription>Description text</LabelDescription>
      </Checkbox>
    </>
  )
}

export default App
