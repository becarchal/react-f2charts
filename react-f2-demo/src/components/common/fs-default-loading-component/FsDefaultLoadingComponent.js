import React, { Component } from 'react';
import { Row, Col } from 'antd';
// import QueueAnim from 'rc-queue-anim';
import styles from './FsDefaultLoadingComponent.less';

export default class FsDefaultLoadingComponent extends Component {
  sectionRender = num => {
    return Array.from(new Array(num)).map((item, index) => [
      <Row
        type="flex"
        align="middle"
        justify="center"
        gutter={12}
        key={`${index}1`}
        className={styles.queue_anim_div}
      >
        <Col span={12}>
          <div className={styles.queue_anim_cell} />
        </Col>
        <Col span={12}>
          <div className={styles.queue_anim_cell} />
        </Col>
      </Row>,
      <Row
        type="flex"
        align="middle"
        justify="center"
        gutter={12}
        key={`${index}2`}
        className={styles.queue_anim_div}
      >
        <Col span={2}>
          <div className={styles.queue_anim_cell} />
        </Col>
        <Col span={22}>
          <div className={styles.queue_anim_cell} />
        </Col>
      </Row>,
      <Row
        type="flex"
        align="middle"
        justify="center"
        gutter={12}
        key={`${index}3`}
        className={styles.queue_anim_div}
      >
        <Col span={6}>
          <div className={styles.queue_anim_cell} />
        </Col>
        <Col span={6}>
          <div className={styles.queue_anim_cell} />
        </Col>
        <Col span={6}>
          <div className={styles.queue_anim_cell} />
        </Col>
        <Col span={6}>
          <div className={styles.queue_anim_cell} />
        </Col>
      </Row>
    ]);
  };
  render() {
    // return (
    //   <div className={styles.container}>
    //       {this.sectionRender(20)}
    //   </div>
    // );
    // return (
    //   <div className={styles.container}>
    //     <QueueAnim className={styles.queue_anim}
    //       animConfig={[
    //         { opacity: [1, 0], translateY: [0, 50] },
    //         { opacity: [1, 0], translateY: [0, -50] }
    //       ]}
    //     >
    //       {this.sectionRender(20)}
    //     </QueueAnim>
    //   </div>
    // );
    return <div className={styles.container} />;
  }
}
