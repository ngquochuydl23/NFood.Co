import React, { useState } from 'react'
import DialogContainer from '@components/Dialog'

const ViewDetailDialog = ({
  isOpen,
  onClose,
}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <DialogContainer
      onClose={handleClose}
      isOpen={isOpen}
      isPadding={false}>
      ViewDetailDialog
    </DialogContainer>
  )
}

export default ViewDetailDialog