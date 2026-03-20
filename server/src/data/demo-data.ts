// ============================================================
// Demo Data — Realistic Shopify Store Data
// ============================================================
// 50+ products across categories, 200+ orders, customer profiles.
// All data is typed and structured to match Shopify API schemas.
// ============================================================

export interface DemoProduct {
  id: string;
  title: string;
  description: string;
  vendor: string;
  productType: string;
  tags: string[];
  price: number;
  compareAtPrice: number | null;
  inventory: number;
  sku: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface DemoCustomer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  ordersCount: number;
  totalSpent: number;
}

export interface DemoOrder {
  id: string;
  orderNumber: number;
  customerId: string;
  lineItems: Array<{
    productId: string;
    title: string;
    quantity: number;
    price: number;
  }>;
  totalPrice: number;
  createdAt: string;
  financialStatus: 'paid' | 'pending' | 'refunded';
  fulfillmentStatus: 'fulfilled' | 'unfulfilled' | 'partial';
}

// ---- PRODUCTS ----
export const demoProducts: DemoProduct[] = [
  // Electronics
  { id: 'prod_001', title: '4K Ultra HD Monitor 27"', description: 'Professional 4K monitor with color accuracy', vendor: 'TechGear', productType: 'Electronics', tags: ['monitor', '4k'], price: 449.99, compareAtPrice: 549.99, inventory: 45, sku: 'TG-4K-27', image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&q=80', createdAt: '2024-01-15T08:00:00Z', updatedAt: '2024-02-28T12:00:00Z' },
  { id: 'prod_002', title: 'Adjustable Dumbbells Set', description: 'Quick-adjust weights for home workout', vendor: 'FitHome', productType: 'Fitness', tags: ['workout', 'dumbbells'], price: 299.99, compareAtPrice: 349.99, inventory: 12, sku: 'FH-ADJ-DB', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3da3?w=800&q=80', createdAt: '2024-01-20T10:00:00Z', updatedAt: '2024-02-28T12:00:00Z' },
  { id: 'prod_003', title: 'Antivirus Pro License', description: 'Maximum protection for up to 3 devices', vendor: 'SecureNet', productType: 'Software', tags: ['antivirus'], price: 39.99, compareAtPrice: 59.99, inventory: 999, sku: 'SN-AV-PRO', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80', createdAt: '2024-01-10T09:00:00Z', updatedAt: '2024-02-28T12:00:00Z' },
  { id: 'prod_004', title: 'Back-lit Keyboard Case', description: 'Protective case with integrated keyboard', vendor: 'TabAcc', productType: 'Accessories', tags: ['keyboard'], price: 129.99, compareAtPrice: null, inventory: 85, sku: 'TA-BKC-01', image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&q=80', createdAt: '2024-02-05T14:00:00Z', updatedAt: '2024-02-28T12:00:00Z' },
  { id: 'prod_005', title: 'USB-C Docking Station', description: '12-in-1 USB-C hub with dual HDMI, ethernet, and PD charging', vendor: 'HubConnect', productType: 'Electronics', tags: ['usb-c', 'dock', 'hub', 'accessories'], price: 89.99, compareAtPrice: null, inventory: 120, sku: 'HC-UDS-012', image: 'https://images.unsplash.com/photo-1563811771046-ba984ff30900?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-05T10:00:00Z', updatedAt: '2024-03-01T12:00:00Z' },
  { id: 'prod_006', title: 'Webcam HD 1080p', description: 'Full HD webcam with auto-focus and noise reduction mic', vendor: 'CamView', productType: 'Electronics', tags: ['webcam', 'hd', 'streaming', 'video'], price: 59.99, compareAtPrice: 79.99, inventory: 175, sku: 'CV-WHD-001', image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-10T10:00:00Z', updatedAt: '2024-03-08T12:00:00Z' },
  { id: 'prod_007', title: 'Portable SSD 1TB', description: 'Ultra-fast 1TB portable SSD with USB 3.2', vendor: 'DataVault', productType: 'Electronics', tags: ['ssd', 'storage', 'portable', 'usb'], price: 109.99, compareAtPrice: 139.99, inventory: 68, sku: 'DV-PSSD-1T', image: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-15T10:00:00Z', updatedAt: '2024-03-12T12:00:00Z' },
  { id: 'prod_008', title: 'Noise Cancelling Earbuds', description: 'True wireless earbuds with ANC and 24hr case battery', vendor: 'AudioTech', productType: 'Electronics', tags: ['earbuds', 'wireless', 'anc', 'audio'], price: 149.99, compareAtPrice: 179.99, inventory: 92, sku: 'AT-NCE-001', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-20T10:00:00Z', updatedAt: '2024-03-15T12:00:00Z' },

  // Home & Office
  { id: 'prod_009', title: 'Standing Desk Converter', description: 'Adjustable sit-stand desk riser with keyboard tray', vendor: 'DeskUp', productType: 'Home & Office', tags: ['desk', 'standing', 'ergonomic', 'office'], price: 219.99, compareAtPrice: 279.99, inventory: 42, sku: 'DU-SDC-001', image: 'https://images.unsplash.com/photo-1544027960-a2123beaae0e?q=80&w=800&auto=format&fit=crop', createdAt: '2024-01-10T10:00:00Z', updatedAt: '2024-03-01T12:00:00Z' },
  { id: 'prod_010', title: 'LED Desk Lamp', description: 'Dimmable LED desk lamp with wireless charging base', vendor: 'LightWay', productType: 'Home & Office', tags: ['lamp', 'led', 'desk', 'charging'], price: 39.99, compareAtPrice: null, inventory: 230, sku: 'LW-LDL-001', image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=800&auto=format&fit=crop', createdAt: '2024-01-12T10:00:00Z', updatedAt: '2024-02-25T12:00:00Z' },
  { id: 'prod_011', title: 'Ergonomic Office Chair', description: 'Mesh-back office chair with lumbar support and adjustable arms', vendor: 'SitWell', productType: 'Home & Office', tags: ['chair', 'ergonomic', 'office', 'mesh'], price: 349.99, compareAtPrice: 449.99, inventory: 28, sku: 'SW-EOC-001', image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=800&auto=format&fit=crop', createdAt: '2024-01-18T10:00:00Z', updatedAt: '2024-03-07T12:00:00Z' },
  { id: 'prod_012', title: 'Cable Management Kit', description: 'Complete cable organizer set with clips, ties, and sleeves', vendor: 'TidyDesk', productType: 'Home & Office', tags: ['cables', 'organization', 'desk', 'accessories'], price: 24.99, compareAtPrice: null, inventory: 350, sku: 'TD-CMK-001', image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800&auto=format&fit=crop', createdAt: '2024-01-22T10:00:00Z', updatedAt: '2024-02-20T12:00:00Z' },
  { id: 'prod_013', title: 'Whiteboard 48x36', description: 'Magnetic dry-erase whiteboard with aluminum frame', vendor: 'BoardPro', productType: 'Home & Office', tags: ['whiteboard', 'office', 'magnetic'], price: 69.99, compareAtPrice: 89.99, inventory: 65, sku: 'BP-WB-4836', image: 'https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-03T10:00:00Z', updatedAt: '2024-03-02T12:00:00Z' },

  // Wearables
  { id: 'prod_014', title: 'Smart Fitness Watch', description: 'GPS fitness tracker with heart rate, SpO2, and sleep tracking', vendor: 'FitTrack', productType: 'Wearables', tags: ['watch', 'fitness', 'gps', 'health'], price: 199.99, compareAtPrice: 249.99, inventory: 55, sku: 'FT-SFW-001', image: 'https://images.unsplash.com/photo-1434493907317-a46b59bc043a?q=80&w=800&auto=format&fit=crop', createdAt: '2024-01-28T10:00:00Z', updatedAt: '2024-03-10T12:00:00Z' },
  { id: 'prod_015', title: 'Blue Light Blocking Glasses', description: 'Stylish computer glasses that filter blue light', vendor: 'EyeShield', productType: 'Wearables', tags: ['glasses', 'blue-light', 'computer', 'ey eyewear'], price: 34.99, compareAtPrice: null, inventory: 180, sku: 'ES-BLG-001', image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-06T10:00:00Z', updatedAt: '2024-02-28T12:00:00Z' },

  // Accessories
  { id: 'prod_016', title: 'Laptop Backpack', description: 'Water-resistant laptop backpack with USB charging port', vendor: 'CarryAll', productType: 'Accessories', tags: ['backpack', 'laptop', 'travel', 'bag'], price: 59.99, compareAtPrice: 74.99, inventory: 140, sku: 'CA-LBP-001', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop', createdAt: '2024-01-30T10:00:00Z', updatedAt: '2024-03-05T12:00:00Z' },
  { id: 'prod_017', title: 'Wireless Charging Pad', description: 'Fast Qi wireless charger compatible with all devices', vendor: 'PowerUp', productType: 'Accessories', tags: ['charger', 'wireless', 'qi', 'charging'], price: 29.99, compareAtPrice: null, inventory: 275, sku: 'PU-WCP-001', image: 'https://images.unsplash.com/photo-1586940880126-7788ca65a043?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-08T10:00:00Z', updatedAt: '2024-03-01T12:00:00Z' },
  { id: 'prod_018', title: 'Phone Stand Adjustable', description: 'Aluminum adjustable phone and tablet stand', vendor: 'HoldUp', productType: 'Accessories', tags: ['stand', 'phone', 'tablet', 'aluminum'], price: 19.99, compareAtPrice: 24.99, inventory: 420, sku: 'HU-PSA-001', image: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-12T10:00:00Z', updatedAt: '2024-03-03T12:00:00Z' },
  { id: 'prod_019', title: 'Laptop Cooling Pad', description: 'Slim cooling pad with dual fans and LED lighting', vendor: 'CoolTech', productType: 'Accessories', tags: ['cooling', 'laptop', 'fans', 'accessories'], price: 34.99, compareAtPrice: 44.99, inventory: 95, sku: 'CT-LCP-001', image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-18T10:00:00Z', updatedAt: '2024-03-09T12:00:00Z' },
  // Accessories continued
  { id: 'prod_020', title: 'HDMI Cable 6ft', description: 'High-speed HDMI 2.1 cable with 8K support', vendor: 'LinkPro', productType: 'Accessories', tags: ['hdmi', 'cable', '8k', 'display'], price: 14.99, compareAtPrice: null, inventory: 500, sku: 'LP-HDM-006', image: 'https://images.unsplash.com/photo-1559439243-7f9e80351347?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-22T10:00:00Z', updatedAt: '2024-03-06T12:00:00Z' },

  // Software & Digital
  { id: 'prod_021', title: 'Antivirus Pro License', description: '1-year premium antivirus and internet security license', vendor: 'SecureNet', productType: 'Software', tags: ['software', 'antivirus', 'security', 'digital'], price: 39.99, compareAtPrice: 59.99, inventory: 999, sku: 'SN-AVP-1Y', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop', createdAt: '2024-01-05T10:00:00Z', updatedAt: '2024-03-01T12:00:00Z' },
  { id: 'prod_022', title: 'Cloud Storage 500GB', description: 'Annual subscription for 500GB secure cloud storage', vendor: 'DataVault', productType: 'Software', tags: ['storage', 'cloud', 'digital', 'subscription'], price: 59.99, compareAtPrice: null, inventory: 999, sku: 'DV-CS-500G', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop', createdAt: '2024-01-08T10:00:00Z', updatedAt: '2024-02-28T12:00:00Z' },

  // Cameras
  { id: 'prod_023', title: 'Mirrorless Camera 24MP', description: 'Full-frame mirrorless camera with 4K recording and 24MP sensor', vendor: 'PhotoPro', productType: 'Cameras', tags: ['camera', 'mirrorless', '4k', 'photography'], price: 1299.99, compareAtPrice: 1499.99, inventory: 15, sku: 'PP-MC-024', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop', createdAt: '2024-01-10T10:00:00Z', updatedAt: '2024-03-10T12:00:00Z' },
  { id: 'prod_024', title: 'L-Series Zoom Lens', description: 'Premium 24-70mm f/2.8 zoom lens for mirrorless cameras', vendor: 'OpticsLab', productType: 'Cameras', tags: ['lens', 'photography', 'optics'], price: 899.99, compareAtPrice: 999.99, inventory: 12, sku: 'OL-ZLN-02470', image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?q=80&w=800&auto=format&fit=crop', createdAt: '2024-01-15T10:00:00Z', updatedAt: '2024-03-05T12:00:00Z' },
  { id: 'prod_025', title: 'Action Camera 4K Waterproof', description: 'Rugged 4K action camera with stabilization and waterproof housing', vendor: 'AdventureCam', productType: 'Cameras', tags: ['action', 'camera', '4k', 'waterproof'], price: 249.99, compareAtPrice: 299.99, inventory: 45, sku: 'AC-WPC-001', image: 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?q=80&w=800&auto=format&fit=crop', createdAt: '2024-01-20T10:00:00Z', updatedAt: '2024-03-08T12:00:00Z' },

  // Power & Charging
  { id: 'prod_026', title: 'Power Bank 20000mAh', description: 'Fast-charge power bank with PD and QC 3.0', vendor: 'PowerUp', productType: 'Accessories', tags: ['powerbank', 'charging', 'portable', 'usb-c'], price: 44.99, compareAtPrice: 54.99, inventory: 160, sku: 'PU-PB-20K', image: 'https://images.unsplash.com/photo-1609100259883-9a3b6f2f9b8c?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-16T10:00:00Z', updatedAt: '2024-03-10T12:00:00Z' },
  { id: 'prod_027', title: 'Multi-Port Wall Charger', description: 'GaN 100W charger with 4 ports (USB-C + USB-A)', vendor: 'PowerUp', productType: 'Accessories', tags: ['charger', 'wall', 'gan', 'usb-c'], price: 54.99, compareAtPrice: 69.99, inventory: 130, sku: 'PU-MWC-100', image: 'https://images.unsplash.com/photo-1550524514-9636edba3118?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-19T10:00:00Z', updatedAt: '2024-03-12T12:00:00Z' },

  // Networking
  { id: 'prod_028', title: 'WiFi 6 Mesh Router', description: 'Tri-band WiFi 6 mesh system covering up to 5000 sq ft', vendor: 'NetSpeed', productType: 'Electronics', tags: ['router', 'wifi', 'mesh', 'networking'], price: 279.99, compareAtPrice: 349.99, inventory: 38, sku: 'NS-WMR-6T', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-23T10:00:00Z', updatedAt: '2024-03-14T12:00:00Z' },
  { id: 'prod_029', title: 'Ethernet Cat8 Cable 25ft', description: 'High-performance Cat8 ethernet cable for 40Gbps', vendor: 'NetSpeed', productType: 'Electronics', tags: ['ethernet', 'cable', 'networking', 'cat8'], price: 19.99, compareAtPrice: null, inventory: 300, sku: 'NS-EC8-025', image: 'https://images.unsplash.com/photo-1559439243-7f9e80351347?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-25T10:00:00Z', updatedAt: '2024-03-06T12:00:00Z' },

  // Smart Home
  { id: 'prod_030', title: 'Smart LED Bulb Pack', description: 'Pack of 4 WiFi smart RGB LED bulbs compatible with Alexa', vendor: 'SmartLux', productType: 'Smart Home', tags: ['smart', 'led', 'bulb', 'wifi', 'alexa'], price: 39.99, compareAtPrice: 49.99, inventory: 200, sku: 'SL-SLB-4PK', image: 'https://images.unsplash.com/photo-1550524514-9636edba3118?q=80&w=800&auto=format&fit=crop', createdAt: '2024-01-14T10:00:00Z', updatedAt: '2024-03-02T12:00:00Z' },
  { id: 'prod_031', title: 'Smart Plug 4-Pack', description: 'WiFi smart outlet plugs with energy monitoring', vendor: 'SmartLux', productType: 'Smart Home', tags: ['smart', 'plug', 'outlet', 'wifi', 'energy'], price: 29.99, compareAtPrice: 34.99, inventory: 250, sku: 'SL-SP-4PK', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop', createdAt: '2024-01-17T10:00:00Z', updatedAt: '2024-02-27T12:00:00Z' },

  // Audio
  { id: 'prod_032', title: 'Bluetooth Speaker Waterproof', description: 'Portable waterproof speaker with 20hr battery and bass boost', vendor: 'AudioTech', productType: 'Electronics', tags: ['speaker', 'bluetooth', 'waterproof', 'portable'], price: 69.99, compareAtPrice: 89.99, inventory: 115, sku: 'AT-BSW-001', image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-04T10:00:00Z', updatedAt: '2024-03-09T12:00:00Z' },
  { id: 'prod_033', title: 'Studio Microphone USB', description: 'Condenser USB microphone for podcasting and streaming', vendor: 'AudioTech', productType: 'Electronics', tags: ['microphone', 'usb', 'studio', 'streaming'], price: 119.99, compareAtPrice: 149.99, inventory: 55, sku: 'AT-SMU-001', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-09T10:00:00Z', updatedAt: '2024-03-11T12:00:00Z' },

  // More products
  { id: 'prod_034', title: 'Mechanical Numpad', description: 'Wireless mechanical numpad with hot-swap switches', vendor: 'KeyMaster', productType: 'Electronics', tags: ['numpad', 'mechanical', 'wireless'], price: 44.99, compareAtPrice: null, inventory: 88, sku: 'KM-MN-001', image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-11T10:00:00Z', updatedAt: '2024-03-05T12:00:00Z' },
  { id: 'prod_035', title: 'Wrist Rest Gel', description: 'Memory foam gel wrist rest for keyboard', vendor: 'DeskUp', productType: 'Home & Office', tags: ['wrist-rest', 'ergonomic', 'keyboard'], price: 16.99, compareAtPrice: 21.99, inventory: 310, sku: 'DU-WRG-001', image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-13T10:00:00Z', updatedAt: '2024-03-01T12:00:00Z' },
  { id: 'prod_036', title: 'Privacy Screen Filter 15.6"', description: 'Anti-spy screen protector for 15.6-inch laptops', vendor: 'EyeShield', productType: 'Accessories', tags: ['privacy', 'screen', 'laptop', 'filter'], price: 29.99, compareAtPrice: null, inventory: 95, sku: 'ES-PSF-156', image: '/images/privacy.jpg', createdAt: '2024-02-17T10:00:00Z', updatedAt: '2024-03-04T12:00:00Z' },
  { id: 'prod_037', title: 'USB Microphone Arm', description: 'Adjustable boom arm for desk-mounted microphones', vendor: 'AudioTech', productType: 'Accessories', tags: ['mic-arm', 'adjustable', 'desk', 'streaming'], price: 39.99, compareAtPrice: 49.99, inventory: 70, sku: 'AT-UMA-001', image: '/images/mic-arm.jpg', createdAt: '2024-02-21T10:00:00Z', updatedAt: '2024-03-07T12:00:00Z' },
  { id: 'prod_038', title: 'Desk Drawer Organizer', description: 'Expandable bamboo desk drawer organizer', vendor: 'TidyDesk', productType: 'Home & Office', tags: ['organizer', 'desk', 'bamboo', 'drawer'], price: 22.99, compareAtPrice: null, inventory: 185, sku: 'TD-DDO-001', image: '/images/organizer.jpg', createdAt: '2024-02-24T10:00:00Z', updatedAt: '2024-03-06T12:00:00Z' },
  { id: 'prod_039', title: 'Webcam Ring Light', description: 'Clip-on ring light for webcam and video calls', vendor: 'LightWay', productType: 'Accessories', tags: ['ring-light', 'webcam', 'video', 'lighting'], price: 19.99, compareAtPrice: 24.99, inventory: 220, sku: 'LW-WRL-001', image: '/images/ring-light.jpg', createdAt: '2024-02-26T10:00:00Z', updatedAt: '2024-03-08T12:00:00Z' },
  { id: 'prod_036', title: 'Privacy Screen Filter 15.6"', description: 'Anti-spy screen protector for 15.6-inch laptops', vendor: 'EyeShield', productType: 'Accessories', tags: ['privacy', 'screen', 'laptop', 'filter'], price: 29.99, compareAtPrice: null, inventory: 95, sku: 'ES-PSF-156', image: 'https://images.unsplash.com/photo-1544244015-0cd4b3fe652f?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-17T10:00:00Z', updatedAt: '2024-03-04T12:00:00Z' },
  { id: 'prod_037', title: 'USB Microphone Arm', description: 'Adjustable boom arm for desk-mounted microphones', vendor: 'AudioTech', productType: 'Accessories', tags: ['mic-arm', 'adjustable', 'desk', 'streaming'], price: 39.99, compareAtPrice: 49.99, inventory: 70, sku: 'AT-UMA-001', image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-21T10:00:00Z', updatedAt: '2024-03-07T12:00:00Z' },
  { id: 'prod_038', title: 'Desk Drawer Organizer', description: 'Expandable bamboo desk drawer organizer', vendor: 'TidyDesk', productType: 'Home & Office', tags: ['organizer', 'desk', 'bamboo', 'drawer'], price: 22.99, compareAtPrice: null, inventory: 185, sku: 'TD-DDO-001', image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-24T10:00:00Z', updatedAt: '2024-03-06T12:00:00Z' },
  { id: 'prod_039', title: 'Webcam Ring Light', description: 'Clip-on ring light for webcam and video calls', vendor: 'LightWay', productType: 'Accessories', tags: ['ring-light', 'webcam', 'video', 'lighting'], price: 19.99, compareAtPrice: 24.99, inventory: 220, sku: 'LW-WRL-001', image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-26T10:00:00Z', updatedAt: '2024-03-08T12:00:00Z' },
  { id: 'prod_040', title: 'Smart Thermostat', description: 'WiFi smart thermostat with learning and energy savings', vendor: 'SmartLux', productType: 'Smart Home', tags: ['thermostat', 'smart', 'wifi', 'energy'], price: 149.99, compareAtPrice: 179.99, inventory: 45, sku: 'SL-ST-001', image: 'https://images.unsplash.com/photo-1567924675637-283a674299ec?q=80&w=800&auto=format&fit=crop', createdAt: '2024-01-16T10:00:00Z', updatedAt: '2024-03-03T12:00:00Z' },
  { id: 'prod_041', title: 'Security Camera Indoor', description: '1080p indoor WiFi security camera with night vision', vendor: 'SecureNet', productType: 'Smart Home', tags: ['camera', 'security', 'wifi', 'indoor'], price: 49.99, compareAtPrice: 69.99, inventory: 130, sku: 'SN-SCI-001', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop', createdAt: '2024-01-19T10:00:00Z', updatedAt: '2024-03-05T12:00:00Z' },
  { id: 'prod_042', title: 'Smart Door Lock', description: 'Fingerprint + code smart door lock with app control', vendor: 'SecureNet', productType: 'Smart Home', tags: ['lock', 'smart', 'fingerprint', 'security'], price: 179.99, compareAtPrice: 219.99, inventory: 32, sku: 'SN-SDL-001', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop', createdAt: '2024-01-23T10:00:00Z', updatedAt: '2024-03-09T12:00:00Z' },
  { id: 'prod_043', title: 'Portable Monitor 15.6"', description: 'Ultra-thin 1080p portable USB-C monitor', vendor: 'ViewMax', productType: 'Electronics', tags: ['monitor', 'portable', 'usb-c', 'display'], price: 189.99, compareAtPrice: 229.99, inventory: 48, sku: 'VM-PM-156', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-01T10:00:00Z', updatedAt: '2024-03-11T12:00:00Z' },
  { id: 'prod_044', title: 'Keyboard Keycap Set', description: 'Premium PBT double-shot keycap set (104 keys)', vendor: 'KeyMaster', productType: 'Accessories', tags: ['keycaps', 'keyboard', 'pbt', 'custom'], price: 34.99, compareAtPrice: null, inventory: 75, sku: 'KM-KKS-104', image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-05T10:00:00Z', updatedAt: '2024-03-02T12:00:00Z' },
  { id: 'prod_045', title: 'Desk Mat XL', description: 'Premium leather desk mat 90x40cm', vendor: 'DeskUp', productType: 'Home & Office', tags: ['desk-mat', 'leather', 'premium', 'office'], price: 39.99, compareAtPrice: 49.99, inventory: 105, sku: 'DU-DMX-001', image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-08T10:00:00Z', updatedAt: '2024-03-04T12:00:00Z' },
  { id: 'prod_046', title: 'USB Fan Mini', description: 'Quiet USB-powered mini desk fan with 3 speeds', vendor: 'CoolTech', productType: 'Accessories', tags: ['fan', 'usb', 'desk', 'quiet'], price: 14.99, compareAtPrice: null, inventory: 340, sku: 'CT-UFM-001', image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-10T10:00:00Z', updatedAt: '2024-02-28T12:00:00Z' },
  { id: 'prod_047', title: 'Screen Cleaning Kit', description: 'Complete screen cleaning kit with microfiber cloths and spray', vendor: 'TidyDesk', productType: 'Accessories', tags: ['cleaning', 'screen', 'microfiber', 'care'], price: 12.99, compareAtPrice: null, inventory: 400, sku: 'TD-SCK-001', image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-15T10:00:00Z', updatedAt: '2024-03-01T12:00:00Z' },
  { id: 'prod_048', title: 'Thunderbolt Cable 2m', description: 'Thunderbolt 4 cable with 40Gbps data transfer', vendor: 'LinkPro', productType: 'Accessories', tags: ['thunderbolt', 'cable', 'data', 'fast'], price: 34.99, compareAtPrice: 44.99, inventory: 150, sku: 'LP-TB4-002', image: 'https://images.unsplash.com/photo-1559439243-7f9e80351347?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-18T10:00:00Z', updatedAt: '2024-03-05T12:00:00Z' },
  { id: 'prod_049', title: 'Smart Light Strip 5m', description: 'WiFi RGB LED light strip with music sync', vendor: 'SmartLux', productType: 'Smart Home', tags: ['led', 'strip', 'rgb', 'smart', 'wifi'], price: 24.99, compareAtPrice: 34.99, inventory: 175, sku: 'SL-SLS-5M', image: 'https://images.unsplash.com/photo-1550524514-9636edba3118?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-20T10:00:00Z', updatedAt: '2024-03-07T12:00:00Z' },
  { id: 'prod_050', title: 'Laptop Stand Aluminum', description: 'Ergonomic aluminum laptop stand with ventilation', vendor: 'DeskUp', productType: 'Accessories', tags: ['stand', 'laptop', 'aluminum', 'ergonomic'], price: 44.99, compareAtPrice: 59.99, inventory: 88, sku: 'DU-LSA-001', image: 'https://images.unsplash.com/photo-1544027960-a2123beaae0e?q=80&w=800&auto=format&fit=crop', createdAt: '2024-02-22T10:00:00Z', updatedAt: '2024-03-10T12:00:00Z' },
  { id: 'prod_051', title: 'Smart Coffee Mug', description: 'App-controlled temperature-stabilizing mug with 2hr battery', vendor: 'HomeTech', productType: 'Kitchen', tags: ['smart', 'coffee', 'mug', 'tech'], price: 129.99, compareAtPrice: null, inventory: 65, sku: 'HT-SCM-001', image: 'https://images.unsplash.com/photo-1541173109020-9c5d8a48e169?q=80&w=800&auto=format&fit=crop', createdAt: '2025-12-15T10:00:00Z', updatedAt: '2026-03-01T12:00:00Z' },
  { id: 'prod_052', title: 'Sonic Electric Toothbrush', description: 'Advanced sonic vibration toothbrush with 5 modes and charging base', vendor: 'HealthCare', productType: 'Health', tags: ['sonic', 'toothbrush', 'health', 'grooming'], price: 89.99, compareAtPrice: 119.99, inventory: 140, sku: 'HC-SET-001', image: 'https://images.unsplash.com/photo-1559929239-01111088998d?q=80&w=800&auto=format&fit=crop', createdAt: '2026-01-10T10:00:00Z', updatedAt: '2026-03-05T12:00:00Z' },
  { id: 'prod_053', title: 'Portable Projector 4K', description: 'Mini 4K smart projector with built-in Android and WiFi', vendor: 'ViewMax', productType: 'Electronics', tags: ['projector', '4k', 'portable', 'home-theater'], price: 349.99, compareAtPrice: 449.99, inventory: 22, sku: 'VM-PP-4K', image: 'https://images.unsplash.com/photo-1535016120720-40c646bebbdc?q=80&w=800&auto=format&fit=crop', createdAt: '2026-01-15T10:00:00Z', updatedAt: '2026-03-10T12:00:00Z' },
  { id: 'prod_054', title: 'Noise-Isolating Desk Partition', description: 'Felt acoustic desk divider for open offices', vendor: 'DeskUp', productType: 'Home & Office', tags: ['desk', 'privacy', 'acoustic', 'office'], price: 79.99, compareAtPrice: null, inventory: 45, sku: 'DU-NIP-001', image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=800&auto=format&fit=crop', createdAt: '2026-01-20T10:00:00Z', updatedAt: '2026-03-02T12:00:00Z' },
  { id: 'prod_055', title: 'USB-C Rechargeable Pen', description: 'Precision stylus for tablets and touchscreens', vendor: 'ClickPro', productType: 'Accessories', tags: ['stylus', 'pen', 'tablet', 'touch'], price: 49.99, compareAtPrice: 59.99, inventory: 110, sku: 'CP-URP-001', image: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=800&auto=format&fit=crop', createdAt: '2026-01-25T10:00:00Z', updatedAt: '2026-03-08T12:00:00Z' },
  { id: 'prod_056', title: 'Adjustable Dumbbells Set', description: 'Pair of 55lb adjustable weights for home workouts', vendor: 'FitTrack', productType: 'Sports', tags: ['fitness', 'weights', 'home-gym', 'sports'], price: 299.99, compareAtPrice: 349.99, inventory: 15, sku: 'FT-ADS-055', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?q=80&w=800&auto=format&fit=crop', createdAt: '2026-02-01T10:00:00Z', updatedAt: '2026-03-12T12:00:00Z' },
  { id: 'prod_057', title: 'Back-lit Keyboard Case', description: 'Magnetic keyboard case for 12.9" tablets', vendor: 'KeyMaster', productType: 'Accessories', tags: ['keyboard', 'case', 'tablet'], price: 129.99, compareAtPrice: null, inventory: 58, sku: 'KM-BKC-012', image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800&auto=format&fit=crop', createdAt: '2026-02-10T10:00:00Z', updatedAt: '2026-03-15T12:00:00Z' },
  { id: 'prod_058', title: 'Travel Espresso Maker', description: 'Pocket-sized manual espresso machine with carrying case', vendor: 'HomeTech', productType: 'Kitchen', tags: ['coffee', 'travel', 'espresso', 'outdoors'], price: 64.99, compareAtPrice: 79.99, inventory: 82, sku: 'HT-TEM-001', image: 'https://images.unsplash.com/photo-1541173109020-9c5d8a48e169?q=80&w=800&auto=format&fit=crop', createdAt: '2026-02-15T10:00:00Z', updatedAt: '2026-03-18T12:00:00Z' },
  { id: 'prod_059', title: 'Solar Power Bank', description: '25000mAh solar charging power bank with rugged build', vendor: 'PowerUp', productType: 'Accessories', tags: ['solar', 'powerbank', 'outdoors', 'charging'], price: 54.99, compareAtPrice: 69.99, inventory: 95, sku: 'PU-SPB-25', image: 'https://images.unsplash.com/photo-1609100259883-9a3b6f2f9b8c?q=80&w=800&auto=format&fit=crop', createdAt: '2026-02-20T10:00:00Z', updatedAt: '2026-03-19T12:00:00Z' },
  { id: 'prod_060', title: 'Standing Fan Tower', description: 'Silent ionizing tower fan with remote and timer', vendor: 'CoolTech', productType: 'Home', tags: ['fan', 'cooling', 'tower', 'home'], price: 79.99, compareAtPrice: 99.99, inventory: 38, sku: 'CT-SFT-001', image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=800&auto=format&fit=crop', createdAt: '2026-03-01T10:00:00Z', updatedAt: '2026-03-20T12:00:00Z' },
];

// ---- CUSTOMERS ----
export const demoCustomers: DemoCustomer[] = [
  { id: 'cust_001', firstName: 'Alice', lastName: 'Johnson', email: 'alice.j@email.com', ordersCount: 8, totalSpent: 749.92 },
  { id: 'cust_002', firstName: 'Bob', lastName: 'Smith', email: 'bob.smith@email.com', ordersCount: 5, totalSpent: 524.95 },
  { id: 'cust_003', firstName: 'Carol', lastName: 'Williams', email: 'carol.w@email.com', ordersCount: 12, totalSpent: 1289.88 },
  { id: 'cust_004', firstName: 'David', lastName: 'Brown', email: 'david.b@email.com', ordersCount: 3, totalSpent: 329.97 },
  { id: 'cust_005', firstName: 'Emma', lastName: 'Davis', email: 'emma.d@email.com', ordersCount: 7, totalSpent: 679.93 },
  { id: 'cust_006', firstName: 'Frank', lastName: 'Garcia', email: 'frank.g@email.com', ordersCount: 4, totalSpent: 449.96 },
  { id: 'cust_007', firstName: 'Grace', lastName: 'Miller', email: 'grace.m@email.com', ordersCount: 9, totalSpent: 899.91 },
  { id: 'cust_008', firstName: 'Henry', lastName: 'Wilson', email: 'henry.w@email.com', ordersCount: 6, totalSpent: 589.94 },
  { id: 'cust_009', firstName: 'Ivy', lastName: 'Moore', email: 'ivy.m@email.com', ordersCount: 2, totalSpent: 179.98 },
  { id: 'cust_010', firstName: 'Jack', lastName: 'Taylor', email: 'jack.t@email.com', ordersCount: 11, totalSpent: 1149.89 },
  { id: 'cust_011', firstName: 'Kate', lastName: 'Anderson', email: 'kate.a@email.com', ordersCount: 15, totalSpent: 1879.85 },
  { id: 'cust_012', firstName: 'Leo', lastName: 'Thomas', email: 'leo.t@email.com', ordersCount: 1, totalSpent: 79.99 },
];

// ---- ORDERS ---- Generate 200+ realistic orders
function generateOrders(): DemoOrder[] {
  const orders: DemoOrder[] = [];
  const productIds = demoProducts.map((p) => p.id);
  const customerIds = demoCustomers.map((c) => c.id);
  const statuses: Array<'paid' | 'pending' | 'refunded'> = ['paid', 'paid', 'paid', 'paid', 'pending', 'refunded'];
  const fulfillments: Array<'fulfilled' | 'unfulfilled' | 'partial'> = ['fulfilled', 'fulfilled', 'fulfilled', 'unfulfilled', 'partial'];

  // Current date: 2026-03-20
  const now = new Date(2026, 2, 20);

  // Seed-based deterministic "random" for consistent data
  let seed = 42;
  const rand = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };

  for (let i = 0; i < 220; i++) {
    const numItems = Math.floor(rand() * 4) + 1; // 1-4 items per order
    const lineItems: DemoOrder['lineItems'] = [];
    const usedProductIds = new Set<string>();

    for (let j = 0; j < numItems; j++) {
      let pid: string;
      do {
        pid = productIds[Math.floor(rand() * productIds.length)];
      } while (usedProductIds.has(pid));
      usedProductIds.add(pid);

      const product = demoProducts.find((p) => p.id === pid)!;
      const qty = Math.floor(rand() * 3) + 1;
      lineItems.push({
        productId: pid,
        title: product.title,
        quantity: qty,
        price: product.price,
      });
    }

    const totalPrice = lineItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const dayOffset = Math.floor(rand() * 90); // Last 90 days
    const date = new Date(now.getTime() - (dayOffset * 24 * 60 * 60 * 1000));

    orders.push({
      id: `order_${String(i + 1).padStart(4, '0')}`,
      orderNumber: 1000 + i + 1,
      customerId: customerIds[Math.floor(rand() * customerIds.length)],
      lineItems,
      totalPrice: Math.round(totalPrice * 100) / 100,
      createdAt: date.toISOString(),
      financialStatus: statuses[Math.floor(rand() * statuses.length)],
      fulfillmentStatus: fulfillments[Math.floor(rand() * fulfillments.length)],
    });
  }

  return orders.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
}

export const demoOrders: DemoOrder[] = generateOrders();

// ---- COMPUTED DEMO STATS ----
export function getDemoStats() {
  const totalRevenue = demoOrders.reduce((sum, o) => sum + o.totalPrice, 0);
  const paidOrders = demoOrders.filter((o) => o.financialStatus === 'paid');
  const avgOrderValue = totalRevenue / demoOrders.length;

  return {
    totalRevenue: Math.round(totalRevenue * 100) / 100,
    totalOrders: demoOrders.length,
    totalProducts: demoProducts.length,
    totalCustomers: demoCustomers.length,
    avgOrderValue: Math.round(avgOrderValue * 100) / 100,
    paidOrders: paidOrders.length,
    fulfillmentRate:
      Math.round(
        (demoOrders.filter((o) => o.fulfillmentStatus === 'fulfilled').length / demoOrders.length) *
          10000,
      ) / 100,
  };
}
