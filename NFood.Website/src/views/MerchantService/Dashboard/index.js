import PageContainer from "@components/PageContainer";
import React, { useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import FinanceToday from "./components/FinanceToday";

const Dashboard = () => {

  const [profile, setProfile] = useState({ fullName: 'Lê Bích Trâm' });
  const [financeToday, setFinanceToday] = useState({
    currentOrders: 10,
    numberOfOrdersToday: 25,
    earningToday: '1000k'
  });

  return (
    <PageContainer>
      <DashboardHeader
        profile={profile}
        notification={`You have 3 notifications today`} />
      <FinanceToday {...financeToday} />
    </PageContainer>
  )
}

export default Dashboard;