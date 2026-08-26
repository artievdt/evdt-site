import { ProductItem } from '../types';

export const productsData: ProductItem[] = [
  {
    id: 'evd-academy',
    slug: 'evd-academy',
    name: 'EVD Academy',
    tagline: 'Enterprise-grade Learning Management System (LMS) & Live Online Classroom Accelerator.',
    category: 'EdTech & Learning Platforms',
    badge: 'Flagship EdTech Suite',
    shortDescription: 'Complete white-label learning platform with live video streaming, anti-piracy DRM video security, interactive mock exams, student progress tracking, and fee automation.',
    fullDescription: 'EVD Academy is a battle-tested, scalable LMS platform engineered to support 100,000+ concurrent students. Built with multi-layered content protection (encrypted video streaming, dynamic watermarking, screen recording detection), automated fee collection, live doubt forums, and comprehensive test series engines.',
    problemStatement: 'Institutions struggle with pirated video lectures, high streaming server costs, fragmented student communication, and manual fee collection across multiple coaching branches.',
    solutionOverview: 'EVD Academy centralizes live streaming, recorded video DRM security, interactive mock tests with all-India ranking, student attendance, and payment gateways into a unified web and mobile application.',
    keyFeatures: [
      { title: 'Anti-Piracy DRM Video Engine', description: 'AES-128 encrypted HLS streaming with dynamic student phone-number watermark overlays and screen-record blocking.' },
      { title: 'Live Classroom & Interactive Chat', description: 'Low-latency interactive live streaming with moderator controls, hand-raise feature, and real-time live polls.' },
      { title: 'Comprehensive Mock Exam Suite', description: 'NTA/JEE/NEET pattern mock tests with sectional timers, negative marking, instant percentiles, and video solutions.' },
      { title: 'Automated Fee Management & EMI', description: 'Integrated payment gateways, instalment schedules, automated WhatsApp fee payment reminders, and digital receipts.' },
      { title: 'Mobile App for Android & iOS', description: 'Offline video downloads, push notification alerts for live classes, and student performance dashboard.' },
      { title: 'Multi-Branch Admin Portal', description: 'Role-based access for teachers, counsellors, branch managers, and central directors.' }
    ],
    businessBenefits: [
      { metric: 'Zero', title: 'Content Leakage', description: 'Multi-layer DRM security prevents unauthorized screen capture and account sharing.' },
      { metric: '100k+', title: 'Concurrent Capacity', description: 'Autoscaling cloud architecture effortlessly handles exam results and live batch surges.' },
      { metric: '90%', title: 'Reduced Admin Overhead', description: 'Automated attendance, test grading, and fee receipt generation.' }
    ],
    userRoles: [
      { role: 'Student', description: 'Access live classes, offline downloads, practice quizzes, test reports, and raise doubts.', permissions: ['View lectures', 'Take exams', 'Download notes', 'Ask questions'] },
      { role: 'Faculty / Educator', description: 'Conduct live lectures, upload assignments, grade subjective tests, and answer doubts.', permissions: ['Host live streams', 'Upload course content', 'Grade tests'] },
      { role: 'Academic Director', description: 'Oversee faculty performance, student retention metrics, batch schedules, and fee collections.', permissions: ['Master analytics', 'Branch management', 'Fee reconciliation', 'Staff access'] }
    ],
    workflow: [
      { step: 1, title: 'Course & Batch Setup', description: 'Curriculum structuring, live class schedules, pricing tiers, and study material uploads.' },
      { step: 2, title: 'Student Enrollment & Onboarding', description: 'Self-serve web/app signups with instant OTP verification and fee gateway checkout.' },
      { step: 3, title: 'Interactive Learning & Quizzes', description: 'Daily live classes, automated attendance logging, and topic-wise diagnostic tests.' },
      { step: 4, title: 'Mock Exam & Performance Analytics', description: 'Full-length simulated exams with detailed strength/weakness analysis.' }
    ],
    integrations: ['Razorpay', 'Cashfree', 'Stripe', 'AWS IVS (Interactive Video Service)', 'Zoom API', 'Twilio / WhatsApp Business API', 'Firebase Cloud Messaging'],
    techStack: ['React.js', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Flutter (iOS & Android)', 'AWS CloudFront & S3 DRM'],
    securitySpecs: ['Dynamic Watermarking', 'Encrypted HLS Streaming', 'Device Binding (1 Device Limit)', 'Screen Capture Prevention', 'GDPR/Data Privacy Compliant'],
    targetIndustries: ['EdTech & Coaching Institutes', 'Universities & Colleges', 'Corporate Training Centers', 'Skill Certification Academies'],
    faqs: [
      { question: 'Can students download videos for offline viewing without extracting the file?', answer: 'Yes! Our mobile application uses local encrypted storage where videos can be watched offline inside the app but cannot be shared, exported, or viewed outside the app.' },
      { question: 'Does EVD Academy support both objective and subjective exams?', answer: 'Yes. It supports MCQ, multi-select, numerical input tests with automatic scoring, as well as subjective answer sheet uploads graded manually by teachers with rubric scoring.' }
    ],
    demoCapabilities: ['Interactive Mock Test Simulator', 'DRM Protected Video Player Sample', 'Student Performance Analytics Dashboard', 'Course Builder Admin Console']
  },
  {
    id: 'erp-crm-suite',
    slug: 'erp-crm-suite',
    name: 'EVD Enterprise ERP/CRM Suite',
    tagline: 'Modular enterprise business operations platform with zero per-user licensing fees.',
    category: 'Enterprise Management',
    badge: 'Enterprise Platform',
    shortDescription: 'Unified cloud ERP & CRM platform orchestrating lead management, multi-branch inventory, procurement, payroll, and GST accounting.',
    fullDescription: 'EVD Enterprise ERP/CRM Suite replaces disconnected software with a unified, real-time operating backbone. Designed specifically for mid-market and enterprise organizations, it offers full customization, multi-entity support, automated approval matrices, and complete data sovereignty without recurring per-seat penalties.',
    problemStatement: 'Businesses suffer from data fragmentation between sales reps, warehouse managers, and accountants, leading to lost customer leads, inventory stockouts, and delayed financial reporting.',
    solutionOverview: 'A centralized operational platform where every lead, purchase order, warehouse stock transfer, and payroll cycle updates in real time across the entire organization.',
    keyFeatures: [
      { title: 'Omnichannel Lead & Deal Pipeline', description: 'Auto-capture leads from IndiaMART, website, WhatsApp, and trade shows with smart rep allocation.' },
      { title: 'Multi-Warehouse & Serial Inventory', description: 'Real-time stock valuation (FIFO/Weighted Average), batch expiry alerts, and inter-branch transfers.' },
      { title: '3-Way Procurement & PO Approval', description: 'Purchase requisition approval hierarchies, vendor quotation comparisons, and automated PO generation.' },
      { title: 'Integrated HRMS & Payroll', description: 'Biometric device sync, leave policies, automated salary slip generation with PF, ESIC, and TDS deductions.' },
      { title: 'GST & e-Way Bill Invoicing', description: 'One-click GST tax invoice generation, e-Way bill portal integration, and automated payment reminders.' },
      { title: 'Executive BI & Profitability Dashboards', description: 'Visual cash flow charts, branch-wise profitability, sales velocity, and dead stock alerts.' }
    ],
    businessBenefits: [
      { metric: '100%', title: 'Data Sovereignty', description: 'Hosted on your dedicated private cloud or on-premise servers with no user license limits.' },
      { metric: '3.5x', title: 'Faster Order Fulfillment', description: 'Automated sales order routing directly to the closest regional warehouse.' },
      { metric: 'Zero', title: 'Inventory Discrepancy', description: 'Barcode & QR scan verification at every stage of goods receipt and dispatch.' }
    ],
    userRoles: [
      { role: 'Sales Executive', description: 'Log calls, update deal stages, generate instant quotations, and check stock availability.', permissions: ['Leads', 'Quotes', 'Sales Orders'] },
      { role: 'Warehouse Manager', description: 'Accept Goods Receipts (GRN), perform barcode dispatch scanning, and manage stock transfers.', permissions: ['GRN', 'Dispatch', 'Stock Audit'] },
      { role: 'CFO / Finance Controller', description: 'Review tax ledgers, approve high-value POs, monitor accounts receivable, and audit balances.', permissions: ['Full Financials', 'Approvals', 'Tax Filings'] }
    ],
    workflow: [
      { step: 1, title: 'Lead Capture & Quotation', description: 'Capture inquiry, verify warehouse stock, and send branded PDF quote in seconds.' },
      { step: 2, title: 'Sales Order & Credit Check', description: 'Verify customer credit balance and auto-route order to designated warehouse.' },
      { step: 3, title: 'Picking, Packing & e-Way Bill', description: 'Barcode scanned verification, automated packaging slip, and e-way bill generation.' },
      { step: 4, title: 'Invoice & Payment Tracking', description: 'Digital tax invoice dispatch with payment link and automated ledger entry.' }
    ],
    integrations: ['Tally Prime / ERP 9', 'Zoho Books', 'WhatsApp Business API', 'Razorpay', 'ICICI / HDFC Corporate Banking', 'Biometric Fingerprint/Face Devices'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Metabase', 'Tailwind CSS'],
    securitySpecs: ['Role-Based Access Control (RBAC)', 'Field-Level Data Masking', 'Audit Trails for Every Edit', 'Encrypted Database Backups'],
    targetIndustries: ['Manufacturing & Assembly', 'Wholesale Distribution', 'Retail Chains', 'Engineering & Construction', 'Services Enterprises'],
    faqs: [
      { question: 'Can we customize the approval workflows for our specific hierarchy?', answer: 'Yes! The ERP suite features a visual workflow engine where you can configure multi-tier approval rules based on order value, department, or discount percentages.' }
    ],
    demoCapabilities: ['Live Lead Pipeline Simulator', 'Interactive Inventory Stock Grid', 'Automated GST Invoice Generator', 'Financial Health Dashboard']
  },
  {
    id: 'transport-management-system',
    slug: 'transport-management-system',
    name: 'Transport Management System (TMS)',
    tagline: 'End-to-end fleet tracking, trip dispatching, freight billing, and vehicle maintenance automation.',
    category: 'Logistics & Supply Chain',
    badge: 'Logistics Suite',
    shortDescription: 'Complete logistics and fleet management platform connecting dispatchers, vehicle owners, drivers, and corporate shippers with live GPS and automated billing.',
    fullDescription: 'EVD Transport Management System optimizes fleet operations from trip planning and automated freight rate calculation to live GPS tracking, digital Proof of Delivery (e-POD), diesel expense auditing, and driver settlement.',
    problemStatement: 'Fleet owners and 3PL providers suffer from empty backhauls, fuel theft, untracked trip delays, disputed detention charges, and delayed customer billing.',
    solutionOverview: 'A unified digital platform connecting GPS sensors, FASTag toll tracking, driver mobile apps, and shipper billing portals to maximize fleet utilization and reduce turnaround times.',
    keyFeatures: [
      { title: 'Intelligent Trip Planning & Load Dispatch', description: 'Consolidate shipments, match optimal vehicle capacities, and assign drivers automatically.' },
      { title: 'Live GPS & FASTag Toll Integration', description: 'Real-time vehicle tracking, route deviation alerts, speed monitoring, and automated toll expense logging.' },
      { title: 'Digital Proof of Delivery (e-POD)', description: 'Drivers capture consignee digital signature, photo of unloaded goods, and timestamp on mobile app.' },
      { title: 'Fuel & Diesel Expense Auditing', description: 'Track fuel mileage per trip, petrol pump slip verification, and automated fuel efficiency anomaly flags.' },
      { title: 'Driver Settlement & Trip Advance', description: 'Manage trip advances, toll reimbursements, driver batta/incentives, and trip closure settlements.' },
      { title: 'Shipper Customer Tracking Portal', description: 'Live tracking link for clients with estimated time of arrival (ETA) and downloadable e-PODs.' }
    ],
    businessBenefits: [
      { metric: '18%', title: 'Fuel Cost Savings', description: 'Optimized routing and automated mileage discrepancy detection eliminate fuel pilferage.' },
      { metric: '4x', title: 'Faster Invoicing', description: 'Instant digital POD upload triggers immediate client billing instead of waiting for paper mail.' },
      { metric: '99.2%', title: 'On-Time Fleet Visibility', description: 'Live geofence alerts notify warehouse teams 30 minutes before truck arrival.' }
    ],
    userRoles: [
      { role: 'Fleet Dispatcher', description: 'Assign vehicles to orders, approve trip advances, and monitor active fleet status.', permissions: ['Trip creation', 'Vehicle assignment', 'Advance approval'] },
      { role: 'Truck Driver', description: 'View assigned trips, update checkpoint milestones, record diesel slips, and upload POD photo.', permissions: ['Mobile app trip view', 'POD upload', 'Expense capture'] },
      { role: 'Shipper Client', description: 'Track shipment status in real time and download delivery acknowledgments.', permissions: ['Live tracking', 'Invoice view', 'POD download'] }
    ],
    workflow: [
      { step: 1, title: 'Consignment Booking & Vehicle Allocation', description: 'Select goods type, weight, destination, and allocate optimal vehicle.' },
      { step: 2, title: 'Trip Advance & Dispatch', description: 'Issue fuel card / bank advance and start real-time GPS tracking.' },
      { step: 3, title: 'En-Route Monitoring & Geofence', description: 'Automated milestone notifications and delay alerts.' },
      { step: 4, title: 'e-POD & Instant Freight Billing', description: 'Driver captures signature on delivery; invoice generated automatically.' }
    ],
    integrations: ['GPS Telematics (Teltonika, Convex, BlackBuck API)', 'FASTag NPCI API', 'WhatsApp Tracking Bot', 'Payment Gateways', 'SMS Gateways'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Flutter (Driver App)', 'Leaflet / OpenStreetMap', 'Redis Geo'],
    securitySpecs: ['Tamper-proof GPS logs', 'Encrypted POD Storage', 'Driver Document Verification (DL, RC, Fitness, Insurance alerts)'],
    targetIndustries: ['Freight Forwarders & 3PL', 'Mining & Heavy Material Logistics', 'Cement & Steel Transport', 'FMCG Distribution Fleets'],
    faqs: [
      { question: 'Can the driver app work in areas with poor cellular connectivity?', answer: 'Yes! The driver app caches trip actions and offline photos, uploading them automatically the moment network coverage is restored.' }
    ],
    demoCapabilities: ['Live Fleet GPS Map Simulator', 'Instant Trip Dispatcher Console', 'Digital POD Upload Demo', 'Fuel Economy Calculator']
  },
  {
    id: 'petrol-pump-management',
    slug: 'petrol-pump-management',
    name: 'Petrol Pump Management Solution',
    tagline: 'Automated fuel nozzle meter tracking, daily shift reconciliations, credit customer ledger, and dip stock audits.',
    category: 'Retail & Fuel Automation',
    badge: 'Specialized Solution',
    shortDescription: 'Dedicated fuel station management software automating shift handovers, credit sales management, lube sales, tank dip audits, and daily cash reconciliation.',
    fullDescription: 'Operating a retail fuel station involves managing high daily cash volumes, credit billing for transport fleets, tank evaporation losses, and multi-nozzle meter tracking across morning and night shifts. Our Petrol Pump Management solution eliminates manual register books with a touch-friendly, audit-proof platform.',
    problemStatement: 'Fuel stations suffer from manual cashier calculation errors, unaccounted credit sales to local vehicle owners, meter reading discrepancies, and difficulty reconciling underground tank dip stock.',
    solutionOverview: 'A specialized touch-screen and mobile solution that records nozzle opening/closing readings, verifies dip stocks against sales, tracks credit slips, and generates daily sales summaries in under 5 minutes.',
    keyFeatures: [
      { title: 'Nozzle Meter & Shift Settlement', description: 'Opening/closing digital meter readings, test fuel adjustments, and automated sales volume computation.' },
      { title: 'Fleet Credit Customer Management', description: 'Vehicle-wise credit slips, driver signature capture, credit limit enforcement, and monthly billing.' },
      { title: 'Underground Tank Dip & Density Audit', description: 'Record morning and evening tank dip levels, density testing, temperature corrections, and water dip logs.' },
      { title: 'Cash, Card, UPI & Fleet Card Reconciliation', description: 'Shift-wise payment breakdown highlighting exact cashier excess/shortage.' },
      { title: 'Lubricant & Value Added Product Sales', description: 'Track engine oil inventory, batch numbers, MRPs, and attendant incentive bonuses.' },
      { title: 'Daily Oil Company (OMC) Reconciliation', description: 'Tanker load invoice entry, decantation log, variation calculation against meter sales.' }
    ],
    businessBenefits: [
      { metric: '100%', title: 'Cashier Accountability', description: 'Zero confusion over shift shortages with mandatory cashier signoffs.' },
      { metric: '5 Mins', title: 'Daily Shift Settlement', description: 'Replace 2 hours of manual ledger calculations with instant automated reconciliation.' },
      { metric: 'Zero', title: 'Unbilled Credit Losses', description: 'Instant SMS alerts sent to fleet owners whenever a vehicle fills on credit.' }
    ],
    userRoles: [
      { role: 'Shift Attendant / Cashier', description: 'Enter meter readings, collect payments, and submit shift cash breakdown.', permissions: ['Shift entry', 'Credit slip entry', 'Lube sales'] },
      { role: 'Station Manager', description: 'Review shift balances, log tanker decantations, approve credit adjustments, and audit dip levels.', permissions: ['Dip logs', 'Tanker receipts', 'Bank deposit entry'] },
      { role: 'Station Owner / Dealer', description: 'Real-time sales dashboard on mobile, live cash-in-hand, credit recovery reports, and P&L.', permissions: ['Master analytics', 'Pricing adjustments', 'Credit customer limits'] }
    ],
    workflow: [
      { step: 1, title: 'Shift Handover & Meter Entry', description: 'Enter start and end readings for each dispensing nozzle.' },
      { step: 2, title: 'Credit & Payment Classification', description: 'Log credit sales with vehicle number and classify cash, UPI, and POS slips.' },
      { step: 3, title: 'Tank Dip & Evaporation Check', description: 'Compare meter volume sold against underground tank dip difference.' },
      { step: 4, title: 'Daily Summary & Bank Deposit', description: 'Generate audit-ready daily DSR report and reconcile with bank deposits.' }
    ],
    integrations: ['WhatsApp / SMS for Credit Invoices', 'Thermal POS Printers', 'Tally Prime Auto-Posting', 'Payment QR Codes', 'Fuel Automation ATG Systems (optional)'],
    techStack: ['React', 'Node.js', 'SQLite / PostgreSQL', 'PWA (Progressive Web App)', 'Tailwind CSS'],
    securitySpecs: ['Restricted Backdated Entry Edits', 'Owner Override Passwords', 'Daily Automated Cloud Backups'],
    targetIndustries: ['IOCL, HPCL, BPCL Fuel Station Dealers', 'Private Retail Fuel Outlets (Nayara, Reliance, Shell)', 'Fleet In-House Fuel Depots'],
    faqs: [
      { question: 'Can pump attendants use this on a low-cost Android tablet or mobile?', answer: 'Yes! The UI is designed with large touch-friendly buttons and high-contrast numbers for effortless use on basic Android tablets and phones.' }
    ],
    demoCapabilities: ['Nozzle Shift Settlement Calculator', 'Credit Customer Billing Simulator', 'Underground Tank Dip Audit Tool']
  },
  {
    id: 'quick-commerce-solution',
    slug: 'quick-commerce',
    name: 'Quick Commerce Platform Accelerator',
    tagline: 'Sub-15-minute grocery and retail delivery platform with dark store inventory sync and rider routing.',
    category: 'Hyperlocal & Retail',
    badge: 'High Velocity Commerce',
    shortDescription: 'Turnkey Quick-Commerce solution engineered for hyperlocal delivery, dark store picking apps, live rider dispatching, and sub-second catalog search.',
    fullDescription: 'EVD Quick Commerce Accelerator provides everything needed to launch and scale an on-demand hyperlocal 10-to-30 minute delivery service. Comprising ultra-fast consumer apps, dark store picker apps with barcode validation, and rider routing algorithms.',
    problemStatement: 'Traditional e-commerce platforms are too slow for quick commerce, failing to handle real-time dark store inventory counts, lightning-fast order picking, and automated rider dispatching within 2 minutes.',
    solutionOverview: 'A specialized low-latency architecture with instant product catalog search, dark store geofencing, picker order aggregation, and dynamic rider assignment.',
    keyFeatures: [
      { title: 'Sub-Second Consumer Web & App', description: 'Lightning-fast product search, live stock availability, cart recommendations, and 10-second checkout.' },
      { title: 'Dark Store Picker Application', description: 'Optimized warehouse aisle routing, barcode verification for picked items, and out-of-stock substitutions.' },
      { title: 'Automated Rider Dispatching Engine', description: 'Algorithm assigns the nearest available delivery partner before picker finishes packaging.' },
      { title: 'Live Micro-Tracking & ETA', description: 'High-frequency GPS rider tracking on live map with real-time ETA updates to customer.' },
      { title: 'Real-Time Inventory & Expiry Tracking', description: 'Automatic stock decrement upon cart locking and batch expiry discounts.' }
    ],
    businessBenefits: [
      { metric: '90 Sec', title: 'Average Pick Time', description: 'Dark store aisle navigation and barcode verification cut packing times in half.' },
      { metric: '99.9%', title: 'Inventory Accuracy', description: 'Real-time cart locking prevents customers from ordering out-of-stock items.' },
      { metric: '< 15 Min', title: 'Total Delivery Cycle', description: 'Integrated dispatch algorithm matches rider before packing completion.' }
    ],
    userRoles: [
      { role: 'Customer', description: 'Browse hyperlocal catalog, place order, and track delivery partner live.', permissions: ['Order', 'Pay', 'Track', 'Rate'] },
      { role: 'Dark Store Picker', description: 'Receive picking tasks, scan barcodes, pack items, and hand over to rider.', permissions: ['Pick list', 'Barcode scan', 'Item substitute'] },
      { role: 'Delivery Partner', description: 'Accept pickup request, navigate to customer location, and confirm OTP delivery.', permissions: ['Rider app', 'Navigation', 'OTP delivery'] }
    ],
    workflow: [
      { step: 1, title: 'Customer Order Placed', description: 'Order assigned to nearest dark store within 200 milliseconds.' },
      { step: 2, title: 'Picker Route Optimization', description: 'Picker guided through shortest warehouse path to scan and bag items.' },
      { step: 3, title: 'Rider Handover & Route', description: 'Rider collects sealed bag and follows turn-by-turn live navigation.' },
      { step: 4, title: 'OTP Delivery Confirmation', description: 'Customer provides 4-digit OTP; inventory and financial ledger updated.' }
    ],
    integrations: ['Google Maps Platform', 'Razorpay / PayU', 'Twilio / MSG91', 'Thermal Label Printers', 'AWS ECS'],
    techStack: ['Next.js', 'Node.js', 'Redis (Caching & Geofencing)', 'PostgreSQL', 'Flutter (Customer & Rider Apps)', 'Socket.IO'],
    securitySpecs: ['Encrypted Customer Contact Masking', 'OTP Delivery Verification', 'PCI-DSS Compliant Payment Flow'],
    targetIndustries: ['Grocery & Fresh Produce', 'Pharmacy & Medicines', 'Meat & Seafood Delivery', 'Instant Electronics & Cosmetics'],
    faqs: [
      { question: 'How does the platform handle items that go out of stock during picking?', answer: 'The picker app alerts the picker immediately to suggest pre-approved brand substitutes, triggering an instant prompt to the customer’s phone.' }
    ],
    demoCapabilities: ['Sub-Second Product Search Simulator', 'Picker App Barcode Scanner Demo', 'Live Rider GPS Tracking Screen']
  },
  {
    id: 'inventory-management-system',
    slug: 'inventory-management',
    name: 'Advanced Inventory & Warehouse Management',
    tagline: 'Multi-location warehouse control, batch & serial tracking, barcode workflows, and automated reorder intelligence.',
    category: 'Supply Chain & Operations',
    badge: 'Operations Suite',
    shortDescription: 'Enterprise WMS and inventory platform delivering 100% stock visibility across central warehouses, transit hubs, and retail outlets.',
    fullDescription: 'Engineered for distributors, manufacturers, and multi-location retail chains, EVD Inventory Management System eliminates stock discrepancies, dead inventory, and order fulfillment errors through barcode/QR-driven warehouse processes.',
    problemStatement: 'Companies lose revenue due to misplaced warehouse stock, expired batches, manual counting errors, and lack of visibility into inventory sitting in transit.',
    solutionOverview: 'A comprehensive Warehouse Management System (WMS) with bin-location mapping, FIFO/FEFO automation, automated stock replenishments, and barcode scanning.',
    keyFeatures: [
      { title: 'Bin, Rack & Shelf Level Mapping', description: 'Exact 3D warehouse coordinate mapping ensuring workers locate items in seconds.' },
      { title: 'Batch, Lot & Serial Tracking', description: 'Full traceability from raw material supplier to finished customer shipment.' },
      { title: 'FIFO & Expiry Management (FEFO)', description: 'System forces oldest stock to be picked first, eliminating expired product write-offs.' },
      { title: 'Automated Purchase Reorder Triggers', description: 'Algorithm calculates dynamic safety stock and generates purchase requisitions.' },
      { title: 'Inter-Warehouse Stock Transfers', description: 'In-transit stock tracking with Gate-Pass generation and receiving inspection.' }
    ],
    businessBenefits: [
      { metric: '99.8%', title: 'Stock Accuracy', description: 'Barcode verification at inward, put-away, and dispatch eliminates inventory shrinkage.' },
      { metric: '30%', title: 'Lower Carrying Costs', description: 'Dynamic safety stock formulas prevent over-ordering dead inventory.' }
    ],
    userRoles: [
      { role: 'Warehouse Inward Officer', description: 'Receive shipments, perform quality checks, and assign bin locations.', permissions: ['GRN', 'Bin assignment', 'Quality check'] },
      { role: 'Order Picker / Packer', description: 'Scan pick-lists, verify items, pack into cartons, and generate shipping labels.', permissions: ['Pick scanning', 'Label printing'] }
    ],
    workflow: [
      { step: 1, title: 'Inward & GRN', description: 'Scan vendor shipments against PO and print barcode labels.' },
      { step: 2, title: 'Put-Away to Bin', description: 'Direct worker to optimal available warehouse rack and bin location.' },
      { step: 3, title: 'Pick & Pack Verification', description: 'Barcode verification ensures 0% wrong item dispatches.' }
    ],
    integrations: ['Zebra & Honeywell Barcode Scanners', 'Thermal Label Printers', 'ERP & Accounting Systems', 'Courier APIs'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Android Barcode SDK'],
    securitySpecs: ['Audit logs for every stock adjustment', 'Manager authorization required for scrap write-offs'],
    targetIndustries: ['Pharma & Healthcare Logistics', 'FMCG Distribution', 'Automotive Spare Parts', 'Retail & Apparel Warehousing'],
    faqs: [
      { question: 'Does it support handheld barcode and QR scanner devices?', answer: 'Yes! It is fully compatible with industrial Android handheld terminals (Zebra, Honeywell, Chainway) as well as regular smartphone cameras.' }
    ],
    demoCapabilities: ['Warehouse Bin Location Visualizer', 'Barcode Inward / Dispatch Scanner', 'Reorder Point Intelligence Tool']
  },
  {
    id: 'ai-tele-caller',
    slug: 'ai-tele-caller',
    name: 'AI Tele Caller & Voice Agent',
    tagline: 'Conversational voice AI that qualifies leads, handles payment reminders, and conducts customer surveys at scale.',
    category: 'Artificial Intelligence',
    badge: 'AI Innovation',
    shortDescription: 'Enterprise AI voice calling platform capable of conducting natural, human-like voice conversations in multiple languages for lead qualification, reminders, and feedback.',
    fullDescription: 'EVD AI Tele Caller transforms contact center economics by automating thousands of outbound and inbound customer calls simultaneously. Utilizing advanced speech recognition, natural language understanding, and emotional tone modulation, our voice agents converse fluently in English, Hindi, and regional languages.',
    problemStatement: 'Sales and collection teams spend 70% of their day dialing unanswered numbers, facing high agent turnover and inconsistent script adherence.',
    solutionOverview: 'An intelligent AI voice agent that dials leads, introduces your product, answers questions naturally, qualifies interest, and instantly transfers hot prospects to human closers.',
    keyFeatures: [
      { title: 'Human-Like Conversational AI', description: 'Ultra-low latency speech synthesis with natural pauses, emotional inflection, and interruption handling.' },
      { title: 'Multi-Lingual Voice Support', description: 'Fluent conversations in Indian English, Hindi, Hinglish, and regional dialects.' },
      { title: 'Live Call Transfer to Human Reps', description: 'Instantly patch warm, interested leads directly to your sales team’s phone.' },
      { title: 'Automated CRM Sync & Call Transcripts', description: 'Full audio recording, sentiment score, and text transcript pushed directly to your CRM.' },
      { title: 'High-Volume Concurrent Calling', description: 'Dial 10,000+ numbers per hour for urgent notifications, payment dues, or event RSVPs.' }
    ],
    businessBenefits: [
      { metric: '75%', title: 'Cost Reduction', description: 'Automate tier-1 qualification calls at a fraction of manual tele-calling team expenses.' },
      { metric: '10x', title: 'Lead Reach Velocity', description: 'Contact 100% of newly registered inbound leads within 60 seconds of form fill.' },
      { metric: '3.2x', title: 'Higher Meeting Booking', description: 'Instant response times prevent leads from cooling down or contacting competitors.' }
    ],
    userRoles: [
      { role: 'Sales / Growth Manager', description: 'Configure call scripts, set campaign schedules, and monitor qualification conversion rates.', permissions: ['Campaign setup', 'Script builder', 'Analytics'] },
      { role: 'Sales Closer', description: 'Receive live patched calls from qualified prospects with instant on-screen context.', permissions: ['Call reception', 'Lead disposition'] }
    ],
    workflow: [
      { step: 1, title: 'Upload Lead List & Script', description: 'Connect CRM webhook or upload CSV list with custom qualification questions.' },
      { step: 2, title: 'AI Voice Conversation', description: 'AI dials lead, handles objections, and gathers requirements naturally.' },
      { step: 3, title: 'Instant Transfer or Meeting Booking', description: 'Book Google Calendar appointment or patch live call to available sales rep.' }
    ],
    integrations: ['Twilio / Exotel / Tata Telephony', 'HubSpot / Salesforce / Zoho CRM', 'Google Calendar API', 'WhatsApp for instant follow-up'],
    techStack: ['Python', 'FastAPI', 'WebRTC', 'OpenAI Whisper / ElevenLabs', 'LangChain', 'Redis'],
    securitySpecs: ['DND (Do Not Disturb) Compliance Filtering', 'Encrypted Call Audio Storage', 'Automated Consent Recording'],
    targetIndustries: ['Real Estate & Construction', 'EdTech & Coaching Admissions', 'BFSI & Loan Recovery', 'Automobile Dealerships'],
    faqs: [
      { question: 'What happens if a customer interrupts the AI mid-sentence?', answer: 'Our voice agent features instant speech barge-in detection. It pauses immediately, listens to the customer’s question, and responds appropriately just like a human caller.' }
    ],
    demoCapabilities: ['Interactive AI Voice Conversation Audio Sample', 'Call Script & Objection Builder', 'Sentiment & Transcript Dashboard']
  },
  {
    id: 'construction-erp',
    slug: 'construction-erp',
    name: 'EVD Construction & Infra ERP',
    tagline: 'Site progress tracking, Bill of Quantities (BOQ), material reconciliation, and contractor billing.',
    category: 'Engineering & Construction',
    badge: 'Infra Suite',
    shortDescription: 'Dedicated construction project management software tracking site DPRs, cement/steel consumption, contractor running bills, and milestone profitability.',
    fullDescription: 'Civil engineering and real estate construction projects require rigorous oversight of material wastage, labor contractor measurements, equipment rentals, and client milestone claims. EVD Construction ERP bridges the gap between the construction site and head office.',
    problemStatement: 'Builders suffer from budget overruns, unaccounted material theft at sites, delayed contractor measurement sheets, and lack of real-time project cost tracking.',
    solutionOverview: 'A field-ready construction ERP enabling site engineers to log Daily Progress Reports (DPR), track BOQ material consumption, and generate Joint Measurement Records (JMR).',
    keyFeatures: [
      { title: 'Bill of Quantities (BOQ) & Budgeting', description: 'Item-rate BOQ planning, standard vs. actual variance, and rate-analysis tracking.' },
      { title: 'Site Daily Progress Report (DPR)', description: 'Mobile photo uploads of site progress, worker counts, machinery hours, and weather logs.' },
      { title: 'Material Reconciliation & Wastage Control', description: 'Track cement bags, steel tonnage, sand, and aggregate against theoretical consumption formulas.' },
      { title: 'Subcontractor RA Bills & Measurement Sheets', description: 'Digital Joint Measurement Record (JMR) with automated retention money and TDS deductions.' },
      { title: 'Client Milestone Invoicing', description: 'Generate certified milestone tax invoices linked to architecture signoffs.' }
    ],
    businessBenefits: [
      { metric: '8-12%', title: 'Material Wastage Reduction', description: 'Theoretical vs. actual consumption analysis stops unmonitored site material leakage.' },
      { metric: '100%', title: 'Site-to-HQ Transparency', description: 'Daily geo-tagged photo DPRs keep project directors updated without physical site visits.' }
    ],
    userRoles: [
      { role: 'Site Engineer', description: 'Log daily work, upload site photos, record material receipts, and submit measurement sheets.', permissions: ['DPR entry', 'GRN', 'Measurement entry'] },
      { role: 'Project Manager / Billing Engineer', description: 'Verify contractor measurements, approve material requisitions, and audit BOQ variance.', permissions: ['RA bill approval', 'BOQ audit'] },
      { role: 'Managing Director', description: 'Monitor multi-site timelines, cash flow requirements, and project profitability.', permissions: ['Master financials', 'Project health index'] }
    ],
    workflow: [
      { step: 1, title: 'BOQ & Schedule Baseline', description: 'Import project estimates, line items, and procurement schedules.' },
      { step: 2, title: 'Daily Site Progress (DPR)', description: 'Site engineer logs daily output and material consumption on mobile.' },
      { step: 3, title: 'Contractor Measurement & Billing', description: 'Audit contractor RA bills against physical measurements.' }
    ],
    integrations: ['AutoCAD / Excel BOQ Import', 'Biometric Site Attendance', 'Tally Accounting', 'WhatsApp Site Alert Bot'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Flutter Mobile App', 'Tailwind CSS'],
    securitySpecs: ['Geo-tagged and Timestamped Site Photos', 'Encrypted Measurement Records', 'Multi-Tier Bill Approvals'],
    targetIndustries: ['Civil Infrastructure & Highway Contractors', 'Residential & Commercial Real Estate Builders', 'Industrial Plant EPC Contractors'],
    faqs: [
      { question: 'Can site engineers submit DPRs without internet at remote sites?', answer: 'Yes! The mobile app records site progress and photos offline, uploading everything automatically when the engineer reaches network connectivity.' }
    ],
    demoCapabilities: ['BOQ Material Variance Tracker', 'Site DPR Mobile Submission Demo', 'Subcontractor RA Bill Calculator']
  },
  {
    id: 'manufacturing-erp',
    slug: 'manufacturing-erp',
    name: 'EVD Manufacturing & Production ERP',
    tagline: 'Multi-level Bill of Materials (BOM), shop floor job cards, machine downtime tracking, and quality inspection.',
    category: 'Industrial Manufacturing',
    badge: 'Manufacturing Suite',
    shortDescription: 'Industrial ERP connecting production planning (MRP), shop floor machine tracking, raw material yield analysis, and finished goods quality inspection.',
    fullDescription: 'Designed for discrete and process manufacturing plants, EVD Manufacturing ERP provides deep control over raw material procurement, multi-stage production routings, machine maintenance schedules, worker piece-rate wages, and quality control checkpoints.',
    problemStatement: 'Factories struggle with production delays due to missing component parts, machine breakdowns, untracked scrap generation, and inaccurate per-unit manufacturing cost calculations.',
    solutionOverview: 'A unified shop-floor-to-top-floor ERP that automates Material Requirements Planning (MRP), issues stage-wise job cards, tracks machine OEE, and logs quality checks.',
    keyFeatures: [
      { title: 'Multi-Level Bill of Materials (BOM)', description: 'Configure sub-assemblies, scrap percentages, alternate parts, and labor hour standards.' },
      { title: 'Shop Floor Job Cards & Routing', description: 'Stage-wise job cards, barcode tracking at each workstation, and operator piece-rate tracking.' },
      { title: 'Material Requirements Planning (MRP-I/II)', description: 'Auto-calculate raw material purchasing needs based on active customer order backlog.' },
      { title: 'Machine Maintenance & OEE Tracking', description: 'Preventive maintenance schedules, breakdown ticket logging, and Overall Equipment Effectiveness (OEE).' },
      { title: 'Quality Assurance (QA/QC) & Inspecation', description: 'Inward raw material inspection, in-process dimension checks, and Pre-Dispatch Inspection (PDI) certificates.' }
    ],
    businessBenefits: [
      { metric: '22%', title: 'Reduced Machine Downtime', description: 'Automated preventive maintenance schedules prevent unexpected line stoppages.' },
      { metric: '100%', title: 'Accurate Cost per Unit', description: 'Exact allocation of raw material, electricity, labor, and machine depreciation per batch.' }
    ],
    userRoles: [
      { role: 'Production Supervisor', description: 'Issue job cards, assign machine operators, and log stage completions.', permissions: ['Job card issuance', 'Machine allocation'] },
      { role: 'QC Inspector', description: 'Perform parameter testing, approve batches, or flag scrap rejections.', permissions: ['QC signoff', 'Scrap logging'] }
    ],
    workflow: [
      { step: 1, title: 'Sales Order & MRP Run', description: 'System checks raw material inventory and triggers purchase requisitions.' },
      { step: 2, title: 'Production Order & Job Cards', description: 'Release job cards to machining, assembly, testing, and packaging lines.' },
      { step: 3, title: 'QC Signoff & Finished Goods GRN', description: 'Quality inspection certificate generated and items placed in dispatch warehouse.' }
    ],
    integrations: ['PLC / SCADA Machine Telemetry', 'Tally Prime Ledger Auto-Sync', 'Barcode & Weighbridge Systems'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Tailwind CSS'],
    securitySpecs: ['Formula & Recipe Encryption for Process Manufacturing', 'Strict Operator Signoffs'],
    targetIndustries: ['Automotive Component Makers', 'Steel, Metal & Fabrication Plants', 'Plastics & Packaging Units', 'Food & Beverage Processing'],
    faqs: [
      { question: 'Does it support process manufacturing recipes with batch yield variations?', answer: 'Yes! It supports formula revisions, batch pot losses, scrap recalculation, and dynamic unit-of-measure conversions.' }
    ],
    demoCapabilities: ['Multi-Level BOM Visualizer', 'Shop Floor Job Card Tracker', 'Production Cost Breakdown Tool']
  }
];
