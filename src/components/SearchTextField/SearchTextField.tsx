import { TextField, Theme, withStyles } from '@material-ui/core';

export const SearchTextField = withStyles((theme: Theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 30,
      backgroundColor: '#E6ECF0',
      padding: 0,
      paddingLeft: 15,
      '&.Mui-focused': {
        backgroundColor: '#fff',
        '& fieldset': {
          borderWidth: 1,
          borderColor: theme.palette.primary.main,
        },
        '& svg path': {
          fill: theme.palette.primary.main,
        },
      },
      '& fieldset': {
        borderColor: 'transparent',
        borderWidth: 1,
      },
      '&:hover fieldset': {
        borderColor: 'transparent',
      },
    },
    '& .MuiInput-underline:after': {
      display: 'none',
    },
    '& .MuiOutlinedInput-input': {
      padding: '12px 14px 14px 5px',
    },
  },
}))(TextField);
