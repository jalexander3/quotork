import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Input, Slide, Button, IconButton, InputAdornment, ClickAwayListener } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IconMapPinDollar, IconMapPin } from '@tabler/icons-react';
import { bgBlur } from '../../../utils/cssStyles';

const HEADER_MOBILE = 64;
const HEADER_DESKTOP = 92;

const StyledSearchbar = styled('div')(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  height: HEADER_MOBILE,
  padding: theme.spacing(0, 3),
  boxShadow: theme.customShadows.z8,
  [theme.breakpoints.up('md')]: {
    height: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

export default function Searchbar() {
  const [open, setOpen] = useState(false);
  const [fromAddress, setFromAddress] = useState('');
  const [toAddress, setToAddress] = useState('');
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        {!open && (
          <IconButton onClick={handleOpen}>
            <IconMapPinDollar size={22} />
          </IconButton>
        )}

        <Slide direction="down" in={open} mountOnEnter unmountOnExit>
          <StyledSearchbar>
            <Box sx={{ display: 'flex', gap: 2, flex: 1, alignItems: 'center' }}>
              <Input
                autoFocus
                fullWidth
                value={fromAddress}
                onChange={(e) => setFromAddress(e.target.value)}
                disableUnderline
                placeholder="From address…"
                startAdornment={
                  <InputAdornment position="start">
                    <IconMapPin size={20} style={{ color: 'var(--mui-palette-text-disabled)' }} />
                  </InputAdornment>
                }
                sx={{ fontWeight: 'fontWeightBold' }}
              />
              <Input
                fullWidth
                value={toAddress}
                onChange={(e) => setToAddress(e.target.value)}
                disableUnderline
                placeholder="To address…"
                startAdornment={
                  <InputAdornment position="start">
                    <IconMapPin size={20} style={{ color: 'var(--mui-palette-text-disabled)' }} />
                  </InputAdornment>
                }
                sx={{ fontWeight: 'fontWeightBold' }}
              />
            </Box>
            <Button
              variant="contained"
              disabled={!fromAddress || !toAddress}
              onClick={() => {
                navigate('/dashboard/quote', { state: { fromAddress, toAddress } });
                handleClose();
              }}
            >
              Quote
            </Button>
          </StyledSearchbar>
        </Slide>
      </div>
    </ClickAwayListener>
  );
}
