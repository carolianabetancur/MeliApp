

import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.webp'
import { IconButton, InputAdornment, Stack, OutlinedInput } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import useStyle from './HomeStyles'

const Home = () => {
  const navigate = useNavigate();
  const classes = useStyle();

  const [searchValue, setSearchValue] = useState('')

  const handleKeyPress = useCallback((event) => {
    if (event.key === 'Enter') {
      startSearch()
    }
  })

  const startSearch = () => {
    navigate(`/items?search=${searchValue}`)
    window.location.reload()
  }

  return (
    <Stack direction="row" spacing={2} className={classes.root}>
      <img src={logo} alt="MeLi" width="40px" height="30px" />
      <OutlinedInput
        className={classes.searchBar}
        id="outlined-adornment-password"
        type='text'
        placeholder='Nunca dejes de buscar'
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
        onKeyUp={handleKeyPress}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={startSearch}
              edge="end"
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />

    </Stack>
  )
}
export default Home;