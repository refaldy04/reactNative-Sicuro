import {StyleSheet, Dimensions} from 'react-native';

import {PRIMARY_COLOR, SECONDARY_COLOR, THIRD_COLOR} from './constant';

const styles = StyleSheet.create({
  wrapper: {
    height: Dimensions.get('screen').height - 70,
    backgroundColor: SECONDARY_COLOR,
  },
  header: {
    height: Dimensions.get('screen').width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: SECONDARY_COLOR,
  },
  authMain: {
    backgroundColor: THIRD_COLOR,
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 30,
    backgroundColor: PRIMARY_COLOR,
    width: Dimensions.get('screen').width - 80,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
  },
});

export default styles;
