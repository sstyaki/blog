export const LayoutType = {
  Default: 'Default',
  Game: 'Game',
}

export type LayoutType = (typeof LayoutType)[keyof typeof LayoutType]
