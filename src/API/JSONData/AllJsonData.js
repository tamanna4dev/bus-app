const cities = [
  { id: 1, name: "Hisar" },
  { id: 2, name: "Jind" },
  { id: 3, name: "Panipat" },
  { id: 4, name: "Haridwar" },
  { id: 5, name: "Ramnagar" },
  { id: 6, name: "Karnal" },
  { id: 7, name: "Salasar" },
  { id: 8, name: "Ganganagar" },
  { id: 9, name: "Hansi" }
];

const buses = [
  { id: '1', time: '06:00 AM', duration: '01h 30m', operator: 'Haryana Roadways', type: 'Non A/C Express Seater Bus', company: 'Govt.' },
  { id: '2', time: '06:10 AM', duration: '02h 00m', operator: 'Haryana Roadways', type: 'Non A/C Express Seater Bus', company: 'Govt.' },
  { id: '3', time: '06:35 AM', duration: '01h 45m', operator: 'Haryana Roadways', type: 'Non A/C Express Seater Bus', company: 'Govt.' },
  { id: '4', time: '07:15 AM', duration: '01h 50m', operator: 'Haryana Roadways', type: 'Non A/C Express Seater Bus', company: 'Govt.' },
  { id: '5', time: '07:30 AM', duration: '01h 55m', operator: 'Haryana Roadways', type: 'Non A/C Express Seater Bus', company: 'Govt.' },
  { id: '6', time: '08:00 AM', duration: '02h 10m', operator: 'Haryana Roadways', type: 'Non A/C Express Seater Bus', company: 'Govt.' },
  // { id: '7', time: '08:40 AM', duration: '05h 30m', operator: 'Haryana Roadways', type: 'Non A/C Express Seater Bus', company: 'Govt.' },
  // { id: '8', time: '09:20 AM', duration: '01h 40m', operator: 'Haryana Roadways', type: 'Non A/C Express Seater Bus', company: 'Govt.' },
  // { id: '9', time: '10:35 AM', duration: '02h 15m', operator: 'Haryana Roadways', type: 'Non A/C Express Seater Bus', company: 'Govt.' },
  // { id: '10', time: '12:20 PM', duration: '01h 30m', operator: 'Haryana Roadways', type: 'Non A/C Express Seater Bus', company: 'Govt.' }
];

const LiveTrackingData = [
  { id: 1, time: '06:05 AM', station: 'Hisar', platform: '0 Km Platform' },
  { id: 2, time: '07:00 AM', station: 'Hansi', platform: '30 Km Platform' },
  { id: 3, time: '07:30 AM', station: 'Jind', platform: '75 Km Platform' },
  { id: 4, time: '08:15 AM', station: 'Panipat', platform: '120 Km Platform' },
  { id: 5, time: '10:00 AM', station: 'Haridwar', platform: '300 Km Platform' }
];

export { cities, buses, LiveTrackingData };
