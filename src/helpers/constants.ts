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
export type AccentColors = "purple" | "coral" | "yellow" | "lime" | "aqua" | "orange";
export type AccentColorsDark = "purple-dark" | "coral-dark" | "yellow-dark" | "lime-dark" | "aqua-dark" | "orange-dark";
export type AccentColorsLight =
    "purple-light"
    | "coral-light"
    | "yellow-light"
    | "lime-light"
    | "aqua-light"
export type AccentColorsFaded =
    "purple-faded"
    | "coral-faded"
    | "yellow-faded"
    | "lime-faded"
    | "aqua-faded"
export type BrandColors = "primary" | "secondary" | "dark" | "light";
export type BrandColorNames = "pink" | "green" | "navy" | "light";
export type Status = "primary" | "success" | "info" | "warning" | "danger";
export type StatusColorNames = "green" | "teal" | "yellow" | "red"
export type ExtendedColors = "green" | "pink" | "navy" | "bright" | "teal" | "red";
export type AllColors =
    AccentColors
    | AccentColorsDark
    | AccentColorsLight
    | AccentColorsFaded
    | BrandColors
    | BrandColorNames
    | StatusColorNames
    | Status;

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
// Grid breakpoints

export const gridBreakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
}
