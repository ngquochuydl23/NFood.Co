import React, { useState } from 'react'
import DialogContainer from '@components/Dialog'
import { Icon } from '@components/Icon'
import { IcClose } from '@assets/icons'
import { FilledButton } from '@components/Button'
import './detail-food-dialog.scss'
import GroupOption from './FoodOption'

const postAddToCart = () => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({

      });
    }, 3000);
  });
}

const DetailFoodDialog = ({
  isOpen,
  onClose,
  detailFood,
  onAddedToCard
}) => {
  const { foodName, foodInfo, foodImage } = detailFood;
  const [canAddCart, setCanAddCart] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    onClose();
  };

  const addToCart = () => {
    setLoading(true);
    postAddToCart()
      .then(res => {
        console.log("Successfully")
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false);
        onAddedToCard({})
        handleClose();
      })
  }

  return (
    <DialogContainer
      onClose={handleClose}
      isOpen={isOpen}
      isPadding={false}>
      <div className='detail-food-dialog'>
        <img
          className='food-image'
          alt='foodimage'
          src={foodImage} />
        <div className='food-info-contain'>
          <h1 className='food-name'>{foodName}</h1>
          <h4 className='food-info'>{foodInfo}</h4>
        </div>

        <div
          className='close-button'
          onClick={() => handleClose()}>
          <Icon icon={IcClose} size={15} />
        </div>

        <GroupOption title="Toppings" options={[{
          id: 1,
          title: 'Side Cheese',
          cost: 20000
        }]} />
        <FilledButton
          disabled={!canAddCart || loading}
          className="add-to-cart-button"
          text="Add to Cart"
          onClick={() => addToCart()}
        />
      </div>
    </DialogContainer>
  )
}

export default DetailFoodDialog