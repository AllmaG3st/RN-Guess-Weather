import React, {PropsWithChildren} from 'react';

import Modal from 'react-native-modal';

import {StyleSheet, ViewStyle} from 'react-native';

interface Props extends PropsWithChildren {
  visible: boolean;
  onBackdropPress?: () => void;
  style?: ViewStyle;
}

const ModalContainer: React.FC<Props> = ({
  visible,
  onBackdropPress,
  style,
  children,
}) => {
  return (
    <Modal
      animationOutTiming={200}
      style={[styles.container, style]}
      backdropTransitionOutTiming={0}
      useNativeDriverForBackdrop={true}
      isVisible={visible}
      onBackdropPress={onBackdropPress}
      statusBarTranslucent={true}>
      {children}
    </Modal>
  );
};

export default ModalContainer;

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
  },
});
