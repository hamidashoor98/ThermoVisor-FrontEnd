import React, { useState, useEffect, useContext } from 'react'
import {
  Button,
  Modal,
  TextField,
  Box,
  Typography,
  Select,
  Divider,
  MenuItem,
  InputLabel,
  FormHelperText,
  FormControl
} from '@material-ui/core'
import useStyles from './index.styles'
import HeaderLogo from '../../assets/images/thermologo.png'
import LanguageIcon from '@material-ui/icons/Language'
import { changeLanguage, getTranslate, lang } from '../../localization/index'
import { LoginContext } from '../../contexts/LoginContext'
import { useHistory } from 'react-router-dom'
export default function SighnInModal() {
  let history = useHistory()

  const [username, setuserName] = useState('')
  const [password, setPassword] = useState('')

  const { logindetails, isloading, CheckLogin } = useContext(LoginContext)

  const translate = getTranslate()

  const [open, setOpen] = useState(true)
  const [language, setLanguage] = useState('fa')

  useEffect(() => {
    if (logindetails.status == 200) {
      alert('ورود')
      setTimeout(() => {
        history.push('/panel')
      }, 500)
      localStorage.setItem('isLogedIn', true)
    }
    if (logindetails.status == 404) {
      alert('فردی با این مشخصات یافت نشد')
      localStorage.setItem('isLogedIn', false)
    }
    if (logindetails.status == 406) {
      alert('روز عبور اشتباه است')
      localStorage.setItem('isLogedIn', false)
    }
  }, [logindetails])

  useEffect(() => {
    setLanguage(lang)
  }, [])

  const classes = useStyles()
  return (
    <Modal
      disableBackdropClick
      hideBackdrop={true}
      open={open}
      onClose={() => {
        setOpen(false)
      }}
    >
      <div className={classes.root}>
        <Box className={classes.headerlogo}>
          <img
            style={{
              width: null,
              height: 100,
              alignSelf: 'center',
              resizeMode: 'contain'
            }}
            src={HeaderLogo}
            alt=""
          />
          <Typography> {translate.signin} </Typography>
        </Box>
        <TextField
          classes={{ root: classes.inputContainer }}
          color="#fff"
          variant="outlined"
          label={translate.userName}
          fullWidth
          InputLabelProps={{
            classes: {
              root: classes.labelRoot
            }
          }}
          size="small"
          InputProps={{ className: classes.input }}
          value={username}
          onChange={ev => setuserName(ev.target.value)}
        />
        <TextField
          classes={{ root: classes.inputContainer }}
          color="#fff"
          variant="outlined"
          type="password"
          label={translate.password}
          InputLabelProps={{
            classes: {
              root: classes.labelRoot
            }
          }}
          fullWidth
          size="small"
          InputProps={{ className: classes.input }}
          value={password}
          onChange={ev => setPassword(ev.target.value)}
        />
        <Button
          fullWidth
          variant="outlined"
          color="inherit"
          style={{ backgroundColor: 'rgba(120,120,120,100)' }}
          onClick={() => CheckLogin({ username: username, password: password })}
        >
          <Typography>{translate.signin}</Typography>
        </Button>
        <Divider />
        <FormControl variant="outlined" className={classes.formControl}>
          <Select
            IconComponent={LanguageIcon}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={language}
            autoWidth
            MenuProps={{
              classes: {
                paper: classes.paper
              }
            }}
            // other attributes//
            className={classes.select}
            inputProps={{
              classes: {
                icon: classes.icon,
                root: classes.rooticon
              }
            }}
            onChange={value => {
              changeLanguage(value.target.value)
            }}
          >
            <MenuItem
              classes={{ selected: classes.selected }}
              value={'fa'}
              onClick={() => changeLanguage('fa')}
            >
              فارسی
            </MenuItem>
            <MenuItem
              classes={{ selected: classes.selected }}
              value={'en'}
              onClick={() => changeLanguage('en')}
            >
              english
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </Modal>
  )
}
