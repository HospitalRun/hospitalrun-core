import { Type, Static } from '@sinclair/typebox'

// based on: https://www.hl7.org/fhir/valueset-diagnostic-service-sections.html
export enum Codes {
  AU = 'AU', // Audiology
  BG = 'BG', // Blood Gases
  BLB = 'BLB', // Blood Bank
  CG = 'CG', // Cytogenetics
  CH = 'CH', // Chemistry
  CP = 'CP', // Cytopathology
  CT = 'CT', // CAT Scan
  CTH = 'CTH', // Cardiac Catheterization
  CUS = 'CUS', // Cardiac Ultrasound
  EC = 'EC', // Electrocardiac (e.g., EKG, EEC, Holter)
  EN = 'EN', // Electroneuro (EEG, EMG,EP,PSG)
  GE = 'GE', // Genetics
  HM = 'HM', // Hematology
  ICU = 'ICU', // Bedside ICU Monitoring
  IMM = 'IMM', // Immunology
  LAB = 'LAB', // Laboratory
  MB = 'MB', // Microbiology
  MCB = 'MCB', // Mycobacteriology
  MYC = 'MYC', // Mycology
  NMR = 'NMR', // Nuclear Magnetic Resonance
  NMS = 'NMS', // Nuclear Medicine Scan
  NRS = 'NRS', // Nursing Service Measures
  OSL = 'OSL', // Outside Lab
  OT = 'OT', // Occupational Therapy
  OTH = 'OTH', // Other
  OUS = 'OUS', // OB Ultrasound
  PF = 'PF', // Pulmonary Function
  PHR = 'PHR', // Pharmacy
  PHY = 'PHY', // Physician (Hx. Dx, admission note, etc.)
  PT = 'PT', // Physical Therapy
  RAD = 'RAD', // Radiology
  RC = 'RC', // Respiratory Care (therapy)
  RT = 'RT', // Radiation Therapy
  RUS = 'RUS', // Radiology Ultrasound
  RX = 'RX', // Radiograph
  SP = 'SP', // Surgical Pathology
  SR = 'SR', // Serology
  TX = 'TX', // Toxicology
  VR = 'VR', // Virology
  VUS = 'VUS', // Vascular Ultrasound
  XRC = 'XRC', // Cineradiograph
}

export const DiagnosticServiceCodesSchema = Type.Enum(Codes, {
  type: 'string',
  description:
    'A code that classifies the clinical discipline, department or diagnostic service that created the report (e.g. cardiology, biochemistry, hematology, MRI). This is used for searching, sorting and display purposes.',
})
export type DiagnosticServiceCodes = Static<typeof DiagnosticServiceCodesSchema>
