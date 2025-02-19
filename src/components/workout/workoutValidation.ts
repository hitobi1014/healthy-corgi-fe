import {
  WorkoutSatisfaction,
  WorkoutSaveRequest,
  WorkoutType,
} from '@/types/workout';

export interface ValidationResult {
  isValid: boolean;
  message: string;
}

export const validation = {
  // 사진검증
  photo: (photos: File[]): ValidationResult => {
    // TODO 사진검증
    return { isValid: true, message: '' };
  },

  // 날짜검증
  date: (data: Date): ValidationResult => {
    // TODO 날짜검증 진행
    return { isValid: true, message: '' };
  },

  // 운동만족도 검증
  satisfaction: (satisfaction?: WorkoutSatisfaction): ValidationResult => {
    // TODO 운동만족도 검증
    return { isValid: true, message: '' };
  },

  // 운동종류 검증
  type: (type: WorkoutType, workoutName?: string): ValidationResult => {
    // TODO 운동종류 검증
    return { isValid: true, message: '' };
  },

  //

  // 전체데이터 검증
  all: (data: WorkoutSaveRequest): ValidationResult => {
    // TODO 전체데이터 검증
    // step01. 사진검증
    // step02. 날짜검증
    // step03. 운동만족도검증
    // step04. 운동종류검증 및 운동명
    return { isValid: true, message: '' };
  },
};
