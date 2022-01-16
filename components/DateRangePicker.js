import * as React from 'react';
import { connect , useDispatch} from 'react-redux'
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';

import { setDates } from 'actions';

function BasicDateRangePicker(props) {

  const {dates} = props
  const dispatch = useDispatch()
  //const [value, setValue] = React.useState([null, null]);

  const setValue = (dates) => {
    dispatch(dispatch => setDates({dispatch, dates}))
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {dates && (<DateRangePicker
        startText="Start Date"
        endText="End Date"
        value={dates}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />)}
    </LocalizationProvider>
  );
}

function mapStateToProps(state) {
  const { dates } = state
  console.log(state)
  return { dates }
}

export default connect(mapStateToProps)(BasicDateRangePicker)