import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Collapse,
  IconButton,
  Stack,
} from '@mui/material';
import {
  IconChevronDown,
  IconChevronUp,
  IconZoomIn,
  IconZoomOut,
  IconMaximize,
  IconMap,
} from '@tabler/icons-react';
import { routeMapData } from './dummydata';

export const RouteMapDesktop = () => {
  const [mapExpanded, setMapExpanded] = useState(false);

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
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, cursor: 'pointer' }}
          onClick={() => setMapExpanded(!mapExpanded)}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconMap size={20} />
            <Typography variant="h6">{routeMapData.title}</Typography>
          </Box>
          {mapExpanded ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}
        </Box>

        <Collapse in={mapExpanded} timeout="auto" unmountOnExit>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {/* Map Section - 75% */}
            <Box sx={{ flex: 0.75, position: 'relative' }}>
              <Box
                component="img"
                src={routeMapData.mapImage}
                alt="Route Map"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 1,
                  border: '1px solid',
                  borderColor: 'divider',
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

              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {routeMapData.routeDescription}
              </Typography>

              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ mt: 1, display: 'block', fontStyle: 'italic' }}
              >
                {routeMapData.routeDisclaimer}
              </Typography>
            </Box>

            {/* Route Information - 25% */}
            <Box sx={{ flex: 0.25, minWidth: 0 }}>
              <Stack spacing={2}>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    Route Details
                  </Typography>
                  <Stack spacing={0.5}>
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

                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    Route Conditions
                  </Typography>
                  <Stack spacing={0.5}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" color="text.secondary">
                        Weather:
                      </Typography>
                      <Typography variant="body2" fontWeight={500} color={routeMapData.routeConditions.weather.color}>
                        {routeMapData.routeConditions.weather.value}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" color="text.secondary">
                        Traffic:
                      </Typography>
                      <Typography variant="body2" fontWeight={500} color={routeMapData.routeConditions.traffic.color}>
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

                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    Restrictions
                  </Typography>
                  <Stack spacing={0.5}>
                    {routeMapData.restrictions.map((restriction, index) => (
                      <Typography key={index} variant="body2" color="text.secondary">
                        • {restriction}
                      </Typography>
                    ))}
                  </Stack>
                </Box>

                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    Fuel Stops
                  </Typography>
                  <Stack spacing={0.5}>
                    {routeMapData.fuelStops.map((stop, index) => (
                      <Typography key={index} variant="body2" color="text.secondary">
                        • {stop}
                      </Typography>
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
};
