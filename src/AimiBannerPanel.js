import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class BannerPanel extends Component {
    static propTypes = {
      className: PropTypes.string,
      data: PropTypes.array,
      width: PropTypes.number,
      height: PropTypes.number,
      img:PropTypes.string,
      onMouseEnter:PropTypes.func
    }
  
    static defaultProps = {
      className: "",
      img:""
    }
  
    constructor(props) {
      super(props);
      this.state = {
        data: this.props.data,
        
      };
    }
  
    handleMouseEnter = (index) => {
      const bannerList = this.props.data;
      for (let i = 0; i < bannerList.length; i++) {
        bannerList[i].active = (index == i)
      }
      this.setState({
        bannerList
      });
    }
  
    render() {
      let Props = this.props;
      return (
              <div 
                onMouseEnter={this.props.onMouseEnter}
                className={classNames('aimi-drawer--panel', this.props.className)}>
                <div className='aimi-drawer--mask'></div>
                <div className='aimi-drawer--panel-content'>
                    {this.props.children}
                </div>
                <div className="aimi-drawer--img" style={{ 'background': `url(${this.props.img}) center center` }}></div>
              </div>

      )
    }
  }
  
  export default BannerPanel;
  