import React from 'react';
import './styles/index.scss'
import Button, {ButtonSize, ButtonType} from "./components/Button/button";
import Alert from './components/Alert';
import Menu from "./components/Menu";
import MenuItem from "./components/Menu/MenuItem";
import SubMenu from "./components/Menu/SubMenu";
import Tab from "./components/Tab/Tab";
import TabItem from "./components/Tab/TabItem";
import Icon from "./components/Icon/icon";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fas)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Helo Components</h1>
        <hr/>
        <h2>Button</h2>
        <Button btnType={ButtonType.Primary}>Primary</Button>
        <Button btnType={ButtonType.Default}>Default</Button>
        <Button btnType={ButtonType.Danger}>Danger</Button>
        <Button btnType={ButtonType.Warning}>Waring</Button>
        <Button btnType={ButtonType.Link} href={"https://www.baidu.com"}>Link</Button>
        <Button disabled>Disabled</Button>
        <br/>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Middle}>Primary-Md</Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Middle}>Default-Md</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Middle}>Danger-Md</Button>
        <Button btnType={ButtonType.Warning} size={ButtonSize.Middle}>Danger-Md</Button>
        <Button btnType={ButtonType.Link} href={"https://www.baidu.com"}>Link-Md</Button>
        <Button disabled size={ButtonSize.Middle}>Disabled</Button>
        <br/>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Primary-Large</Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Large}>Default-Large</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>Danger-Large</Button>
        <Button btnType={ButtonType.Warning} size={ButtonSize.Large}>Waring-Large</Button>
        <Button btnType={ButtonType.Link} href={"https://www.baidu.com"} size={ButtonSize.Large}>Link-Large</Button>
        <h2>Alert</h2>
        <Alert title={'hello~'} type={'warning'} closable />
        <Alert title={'this is info Alert~'} description={"description"} type={'primary'} closable onClose={(e)=>{alert("你关闭了一个Alert");console.log(e)}} />
        <Alert title={'hello~'} type={'error'} closable />
        <Alert title={'hello~'} type={'success'} closable={false}/>
        <h2>Menu</h2>
        <h4>horizontal Menu</h4>
        <div style={{
          margin:"15px"
        }}>
          <Menu defaultIndex={"0"} onSelect={(index)=>{alert(index)}}>
            {
              [1,2,3].map((val)=>{
                return (
                    <MenuItem>
                      Item {val}
                    </MenuItem>)
              })
            }
          </Menu>
        </div>
        <h4>vertical Menu</h4>
        <div style={{margin:"15px"}}>
          <Menu onSelect={(index)=>{alert(index)}} mode={'vertical'}>
            {
              [0,1,2].map((val)=>{
                return (
                    <MenuItem>
                      Item {val}
                    </MenuItem>)
              })
            }
          </Menu>
        </div>
        <h4>Horizontal Menu With SubMenu</h4>
        <div style={{margin:"15px",marginBottom:"100px"}}>
          <Menu defaultIndex={"0"}>
            <MenuItem>首页</MenuItem>
            <SubMenu title={"下拉菜单"}>
              <MenuItem>关于我们</MenuItem>
              <MenuItem>下拉B</MenuItem>
            </SubMenu>
          </Menu>
        </div>
        <h4>Vertical Menu With SubMenu</h4>
        <div style={{margin:"15px"}}>
          <Menu defaultIndex={"0"} mode={'vertical'} onSelect={(index)=>{console.log(index)}}>
            <MenuItem>首页</MenuItem>
            <SubMenu title={"下拉菜单"}>
              <MenuItem>关于我们</MenuItem>
              <MenuItem>下拉B</MenuItem>
            </SubMenu>
          </Menu>
        </div>
        <h4>Tab with line style</h4>
        <div style={{margin:"15px"}}>
          <Tab type={"line"} onSelect={index => {console.log(index)}}>
            <TabItem label={"Hello"}>
              Hello
            </TabItem>
            <TabItem label={"World"}>
              World
            </TabItem>
            <TabItem label={"deprecated"} disabled>
              deprecated
            </TabItem>
          </Tab>
        </div>
        <h4>Tab with card style</h4>
        <div style={{margin:"15px"}}>
          <Tab type={"card"} onSelect={index => {console.log(index)}}>
            <TabItem label={"Hello"}>
              Hello
            </TabItem>
            <TabItem label={"World"}>
              World
            </TabItem>
            <TabItem label={"deprecated"} disabled>
              deprecated
            </TabItem>
          </Tab>
        </div>
        <h4>Icon</h4>
        <Icon icon={"coffee"} theme={"dark"}/>
        <Icon icon={"coffee"} theme={"secondary"}/>
        <Icon icon={"coffee"} theme={"dark"} size={"2x"}/>
        <Icon icon={"coffee"} theme={"dark"} size={"5x"}/>
        <Icon icon={"coffee"} theme={"primary"} size={"5x"}/>
        <h1>Halo</h1>
        <h2>Halo</h2>
        <h3>Halo</h3>
        <hr/>
        <code>
          const a = b;
        </code>

      </header>
    </div>
  );
}

export default App;
