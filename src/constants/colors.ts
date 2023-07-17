export const COLORS = {
  White: '#FFFFFF',
  Black: '#000000',
  Gray: '#3d3d3d',
  LightGray: '#C7C7C7',
  Green: '#06a531',
  Red: '#CC3131',
  Blue: '#317BF4',
  Error: '#CC3131',
  Success: '#269F5A',

  AppWhite: '#F2EFEA',
  Coral: '#FC7753',
  TiffanyBlue: '#66D7D1',
  EnglishViolet: '#403D58',
  Straw: '#DBD56E',
} as const;

export type IColors = keyof typeof COLORS;
