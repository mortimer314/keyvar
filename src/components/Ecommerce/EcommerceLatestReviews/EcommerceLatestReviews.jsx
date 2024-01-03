
import React, { useState, useEffect, useContext, useRef } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CustomizeContext from '../../../context/costomizeContext';
import { DataGridPro } from '@mui/x-data-grid-pro';

import SectionSmallHeader from '../../GloballComponents/SectionSmallHeader';


export default function DataGridProDemo() {

    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 100000,
        editable: true,
    });


    const { theme, language } = React.useContext(CustomizeContext);
    const isDarkMode = theme === 'dark';
    const isLanguageFa = language === 'fa';

    const DARK_MODE_THEME = createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
        },
    });
    return (
        <div className='p-6 lg:p-8 bg-gray-50  dark:bg-slate-900 '>

            <div className="flex justify-between pb-8">
                <SectionSmallHeader
                    title={{ en: 'Latest reviews', fa: 'آخرین بررسی ها' }}
                    subtitle={{ en: 'Payment received across all channels', fa: 'پرداخت در تمام کانال ها دریافت شد.' }}
                />
                <div className="flex items-center gap-3 h-8">
                    <div className="flex-center">
                        <input className="profile-card__input border border-solid border-gray-500" type="text" />
                    </div>
                    <button className='marker-btn flex-center w-14 h-full text-slate-500 dark:text-gray-300 transition-all rounded-md border border-solid border-slate-400/80 dark:border-slate-600'>{isLanguageFa ? "همه" : "All"}</button>
                    <div className=" h-full">
                        <button
                            className='marker-btn flex-center  w-8 h-full text-slate-500 dark:text-gray-300 transition-all rounded-md border border-solid border-slate-400/80 dark:border-slate-600' >
                            <svg className='w-3 h-3'>
                                <use href='#etc-icon'></use>
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
            {isLanguageFa ?
                <span className='text-red-600 pb-1 block'>نمودار  به لایسنس نیاز دارد، لطفا زبان سایت را از قسمت شخصی سازی به انگلیسی تغییر دهید.</span>
                : ""
            }
            <ThemeProvider theme={DARK_MODE_THEME}>

                <Box sx={{ height: 520, width: '100%' }}>
                    <DataGridPro
                        {...data}
                        loading={data.rows.length === 0}
                        rowHeight={38}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                </Box>
            </ThemeProvider>

        </div>
    );
}


