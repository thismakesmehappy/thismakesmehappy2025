//  Color names
export const purple = "purple";
export const coral = "coral";
export const yellow = "yellow";
export const lime = "lime";
export const aqua = "aqua";
export const orange = "orange";
export const pink = "pink";
export const green = "green";
export const navy = "navy";
export const light = "light";
export const teal = "teal";
export const red = "red";
export const primary = "primary";
export const secondary = "secondary";
export const dark = "dark";
export const success = "success";
export const warning = "warning";
export const danger = "danger";
export const info = "info";

// Color group types
export type accentColors = "purple" | "coral" | "yellow" | "lime" | "aqua" | "orange";
export type brandColors = "primary" | "secondary" | "dark" | "light";
export type brandColorNames = "pink" | "green" | "navy" | "light";
export type status = "primary" | "success" | "info" | "warning" | "danger";
export type statusColorNames = "green" | "teal" | "yellow" | "red"
export type extendedColors = "green" | "pink" | "navy" | "bright" | "teal" | "red";
export type anyColor = accentColors | brandColors | status | extendedColors | brandColorNames | statusColorNames;
export type allBrandColors = accentColors | brandColors | status;
export type allBrandColorNames = accentColors | brandColorNames | statusColorNames;

// Color group names
export const listOfAccentColors = [purple, coral, yellow, lime, aqua, orange];
export const listOfBrandColors = [primary, secondary, dark, light];
export const listOfBrandColorNames = [pink, green, navy, light];
export const listOfStatusColors = [primary, success, info, warning, danger];
export const listOfStatusColorNames = [pink, green, teal, yellow, red];

// Available Memogi
export const memojis = [
    "me-cereal.png",
    "me-coffee.png",
    "me-heart.png",
    "me-unicorn.png",
    "me-waving.png",
]

// Position for Memoji
export type MemojiPlacement = 'top' | 'bottom' | 'none';
export const memojiPlacementFlag: MemojiPlacement = 'bottom';

export const includeNavMenu = false;
// Grid breakpoints

export const gridBreakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
}
