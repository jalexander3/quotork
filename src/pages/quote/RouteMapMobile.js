import { Box, Button, Drawer, Divider, IconButton, Paper, Stack, Typography, useTheme } from '@mui/material';
import {
  IconChevronDown,
  IconChevronUp,
  IconMap,
  IconMaximize,
  IconX,
  IconZoomIn,
  IconZoomOut,
} from '@tabler/icons-react';
import { useState } from 'react';
import { routeMapData } from './dummydata';

export const RouteMapMobile = () => {
  const [open, setOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const theme = useTheme();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const handleZoomIn = () => {
    // Visual only - no functional zoom
  };

  const handleZoomOut = () => {
    // Visual only - no functional zoom
  };

  const handleResetZoom = () => {
    // Visual only - no functional zoom
  };

  return (
    <>
      {/* Trigger Button */}
      <IconButton onClick={handleOpen}>
        <IconMap size={18} />
      </IconButton>

      {/* Full Screen Drawer */}
      <Drawer
        anchor="bottom"
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiDrawer-paper': {
            height: '100%',
            backgroundColor: theme.palette.background.default,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          },
        }}
      >
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Header */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 2,
              backgroundColor: theme.palette.background.paper,
              borderBottom: `1px solid ${theme.palette.divider}`,
              position: 'sticky',
              top: 0,
              zIndex: 1,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconMap size={24} />
              <Typography variant="h6">{routeMapData.title}</Typography>
            </Box>
            <IconButton onClick={handleClose} size="large">
              <IconX size={24} />
            </IconButton>
          </Box>

          {/* Content */}
          <Box sx={{ flex: 1, overflow: 'auto', p: 2 }}>
            {/* Map Section */}
            <Paper sx={{ mb: 3, overflow: 'hidden' }}>
              <Box sx={{ position: 'relative' }}>
                <Box
                  component="img"
                  src={routeMapData.mapImage}
                  alt="Route Map"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />

                {/* Map Controls */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    display: 'flex',
                    gap: 0.5,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: 1,
                    p: 0.5,
                  }}
                >
                  <IconButton size="small" onClick={handleZoomOut} disabled>
                    <IconZoomOut size={16} />
                  </IconButton>
                  <Typography variant="caption" sx={{ alignSelf: 'center', px: 1 }}>
                    {routeMapData.zoomLevel}
                  </Typography>
                  <IconButton size="small" onClick={handleZoomIn} disabled>
                    <IconZoomIn size={16} />
                  </IconButton>
                  <IconButton size="small" onClick={handleResetZoom} disabled>
                    <IconMaximize size={16} />
                  </IconButton>
                </Box>
              </Box>

              <Box sx={{ p: 2 }}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {routeMapData.routeDescription}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                  {routeMapData.routeDisclaimer}
                </Typography>
              </Box>
            </Paper>

            {/* Collapsible Sections */}
            <Stack spacing={2}>
              {/* Route Details */}
              <Paper>
                <Box
                  sx={{
                    p: 2,
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                  onClick={() => toggleSection('routeDetails')}
                >
                  <Typography variant="subtitle1" fontWeight={600}>
                    Route Details
                  </Typography>
                  {expandedSections.routeDetails ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}
                </Box>
                {expandedSections.routeDetails && (
                  <>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                      <Stack spacing={1.5}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2" color="text.secondary">
                            Distance:
                          </Typography>
                          <Typography variant="body2" fontWeight={500}>
                            {routeMapData.routeDetails.distance}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2" color="text.secondary">
                            Est. Time:
                          </Typography>
                          <Typography variant="body2" fontWeight={500}>
                            {routeMapData.routeDetails.estimatedTime}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2" color="text.secondary">
                            States:
                          </Typography>
                          <Typography variant="body2" fontWeight={500}>
                            {routeMapData.routeDetails.states}
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </>
                )}
              </Paper>

              {/* Route Conditions */}
              <Paper>
                <Box
                  sx={{
                    p: 2,
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                  onClick={() => toggleSection('routeConditions')}
                >
                  <Typography variant="subtitle1" fontWeight={600}>
                    Route Conditions
                  </Typography>
                  {expandedSections.routeConditions ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}
                </Box>
                {expandedSections.routeConditions && (
                  <>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                      <Stack spacing={1.5}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2" color="text.secondary">
                            Weather:
                          </Typography>
                          <Typography
                            variant="body2"
                            fontWeight={500}
                            color={routeMapData.routeConditions.weather.color}
                          >
                            {routeMapData.routeConditions.weather.value}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2" color="text.secondary">
                            Traffic:
                          </Typography>
                          <Typography
                            variant="body2"
                            fontWeight={500}
                            color={routeMapData.routeConditions.traffic.color}
                          >
                            {routeMapData.routeConditions.traffic.value}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2" color="text.secondary">
                            Roads:
                          </Typography>
                          <Typography variant="body2" fontWeight={500} color={routeMapData.routeConditions.roads.color}>
                            {routeMapData.routeConditions.roads.value}
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </>
                )}
              </Paper>

              {/* Restrictions */}
              <Paper>
                <Box
                  sx={{
                    p: 2,
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                  onClick={() => toggleSection('restrictions')}
                >
                  <Typography variant="subtitle1" fontWeight={600}>
                    Restrictions
                  </Typography>
                  {expandedSections.restrictions ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}
                </Box>
                {expandedSections.restrictions && (
                  <>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                      <Stack spacing={1}>
                        {routeMapData.restrictions.map((restriction, index) => (
                          <Typography key={index} variant="body2" color="text.secondary">
                            • {restriction}
                          </Typography>
                        ))}
                      </Stack>
                    </Box>
                  </>
                )}
              </Paper>

              {/* Fuel Stops */}
              <Paper>
                <Box
                  sx={{
                    p: 2,
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                  onClick={() => toggleSection('fuelStops')}
                >
                  <Typography variant="subtitle1" fontWeight={600}>
                    Fuel Stops
                  </Typography>
                  {expandedSections.fuelStops ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}
                </Box>
                {expandedSections.fuelStops && (
                  <>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                      <Stack spacing={1}>
                        {routeMapData.fuelStops.map((stop, index) => (
                          <Typography key={index} variant="body2" color="text.secondary">
                            • {stop}
                          </Typography>
                        ))}
                      </Stack>
                    </Box>
                  </>
                )}
              </Paper>
            </Stack>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
