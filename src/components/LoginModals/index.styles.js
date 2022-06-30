import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  root: {
    width: 400,
    height: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.57)',
    margin: 'auto',
    marginTop: 120,
    padding: 20,

    '&:focus': {
      outline: 'none'
    },
    '& label.Mui-focused': {
      color: 'white'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white'
    },
    '& .MuiMenuItem-root': {
      color: 'white'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white'
      },
      '&:hover fieldset': {
        borderColor: 'white'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white'
      }
    },
    '& .MuiOutlinedInput-input': {},

    borderRadius: 10
  },
  inputContainer: {
    borderRadius: 10,
    marginBottom: 40,
    fontSize: 30
  },
  input: {
    padding: 10
  },
  headerlogo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    flexDirection: 'column'
  },

  select: {
    '&:before': {
      borderColor: 'white'
    },
    '&:after': {
      borderColor: 'white'
    },
    '&:not(.Mui-disabled):hover::before': {
      borderColor: 'white'
    },
    fontSize: 10
  },
  icon: {
    fill: 'white'
  },
  rooticon: {},
  selected: {
    color: 'black',
    fontWeight: 500
  },
  formControl: {
    margin: 20,
    alignItems: 'center',
    display: 'flex'
  },
  paper: {
    background: 'white',
    color: '#1a222a'
  },
  labelRoot: {
    fontSize: 15,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 'initial'
  }
}))
