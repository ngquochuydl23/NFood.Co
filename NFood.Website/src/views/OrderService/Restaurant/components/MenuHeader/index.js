import React from "react";
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './menu-header.scss'

const AntTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: '#FFF',
    display: 'none',

  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  height: 30,
  fontFamily: 'SVN-PoppinsMedium',
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.pxToRem(14),
  marginRight: theme.spacing(1),
  color: 'rgba(0, 0, 0, 0.85)',
  '&:hover': {
    color: '#3fc060',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#FFF',
    backgroundColor: '#3fc060',
    fontFamily: 'SVN-PoppinsMedium',
    fontWeight: theme.typography.fontWeightMedium,
    borderRadius: 200
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

const MenuHeader = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="menu-header">
      <AntTabs
        value={value}
        scrollButtons
        onChange={handleChange}
        allowScrollButtonsMobile
        aria-label="ant example">
        <AntTab label="Noodles" />
        <AntTab label="Rice Dishes" />
        <AntTab label="Curry Dishes" />
        <AntTab label="Salads" />
        <AntTab label="Soups" />
        <AntTab label="Side Orders" />
        <AntTab label="Starters" />
        <AntTab label="Beverages" />
        <AntTab label="Desserts" />
      </AntTabs>
    </div>
  );
}

export default MenuHeader