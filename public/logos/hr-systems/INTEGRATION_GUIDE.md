# How to Add New HR System Logos

## Quick Start
1. Add logo files to this `/public/logos/hr-systems/` directory
2. Update the `hrSystems` array in `/src/components/integrations.tsx`
3. Create a new Logo component (optional - can use image files instead)

## Method 1: Using Image Files (Easiest)
Place your logo files in this directory and reference them in the component:

```javascript
// In integrations.tsx, update the hrSystems array:
const hrSystems = [
  // ... existing systems
  { 
    name: "NewSystem", 
    className: "h-10 w-10 circle-9", 
    logoClassName: "h-5 w-5", 
    logoPath: "/logos/hr-systems/newsystem.svg" // Add this property
  },
];
```

## Method 2: Using SVG Components (Current Method)
Create a new logo component in `/src/components/integrations.tsx`:

```javascript
export const NewSystemLogo = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#YOUR_COLOR"/>
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
        NS
      </text>
    </svg>
  );
};
```

Then add it to the `hrSystems` array:
```javascript
{ 
  name: "NewSystem", 
  className: "h-10 w-10 circle-9", 
  logoClassName: "h-5 w-5", 
  logo: NewSystemLogo 
},
```

## Popular HR Systems to Add
Here are some popular systems you might want to add logos for:

### HRIS/Payroll
- Rippling
- Gusto  
- Namely
- UKG (Ultimate Kronos Group)
- Ceridian Dayforce

### Talent Acquisition  
- SmartRecruiters
- iCIMS
- Jobvite
- LinkedIn Talent Solutions
- ZipRecruiter

### Background Check
- Checkr
- Sterling
- HireRight
- GoodHire
- Accurate Background

### Performance Management
- Cornerstone OnDemand
- 15Five
- Lattice
- Culture Amp

Just add the logo files to this directory and I can help you integrate them into the component!