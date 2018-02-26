import React from 'react';
import styles from './FsItem.css';

const FsItem = (props) => {
  const { onPress, borderTopWidth, borderBottomWidth, borderLeftWidth, borderRightWidth,
    borderColor, borderStyle, paddingHorizontal, paddingVertical, backgroundColor, src, srcStyle,
    srcClick,
  } = props;
  const paddingH = paddingHorizontal === undefined ? 10 : paddingHorizontal;
  const paddingV = paddingVertical === undefined ? 10 : paddingVertical;
  const backgroundC = backgroundColor === undefined ? '#fff' : backgroundColor;
  return (
    <div
      onClick={onPress || null}
      style={{
        borderTopWidth: `${borderTopWidth || 10}px`,
        borderBottomWidth: `${borderBottomWidth || 0}px`,
        borderLeftWidth: `${borderLeftWidth || 0}px`,
        borderRightWidth: `${borderRightWidth || 0}px`,
        borderColor: borderColor || '#F2F2F3',
        borderStyle: borderStyle || 'solid',
        paddingTop: paddingV,
        paddingBottom: paddingV,
        paddingLeft: paddingH,
        paddingRight: paddingH,
        backgroundColor: backgroundC,
      }}
    >
      <div className={styles.rowJustifyLeftCenter} >
        <div className={styles.flex1}>{props.children}</div>
        {onPress ? <div>
          <img onClick={srcClick || null} style={srcStyle || { height: 15, width: 15 }} src={src || require('./image/right.png')} alt="" />
        </div> : null}
      </div>
    </div>
  );
};
export default FsItem;
