import React from "react";
import Modal from "react-native-modal";
import { useModal } from "../../context/ModalContext";
import * as S from "./styles";

export const CustomModal: React.FC = () => {
  const { isVisible, modalContent, closeModal } = useModal();

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={closeModal}
      onBackButtonPress={closeModal}
    >
      <S.ContainerModal>{modalContent}</S.ContainerModal>
    </Modal>
  );
};
