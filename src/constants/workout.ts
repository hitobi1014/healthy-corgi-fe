export const WORKOUT_TYPE = {
  GYM: 'GYM',
  HIKING: 'HIKING',
  SWIMMING: 'SWIMMING',
  RUNNING: 'RUNNING',
  JUDO: 'JUDO',
  PILATES: 'PILATES',
  OTHERS: 'OTHERS',
} as const;

export const WORKOUT_SATISFACTION = {
  VERY_BAD: {
    value: 1,
    emoji: '😫',
    label: '매우 불만족',
  },
  BAD: {
    value: 2,
    emoji: '😕',
    label: '불만족',
  },
  NORMAL: {
    value: 3,
    emoji: '😐',
    label: '보통',
  },
  GOOD: {
    value: 4,
    emoji: '😊',
    label: '만족',
  },
  VERY_GOOD: {
    value: 5,
    emoji: '😍',
    label: '매우 만족',
  },
} as const;
