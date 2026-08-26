import { OfficeLocation } from '../types';

export const officeLocations: OfficeLocation[] = [
  {
    city: 'Raipur (Headquarters)',
    role: 'Global Technology Development Center & Corporate HQ',
    address: 'EVD Technology Hub, Raipur, Chhattisgarh, India - 492001',
    phone: '+91 91799 44409',
    email: 'contact@evdtechnology.com',
    timings: 'Monday – Saturday: 9:30 AM – 6:30 PM IST',
    isHQ: true
  },
  {
    city: 'Global Delivery & Enterprise Client Solutions',
    role: 'Enterprise Solutions & Client Engagement Hub',
    address: 'Serving enterprise clients across India, North America, Middle East, and Asia-Pacific via dedicated ODC and remote squads.',
    phone: '+91 91799 44409',
    email: 'arti.evdt@gmail.com',
    timings: '24/7 Global Client Support & Escalations',
    isHQ: false
  }
];
