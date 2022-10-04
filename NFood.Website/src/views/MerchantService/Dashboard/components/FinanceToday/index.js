import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import './finance-styles.scss'
import _ from 'lodash';
import { Icon } from "@components/Icon";
import { IcTotalOrderToday, IcEarningToday } from "@assets/icons";

const FinanceToday = ({
  currentOrders,
  numberOfOrdersToday,
  earningToday
}) => {

  const [financeData, setFinanceData] = useState([
    { number: currentOrders, title: 'Current Orders', icon: IcTotalOrderToday },
    { number: numberOfOrdersToday, title: 'Number Of Orders Today', icon: IcTotalOrderToday },
    { number: earningToday, title: 'Earing Today', icon: IcEarningToday },
    { number: 1, title: 'Canceled Orders', icon: IcTotalOrderToday }
  ])

  const FinanceTodayItem = ({
    number,
    title,
    icon,
    onClick
  }) => {
    return (
      <Grid item xs={3}>
        <div
          className="finance-item"
          onClick={onClick}>
          <div className="info">
            <h1 className="number">{number}</h1>
            <p className="title">{title}</p>
          </div>
          <div className={`icon`}>
            <Icon size={40} icon={icon} />
          </div>
        </div>
      </Grid>
    )
  }

  return (
    <Grid container spacing={2}>
      {_.map(financeData, (item, idx) =>
        <FinanceTodayItem {...item} />
      )}
    </Grid>
  )
}

export default FinanceToday;