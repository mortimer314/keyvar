
import React ,{useContext} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Checkbox, ThemeProvider, createTheme } from '@mui/material';
import CustomizeContext from '../../../context/costomizeContext';

const countryEmoji = {
  USA: '🇺🇸',
  Canada: '🇨🇦',
  Australia: '🇦🇺',
  France: '🇫🇷',
  Germany: '🇩🇪',
  Spain: '🇪🇸',
  Italy: '🇮🇹',
  UK: '🇬🇧',
  Japan: '🇯🇵',
  'South Korea': '🇰🇷',
  Mexico: '🇲🇽',
  Brazil: '🇧🇷',
  Russia: '🇷🇺',
  India: '🇮🇳',
  China: '🇨🇳',
  Netherlands: '🇳🇱',
  Sweden: '🇸🇪',
  Norway: '🇳🇴',
  Switzerland: '🇨🇭',
  Denmark: '🇩🇰',
};
const columns = [
  {
    field: 'selection',
    headerName: 'SELECT',
    width: 100,
    renderCell: (params) => (
      <Checkbox
        color="primary"
        checked={params.row.isSelected}
        onClick={(event) => event.stopPropagation()}
      />
    ),
  },
  {
    field: 'country',
    headerName: 'COUNTRY',
    width: 150,
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {countryEmoji[params.value]}
        <span style={{ marginLeft: '0.5rem' }}>{params.value}</span>
      </div>
    ),
  },
  { field: 'convRate', headerName: 'CONV. RATE', width: 150 },
  { field: 'revenue', headerName: 'REVENUE', width: 150 },
  { field: 'transactions', headerName: 'TRANSACTIONS', width: 150 },
  { field: 'users', headerName: 'USERS', width: 150 },
];

const rows = [
  { id: 1, country: 'USA', convRate: 2.5, revenue: 1000, transactions: 10, users: 50 },
  { id: 2, country: 'Canada', convRate: 3.2, revenue: 1500, transactions: 15, users: 70 },
  { id: 3, country: 'Australia', convRate: 4.1, revenue: 2000, transactions: 20, users: 90 },
  { id: 4, country: 'France', convRate: 3.8, revenue: 1800, transactions: 18, users: 80 },
  { id: 5, country: 'Germany', convRate: 2.1, revenue: 900, transactions: 9, users: 45 },
  { id: 6, country: 'Spain', convRate: 2.9, revenue: 1200, transactions: 12, users: 60 },
  { id: 7, country: 'Italy', convRate: 2.7, revenue: 1100, transactions: 11, users: 55 },
  { id: 8, country: 'UK', convRate: 3.4, revenue: 1600, transactions: 16, users: 80 },
  { id: 9, country: 'Japan', convRate: 3.2, revenue: 1500, transactions: 15, users: 75 },
  { id: 10, country: 'South Korea', convRate: 2.8, revenue: 1300, transactions: 13, users: 65 },
  { id: 11, country: 'Mexico', convRate: 3.1, revenue: 1400, transactions: 14, users: 70 },
  { id: 12, country: 'Brazil', convRate: 3.5, revenue: 1600, transactions: 16, users: 80 },
  { id: 13, country: 'Russia', convRate: 2.6, revenue: 1000, transactions: 10, users: 50 },
  { id: 14, country: 'India', convRate: 4.8, revenue: 2200, transactions: 22, users: 110 },
  { id: 15, country: 'China', convRate: 3.6, revenue: 1700, transactions: 17, users: 85 },
  { id: 16, country: 'Netherlands', convRate: 2.3, revenue: 800, transactions: 8, users: 40 },
  { id: 17, country: 'Sweden', convRate: 2.4, revenue: 850, transactions: 8.5, users: 42.5 },
  { id: 18, country: 'Norway', convRate: 2.2, revenue: 750, transactions: 7.5, users: 37.5 },
  { id: 19, country: 'Switzerland', convRate: 2.1, revenue: 700, transactions: 7, users: 35 },
  { id: 20, country: 'Denmark', convRate: 2.0, revenue: 650, transactions: 6.5, users: 32.5 },
];


const ChartTopRegions = () => {

  const { theme, language } = useContext(CustomizeContext);
  const isDarkMode = theme === 'dark';
  const isLanguageFa = language === 'fa';

  const DARK_MODE_THEME = createTheme({
      palette: {
          mode: isDarkMode ? 'dark' : 'light',
      },
  });

  return (
    <ThemeProvider theme={DARK_MODE_THEME}>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={20}
      />
    </div>
    </ThemeProvider>
  );
};

export default ChartTopRegions;
