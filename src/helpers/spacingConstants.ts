/**
 * Standardized spacing constants for consistent component spacing
 * Use these constants instead of hardcoded Bootstrap classes
 */

export const SPACING = {
  // Container spacing
  CONTAINER: 'py-5',              // Standard container padding
  
  // Section/Component spacing  
  SECTION: 'mb-4',                // Standard section/component margin
  
  // Row spacing
  ROW_GAP: 'row-gap-4',           // Standard row gap
  
  // Button spacing
  BUTTON_RESPONSIVE: 'mb-3 mb-md-0', // Responsive button margin
  BUTTON_GROUP: 'gap-3',          // Button group spacing
  
  // Icon spacing
  ICON: 'mb-2',                   // Standard icon margin
  
  // Text spacing
  TEXT_SMALL: 'mt-2',             // Small text margin
  
  // Intentional overrides (keep as-is)
  HEADING_OVERRIDE: 'mb-0 pb-0',  // Override default heading margins
  TEXT_OVERRIDE: 'mt-0',          // Override default text margins
  
} as const;

export type SpacingKey = keyof typeof SPACING;
