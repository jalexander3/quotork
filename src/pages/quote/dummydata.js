export const dummyQuoteData = {
  fromAddress: '1234 Industrial Blvd, Baltimore, MD 21201',
  toAddress: '5678 Manufacturing Way, Newark, NJ 07105',
  loadWeight: '45,000',
  dimensions: {
    length: '48',
    width: '8.5',
    height: '13.5'
  },
  axleCount: '5',
  commodity: 'Heavy machinery - CNC lathe, requires special handling',
  shipDate: '2024-02-15',
  trailerType: 'lowboy',
  routePreferences: ['Avoid tolls', 'Fastest route', 'Avoid downtown areas'],
  permitOptions: ['Oversize permit', 'Escort vehicle', 'Pilot car required']
};

export const lineItems = [
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
          icon: 'IconDownload',
        },
        {
          title: 'Route Optimization',
          type: 'link',
          description: 'View detailed route analysis and alternatives',
          icon: 'IconExternalLink',
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
          icon: 'IconDownload',
        },
        {
          title: 'State DOT Requirements',
          type: 'link',
          description: 'Review state-specific oversize load regulations',
          icon: 'IconExternalLink',
        },
        {
          title: 'Permit Processing Times',
          type: 'link',
          description: 'Current processing times by state',
          icon: 'IconExternalLink',
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
          icon: 'IconDownload',
        },
        {
          title: 'Certified Escort Services',
          type: 'link',
          description: 'Find approved escort service providers',
          icon: 'IconExternalLink',
        },
        {
          title: 'Escort Training Requirements',
          type: 'link',
          description: 'Training and certification requirements',
          icon: 'IconExternalLink',
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
          icon: 'IconExternalLink',
        },
        {
          title: 'Fuel Surcharge Policy',
          type: 'download',
          description: 'Current fuel surcharge rates and policies',
          icon: 'IconDownload',
        },
      ],
    },
  },
];

export const routeMapData = {
  title: 'Route Overview',
  mapImage: '/assets/mock-route.png',
  zoomLevel: '100%',
  routeDescription: 'Baltimore, MD → Newark, NJ (190 miles)',
  routeDisclaimer: 'Route shown is optimized for heavy-haul transport. Actual routing may vary based on permit restrictions, bridge clearances, and real-time traffic conditions. Escort vehicle requirements and travel time restrictions apply.',
  routeDetails: {
    distance: '190 miles',
    estimatedTime: '3h 22m',
    states: 'MD, PA, NJ'
  },
  routeConditions: {
    weather: { value: 'Clear', color: 'success.main' },
    traffic: { value: 'Moderate', color: 'warning.main' },
    roads: { value: 'Good', color: 'success.main' }
  },
  restrictions: [
    'Oversize load permits required',
    'Escort vehicle needed',
    'Daylight hours only',
    'No weekend travel'
  ],
  fuelStops: [
    'Baltimore, MD (Start)',
    'Philadelphia, PA (Mid-point)',
    'Newark, NJ (End)'
  ]
};