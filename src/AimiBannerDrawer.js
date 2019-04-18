import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import BannerPanel from './AimiBannerPanel'
import './AimiBannerDrawer.scss';

class Bannerdrawer extends Component {
  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.array,
    width: PropTypes.number,
    height: PropTypes.number
  }

  static defaultProps = {
    className: "",
    data: [{ icon: 'http://game.gtimg.cn/images/user/2017/a20170928newNetbar/demo/component.png', title: 'Monster Hunter World', link: '/ui', img: 'http://game.gtimg.cn/images/user/2017/a20170928newNetbar/demo/scroll-1.jpg',render:(<div>fkfkfkfk</div>)},
    { icon: 'http://game.gtimg.cn/images/user/2017/a20170928newNetbar/demo/templates.png', title: 'The Legend Of Zelda', link: '/template', img: 'http://game.gtimg.cn/images/user/2017/a20170928newNetbar/demo/scroll-2.png'},
    { icon: 'http://game.gtimg.cn/images/user/2017/a20170928newNetbar/demo/tool.png', title: 'Xenoblade 2', link: '/tool', img: 'http://game.gtimg.cn/images/user/2017/a20170928newNetbar/demo/scroll-3.jpg'},
    { icon: 'http://game.gtimg.cn/images/user/2017/a20170928newNetbar/demo/bem.png', title: 'Persona 5', link: '/bem', img: 'http://game.gtimg.cn/images/user/2017/a20170928newNetbar/demo/scroll-4.jpg'}]
  }

  constructor(props) {
    super(props);
    let activeArray;
    activeArray = this.props.data.map((item,index) => {
      return (
        {active:(index == 0)}
      )
    })
    this.state = {
      data: this.props.data,
      activeIndex:0,
      activeArray:activeArray
    };
  }

  handleMouseEnter = (index) => {
    const bannerList = this.state.activeArray;
    for (let i = 0; i < bannerList.length; i++) {
      bannerList[i].active = (index === i)
    }
    this.setState({
      bannerList
    });
  }

  render() {
    let Props = this.props;
    let Children = this.props.children.map((object,index) => {
        let classActive = classNames({'aimi-drawer--active':this.state.activeArray[index].active})
        return React.cloneElement(object,{key:`draw-${index}`,className:classActive,onMouseEnter:() => this.handleMouseEnter(index)})
    }) 
    return (
      <div className={`aimi-drawer aimi-drawer--fuild aimi-drawer--flex ${this.props.className}`}>
        {Children}
      </div>
    )
  }
}

export default Bannerdrawer;
