import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
  Input,
  InputAdornment,
  TextField,
  Collapse,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from '@mui/material';
import { IconMapPin, IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { Results } from './Results';
import { dummyQuoteData } from './dummydata';

export const QuotePage = () => {
  const location = useLocation();
  const { fromAddress: stateFromAddress, toAddress: stateToAddress } = location.state || {};

  const [fromAddress, setFromAddress] = useState(stateFromAddress || dummyQuoteData.fromAddress);
  const [toAddress, setToAddress] = useState(stateToAddress || dummyQuoteData.toAddress);
  const [loadWeight, setLoadWeight] = useState(dummyQuoteData.loadWeight);
  const [dimensions, setDimensions] = useState(dummyQuoteData.dimensions);
  const [axleCount, setAxleCount] = useState(dummyQuoteData.axleCount);
  const [commodity, setCommodity] = useState(dummyQuoteData.commodity);
  const [shipDate, setShipDate] = useState(dummyQuoteData.shipDate);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [trailerType, setTrailerType] = useState(dummyQuoteData.trailerType);
  const [routePreferences, setRoutePreferences] = useState(dummyQuoteData.routePreferences);
  const [permitOptions, setPermitOptions] = useState(dummyQuoteData.permitOptions);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleQuote = async () => {
    setIsLoading(true);

    // Simulate quote generation delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setShowResults(true);
  };

  const handleNewQuote = () => {
    setShowResults(false);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Stack direction="row" spacing={2} sx={{ mb: 3 }} justifyContent="space-between">
        <Typography variant="h4">Create Quote</Typography>
        <Button
          variant="contained"
          onClick={showResults ? handleNewQuote : handleQuote}
          disabled={isLoading || !fromAddress || !toAddress}
          sx={{ alignSelf: 'flex-start' }}
          startIcon={isLoading ? <CircularProgress size={20} /> : null}
        >
          {isLoading ? 'Generating Quote...' : `${showResults ? 'New' : 'Get'} Quote`}
        </Button>
      </Stack>

      {!showResults && (
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Stack spacing={3}>
              {/* Address Fields */}
              <Stack direction="row" spacing={2}>
                <Input
                  fullWidth
                  value={fromAddress}
                  onChange={(e) => setFromAddress(e.target.value)}
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
                  placeholder="To address…"
                  startAdornment={
                    <InputAdornment position="start">
                      <IconMapPin size={20} style={{ color: 'var(--mui-palette-text-disabled)' }} />
                    </InputAdornment>
                  }
                  sx={{ fontWeight: 'fontWeightBold' }}
                />
              </Stack>

              {/* Load Details */}
              <Stack spacing={2}>
                <Typography variant="h6">Load Details</Typography>

                <TextField
                  fullWidth
                  label="Load Weight"
                  value={loadWeight}
                  onChange={(e) => setLoadWeight(e.target.value)}
                  placeholder="e.g., 50,000 lbs"
                  InputProps={{
                    endAdornment: <InputAdornment position="end">lbs</InputAdornment>,
                  }}
                />

                <Stack direction="row" spacing={2}>
                  <TextField
                    label="Length"
                    value={dimensions.length}
                    onChange={(e) => setDimensions((prev) => ({ ...prev, length: e.target.value }))}
                    placeholder="ft"
                    sx={{ flex: 1 }}
                  />
                  <TextField
                    label="Width"
                    value={dimensions.width}
                    onChange={(e) => setDimensions((prev) => ({ ...prev, width: e.target.value }))}
                    placeholder="ft"
                    sx={{ flex: 1 }}
                  />
                  <TextField
                    label="Height"
                    value={dimensions.height}
                    onChange={(e) => setDimensions((prev) => ({ ...prev, height: e.target.value }))}
                    placeholder="ft"
                    sx={{ flex: 1 }}
                  />
                </Stack>

                <TextField
                  fullWidth
                  label="Axle Count (Optional)"
                  value={axleCount}
                  onChange={(e) => setAxleCount(e.target.value)}
                  placeholder="e.g., 5"
                />

                <TextField
                  fullWidth
                  label="Commodity / Description"
                  value={commodity}
                  onChange={(e) => setCommodity(e.target.value)}
                  placeholder="Describe what you're shipping"
                  multiline
                  rows={2}
                />

                <TextField
                  fullWidth
                  label="Target Ship Date"
                  type="date"
                  value={shipDate}
                  onChange={(e) => setShipDate(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                />
              </Stack>

              {/* Advanced Options */}
              <Box>
                <Button
                  variant="standard"
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  startIcon={showAdvanced ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}
                  sx={{ mb: 2 }}
                >
                  Show Advanced Fields
                </Button>

                <Collapse in={showAdvanced}>
                  <Stack spacing={2} sx={{ pl: 2, borderLeft: 2, borderColor: 'divider' }}>
                    <FormControl fullWidth>
                      <InputLabel>Trailer Type</InputLabel>
                      <Select value={trailerType} onChange={(e) => setTrailerType(e.target.value)} label="Trailer Type">
                        <MenuItem value="flatbed">Flatbed</MenuItem>
                        <MenuItem value="step-deck">Step Deck</MenuItem>
                        <MenuItem value="lowboy">Lowboy</MenuItem>
                        <MenuItem value="removable-gooseneck">Removable Gooseneck</MenuItem>
                        <MenuItem value="stretch">Stretch</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Select>
                    </FormControl>

                    <TextField
                      fullWidth
                      label="Route Preferences"
                      value={routePreferences.join(', ')}
                      onChange={(e) =>
                        setRoutePreferences(
                          e.target.value
                            .split(',')
                            .map((s) => s.trim())
                            .filter(Boolean)
                        )
                      }
                      placeholder="e.g., Avoid tolls, scenic route, fastest route"
                      helperText="Separate multiple preferences with commas"
                    />

                    <TextField
                      fullWidth
                      label="Permit/Escort Options"
                      value={permitOptions.join(', ')}
                      onChange={(e) =>
                        setPermitOptions(
                          e.target.value
                            .split(',')
                            .map((s) => s.trim())
                            .filter(Boolean)
                        )
                      }
                      placeholder="e.g., Oversize permit, escort vehicle, pilot car"
                      helperText="Separate multiple options with commas"
                    />
                  </Stack>
                </Collapse>
              </Box>

              <Button
                variant="contained"
                onClick={handleQuote}
                disabled={isLoading || !fromAddress || !toAddress}
                sx={{ alignSelf: 'flex-start' }}
                size="large"
                startIcon={isLoading ? <CircularProgress size={20} /> : null}
              >
                {isLoading ? 'Generating Quote...' : 'Get Quote'}
              </Button>
            </Stack>
          </CardContent>
        </Card>
      )}

      {/* Results Panel */}
      {showResults && <Results />}
    </Box>
  );
};
