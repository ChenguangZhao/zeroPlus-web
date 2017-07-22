import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static propTypes = {
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'content7',
  };

  getBlockChildren = (item, i) =>(
    <li key={i} id={`${this.props.id}-block${i}`}>
      <div className="icon">
        <img src={item.icon} width="100%" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
    </li>);

  render() {
    const props = { ...this.props };
    delete props.isMode;
    const dataSource = [
      { icon: 'http://fyonamao.com/aau/wnm601/14/img/location-logo.png', title: 'OUR LOCATIONS\n\n', content: 'Our first store was oped in 2012\nat Seattle,  which is growing fast.\nRight now we just have our second\nstore grandly opened at\nCalifornia. Come to visite us!\n\n' },
      { icon: 'http://fyonamao.com/aau/wnm601/14/img/catering-logo.png', title: 'CATERING', content: 'Feeling eventful? Let us pop in\nto your party with our special\npops! We will provides fun and\nunique catering experiences for\nall occasions big and small.\n\n' },
      { icon: 'http://fyonamao.com/aau/wnm601/14/img/business-logo.png', title: 'CATERING\n\n', content: 'Popbar is one of the healthiest\nand fastest growing concepts in\nthe frozen dessert category.\nContact us today to learn more\nabout the franchising program.\n\n' },
    ];
    const listChildren = dataSource.map(this.getBlockChildren);
    return (
      <div
        {...props}
        className={`content-template-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="h1"
            key="h1"
            reverseDelay={300}
            id={`${props.id}-title`}
          >
            Products And Services
          </TweenOne>
          <QueueAnim
            component="ul" type="bottom" key="block" leaveReverse
            id={`${props.id}-contentWrapper`}
          >
            {listChildren}
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}

export default Content;
