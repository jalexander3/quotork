import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Collapse,
  IconButton,
  Stack,
  Link,
  Button,
  Divider,
} from '@mui/material';
import {
  IconChevronDown,
  IconChevronUp,
  IconExternalLink,
  IconDownload,
  IconMail,
  IconFileTypePdf,
  IconZoomIn,
  IconZoomOut,
  IconMaximize,
  IconChartBar,
  IconMap,
} from '@tabler/icons-react';

export const Results = () => {
  const [expandedRows, setExpandedRows] = useState({});
  const [mapExpanded, setMapExpanded] = useState(false);

  const toggleRow = (rowId) => {
    setExpandedRows((prev) => ({
      ...prev,
      [rowId]: !prev[rowId],
    }));
  };

  const handleDownloadPDF = () => {
    // TODO: Implement PDF generation
    console.log('Downloading quote as PDF...');
    // This would typically generate a PDF with the quote details
  };

  const handleEmailQuote = () => {
    // TODO: Implement email functionality
    console.log('Emailing quote to customer...');
    // This would typically open an email client or send via API
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

  const lineItems = [
    {
      id: 'base-haul',
      name: 'Base line-haul',
      description: '190 miles @ $2.75/mi',
      cost: '$523',
      details: {
        breakdown: [
          { item: 'Mileage rate', amount: '$2.75/mi', total: '$523' },
          { item: 'Distance', amount: '190 miles', total: '' },
          { item: 'Fuel surcharge', amount: 'Included', total: '' },
        ],
        documentation: [
          {
            title: 'Rate Schedule',
            type: 'download',
            description: 'Current mileage rates and fuel surcharge tables',
            icon: <IconDownload size={16} />,
          },
          {
            title: 'Route Optimization',
            type: 'link',
            description: 'View detailed route analysis and alternatives',
            icon: <IconExternalLink size={16} />,
          },
        ],
      },
    },
    {
      id: 'permits',
      name: 'State permits',
      description: 'MD, PA, NJ',
      cost: '$310',
      details: {
        breakdown: [
          { item: 'Maryland Oversize Permit', amount: '$85', total: '$85' },
          { item: 'Pennsylvania Oversize Permit', amount: '$125', total: '$125' },
          { item: 'New Jersey Oversize Permit', amount: '$100', total: '$100' },
        ],
        documentation: [
          {
            title: 'Permit Application Forms',
            type: 'download',
            description: 'Download state-specific permit applications',
            icon: <IconDownload size={16} />,
          },
          {
            title: 'State DOT Requirements',
            type: 'link',
            description: 'Review state-specific oversize load regulations',
            icon: <IconExternalLink size={16} />,
          },
          {
            title: 'Permit Processing Times',
            type: 'link',
            description: 'Current processing times by state',
            icon: <IconExternalLink size={16} />,
          },
        ],
      },
    },
    {
      id: 'escorts',
      name: 'Escorts',
      description: '2 states require',
      cost: '$400',
      details: {
        breakdown: [
          { item: 'Maryland Escort Vehicle', amount: '$150/day', total: '$150' },
          { item: 'Pennsylvania Escort Vehicle', amount: '$150/day', total: '$150' },
          { item: 'Pilot Car Services', amount: '$100', total: '$100' },
        ],
        documentation: [
          {
            title: 'Escort Requirements Guide',
            type: 'download',
            description: 'State-by-state escort vehicle requirements',
            icon: <IconDownload size={16} />,
          },
          {
            title: 'Certified Escort Services',
            type: 'link',
            description: 'Find approved escort service providers',
            icon: <IconExternalLink size={16} />,
          },
          {
            title: 'Escort Training Requirements',
            type: 'link',
            description: 'Training and certification requirements',
            icon: <IconExternalLink size={16} />,
          },
        ],
      },
    },
    {
      id: 'accessorials',
      name: 'Accessorials',
      description: 'Toll, fuel, admin',
      cost: '$120',
      details: {
        breakdown: [
          { item: 'Toll Roads', amount: '$45', total: '$45' },
          { item: 'Fuel Surcharge', amount: '$35', total: '$35' },
          { item: 'Administrative Fee', amount: '$40', total: '$40' },
        ],
        documentation: [
          {
            title: 'Toll Calculator',
            type: 'link',
            description: 'Calculate toll costs for your specific route',
            icon: <IconExternalLink size={16} />,
          },
          {
            title: 'Fuel Surcharge Policy',
            type: 'download',
            description: 'Current fuel surcharge rates and policies',
            icon: <IconDownload size={16} />,
          },
        ],
      },
    },
  ];

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconChartBar size={24} />
            <Typography variant="h5">Quote Results</Typography>
          </Box>
          <Stack direction="row" spacing={1}>
            <Button
              variant="outlined"
              startIcon={<IconFileTypePdf size={18} />}
              onClick={handleDownloadPDF}
              sx={{ textTransform: 'none' }}
            >
              Download PDF
            </Button>
            <Button
              variant="contained"
              startIcon={<IconMail size={18} />}
              onClick={handleEmailQuote}
              sx={{ textTransform: 'none' }}
            >
              Email Quote
            </Button>
          </Stack>
        </Box>

        {/* Route Map */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, cursor: 'pointer' }}
              onClick={() => setMapExpanded(!mapExpanded)}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconMap size={20} />
                <Typography variant="h6">Route Overview</Typography>
              </Box>
              {mapExpanded ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}
            </Box>

            <Collapse in={mapExpanded} timeout="auto" unmountOnExit>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {/* Map Section - 75% */}
                <Box sx={{ flex: 0.75, position: 'relative' }}>
                  <Box
                    component="img"
                    src="/assets/mock-route.png"
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
                      100%
                    </Typography>
                    <IconButton size="small" onClick={handleZoomIn} disabled>
                      <IconZoomIn size={16} />
                    </IconButton>
                    <IconButton size="small" onClick={handleResetZoom} disabled>
                      <IconMaximize size={16} />
                    </IconButton>
                  </Box>

                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Baltimore, MD → Newark, NJ (190 miles)
                  </Typography>

                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ mt: 1, display: 'block', fontStyle: 'italic' }}
                  >
                    Route shown is optimized for heavy-haul transport. Actual routing may vary based on permit
                    restrictions, bridge clearances, and real-time traffic conditions. Escort vehicle requirements and
                    travel time restrictions apply.
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
                            190 miles
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2" color="text.secondary">
                            Est. Time:
                          </Typography>
                          <Typography variant="body2" fontWeight={500}>
                            3h 22m
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2" color="text.secondary">
                            States:
                          </Typography>
                          <Typography variant="body2" fontWeight={500}>
                            MD, PA, NJ
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
                          <Typography variant="body2" fontWeight={500} color="success.main">
                            Clear
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2" color="text.secondary">
                            Traffic:
                          </Typography>
                          <Typography variant="body2" fontWeight={500} color="warning.main">
                            Moderate
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2" color="text.secondary">
                            Roads:
                          </Typography>
                          <Typography variant="body2" fontWeight={500} color="success.main">
                            Good
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>

                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                        Restrictions
                      </Typography>
                      <Stack spacing={0.5}>
                        <Typography variant="body2" color="text.secondary">
                          • Oversize load permits required
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          • Escort vehicle needed
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          • Daylight hours only
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          • No weekend travel
                        </Typography>
                      </Stack>
                    </Box>

                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                        Fuel Stops
                      </Typography>
                      <Stack spacing={0.5}>
                        <Typography variant="body2" color="text.secondary">
                          • Baltimore, MD (Start)
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          • Philadelphia, PA (Mid-point)
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          • Newark, NJ (End)
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Collapse>
          </CardContent>
        </Card>

        <TableContainer component={Paper} variant="outlined">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell width="50px" />
                <TableCell>
                  <strong>Item</strong>
                </TableCell>
                <TableCell>
                  <strong>Description</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>Cost</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lineItems.map((item) => (
                <React.Fragment key={item.id}>
                  <TableRow>
                    <TableCell>
                      <IconButton size="small" onClick={() => toggleRow(item.id)} sx={{ p: 0.5 }}>
                        {expandedRows[item.id] ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />}
                      </IconButton>
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell align="right">{item.cost}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={4} sx={{ p: 0, border: 0 }}>
                      <Collapse in={expandedRows[item.id]} timeout="auto" unmountOnExit>
                        <Box sx={{ p: 2, backgroundColor: 'grey.50' }}>
                          <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                            Cost Breakdown
                          </Typography>
                          <Stack spacing={1} sx={{ mb: 3 }}>
                            {item.details.breakdown.map((detail, index) => (
                              <Box
                                key={index}
                                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                              >
                                <Typography variant="body2" color="text.secondary">
                                  {detail.item}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                  <Typography variant="body2" color="text.secondary">
                                    {detail.amount}
                                  </Typography>
                                  {detail.total && (
                                    <Typography variant="body2" fontWeight={600}>
                                      {detail.total}
                                    </Typography>
                                  )}
                                </Box>
                              </Box>
                            ))}
                          </Stack>

                          <Divider sx={{ my: 2 }} />

                          <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                            Documentation & Resources
                          </Typography>
                          <Stack spacing={1}>
                            {item.details.documentation.map((doc, index) => (
                              <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                {doc.icon}
                                <Link
                                  href="#"
                                  sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 0.5,
                                    textDecoration: 'none',
                                    '&:hover': { textDecoration: 'underline' },
                                  }}
                                >
                                  <Typography variant="body2" color="primary">
                                    {doc.title}
                                  </Typography>
                                  <IconExternalLink size={12} />
                                </Link>
                                <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }} fontStyle="italic">
                                  {doc.description}
                                </Typography>
                              </Box>
                            ))}
                          </Stack>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
              <TableRow sx={{ backgroundColor: 'grey.50' }}>
                <TableCell />
                <TableCell>
                  <strong>Total Estimate</strong>
                </TableCell>
                <TableCell />
                <TableCell align="right">
                  <strong>$1,353</strong>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ mt: 3, p: 2, backgroundColor: 'grey.50', borderRadius: 1 }}>
          <Typography variant="body2" color="text.secondary">
            This quote includes estimated permits and escorts based on current state rules. Actual permit costs and
            routing restrictions may vary.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
