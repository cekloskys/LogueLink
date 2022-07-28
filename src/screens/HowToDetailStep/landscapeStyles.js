import {StyleSheet} from 'react-native';

const landscapeStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  modalImage: {
    alignSelf: 'center',
    height: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'contain',
  },
});

export default landscapeStyles;
