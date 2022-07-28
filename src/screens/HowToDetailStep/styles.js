import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  modalImage: {
    alignSelf: 'center',
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'contain',
  },
});

export default styles;
