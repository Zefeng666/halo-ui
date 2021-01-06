import React from 'react';
import './styles/index.scss'
import Button, {ButtonSize, ButtonType} from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>Halo</Button>
        <Button btnType={ButtonType.Primary}>Primary</Button>
        <Button btnType={ButtonType.Default}>Default</Button>
        <Button btnType={ButtonType.Danger}>Danger</Button>
        <Button btnType={ButtonType.Link} href={"https://www.baidu.com"}>Link</Button>
        <Button disabled>Disabled</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Primary-Large</Button>
        <Button btnType={ButtonType.Default} size={ButtonSize.Large}>Default-Large</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>Danger-Large</Button>
        <Button btnType={ButtonType.Link} size={ButtonSize.Large}>Link-Large</Button>
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
