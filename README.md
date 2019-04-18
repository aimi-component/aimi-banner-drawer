## Aimi-Banner-Drawer
A Easy React Banner Component

## Install

```
npm i aimi-banner-drawer
```
or
```
yarn add aimi-banner-drawer
```


## Usage

```
import React from 'react';
import ReactDOM from 'react-dom';

import Bannerdrawer,{BannerPanel} from 'aimi-banner-drawer';
import 'aimi-banner-drawer/dist/aimibannerdrawer.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[{ icon: 'http://game.gtimg.cn/images/user/2017/a20170928newNetbar/demo/component.png', title: 'Monster Hunter World', link: '/ui', img: 'http://game.gtimg.cn/images/user/2017/a20170928newNetbar/demo/scroll-1.jpg',render:(<div>fkfkfkfk</div>)},
            { icon: 'http://game.gtimg.cn/images/user/2017/a20170928newNetbar/demo/templates.png', title: 'The Legend Of Zelda', link: '/template', img: 'http://game.gtimg.cn/images/user/2017/a20170928newNetbar/demo/scroll-2.png'},
            { icon: 'http://game.gtimg.cn/images/user/2017/a20170928newNetbar/demo/tool.png', title: 'Xenoblade 2', link: '/tool', img: 'http://game.gtimg.cn/images/user/2017/a20170928newNetbar/demo/scroll-3.jpg'},
            { icon: 'http://game.gtimg.cn/images/user/2017/a20170928newNetbar/demo/bem.png', title: 'Persona 5', link: '/bem', img: 'http://game.gtimg.cn/images/user/2017/a20170928newNetbar/demo/scroll-4.jpg'}]
        }
    }
    render(){
        return(
            <div>
                <div className="demo-container">
                    <p className="demo-title">Aimi Banner Drawer Component</p>
                    <div className="demo-btn-panel">
                        <Bannerdrawer>
                            {this.state.data.map((item,index) => {
                                return (
                                    <BannerPanel img={item.img} key={index}>
                                        <p className="demo-panel-title" style={{color: '#fff',padding:'5px 10px'}}>{item.title}</p>
                                    </BannerPanel>
                                )
                            })}
                        </Bannerdrawer>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

```

