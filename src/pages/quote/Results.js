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
  useMediaQuery,
} from '@mui/material';
import {
  IconChevronDown,
  IconChevronUp,
  IconExternalLink,
  IconDownload,
  IconMail,
  IconFileTypePdf,
  IconChartBar,
} from '@tabler/icons-react';
import { lineItems } from './dummydata';
import { RouteMapDesktop } from './RouteMapDesktop';
import { RouteMapMobile } from './RouteMapMobile';

export const Results = () => {
  const [expandedRows, setExpandedRows] = useState({});
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

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

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconChartBar size={24} />
            <Typography variant="h5">Quote Results</Typography>
          </Box>
          <Stack direction="row" spacing={1}>
            {!isMobile ? (
              <>
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
              </>
            ) : (
              <>
                {isMobile && <RouteMapMobile />}
                <IconButton onClick={handleDownloadPDF}>
                  <IconDownload size={18} />
                </IconButton>
                <IconButton onClick={handleEmailQuote}>
                  <IconMail size={18} />
                </IconButton>
              </>
            )}
          </Stack>
        </Box>

        {!isMobile && <RouteMapDesktop />}

        <TableContainer component={Paper} variant="outlined">
          <Table>
            <TableHead>
              <TableRow>
                {!isMobile && <TableCell width="50px" />}
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
                  <TableRow onClick={() => (isMobile ? toggleRow(item.id) : null)}>
                    {!isMobile && (
                      <TableCell>
                        <IconButton size="small" onClick={() => toggleRow(item.id)} sx={{ p: 0.5 }}>
                          {expandedRows[item.id] ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />}
                        </IconButton>
                      </TableCell>
                    )}
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
                            {item.details.documentation.map((doc, index) =>
                              isMobile ? (
                                <Button
                                  key={index}
                                  variant="text"
                                  startIcon={
                                    doc.icon === 'IconDownload' ? (
                                      <IconDownload size={12} />
                                    ) : (
                                      <IconExternalLink size={12} />
                                    )
                                  }
                                >
                                  <Typography variant="body2" color="primary">
                                    {doc.title}
                                  </Typography>
                                </Button>
                              ) : (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
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
                                    {doc.icon === 'IconDownload' ? (
                                      <IconDownload size={12} />
                                    ) : (
                                      <IconExternalLink size={12} />
                                    )}
                                  </Link>
                                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }} fontStyle="italic">
                                    {doc.description}
                                  </Typography>
                                </Box>
                              )
                            )}
                          </Stack>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
              <TableRow sx={{ backgroundColor: 'grey.50' }}>
                {!isMobile && <TableCell />}
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
