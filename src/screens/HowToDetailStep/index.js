import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import landscapeStyles from './landscapeStyles';
import {useRoute} from '@react-navigation/native';
import places from '../../../assets/data/searchfeed';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import OrientationView from 'rn-orientation-view';

const HowToDetailStep = props => {
  const route = useRoute();
  const post = places.find(place => place.id === route.params.postId);

  return (
    <OrientationView
      style={styles.modalContainer}
      landscapeStyles={landscapeStyles.modalImage}>
      <ReactNativeZoomableView
        maxZoom={1.5}
        minZoom={1.0}
        zoomStep={0.5}
        initialZoom={1.0}
        bindToBorders={true}
        captureEvent={true}>
        <Image
          source={post.image}
          style={styles.modalImage}
          landscapeStyles={landscapeStyles.modalImage}
        />
      </ReactNativeZoomableView>
    </OrientationView>
  );
};

export default HowToDetailStep;
