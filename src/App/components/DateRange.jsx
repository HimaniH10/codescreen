import * as React from 'react';
const moment = require('moment');
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';

export default function BasicDateRangePicker(props) {
  return (
   <> 
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DemoContainer components={['DateRangePicker']}>
            <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} onChange={(newValue) => { props.setDateRange(newValue)}}
            />
        </DemoContainer>
        </LocalizationProvider> 
    </>
  );
}
