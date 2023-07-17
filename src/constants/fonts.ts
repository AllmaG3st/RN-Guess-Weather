export const FONTSIZES = {
  ExtraSmall: 10,
  Small: 12,
  SmallPlus: 13,
  Medium: 14,
  MediumPlus: 15,
  Large: 16,
  LargePlus: 17,
  ExtraLarge: 18,
  ExtraExtraLarge: 20,
  MegaLarge: 22,
} as const;

export type IFontSizes = keyof typeof FONTSIZES;

export const FONTS = {
  CaprasimoRegular: 'Caprasimo-Regular',
};

export type IFonts = keyof typeof FONTS;
