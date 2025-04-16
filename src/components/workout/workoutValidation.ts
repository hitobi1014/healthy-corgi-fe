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
    // 최대 사진수 체크
    if (photos.length > 2) {
      return { isValid: true, message: '사진은 최대 2장 까지만 가능해요!' };
    }

    // 파일 타입체크
    const validTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/heic', // 아이폰 (최신포맷)
      'image/heif', // 아이폰 다른 포맷
    ];
    const hasInvalidType = photos.some(
      (file) => !validTypes.includes(file.type)
    );
    if (hasInvalidType) {
      return { isValid: false, message: '지원하지 않는 이미지 형식이에요!' };
    }

    // 파일 크기 체크
    const MAX_SIZE = 3 * 1024 * 1024; // 3MB
    const hasLargeFile = photos.some((file) => file.size > MAX_SIZE);
    if (hasLargeFile) {
      return { isValid: false, message: '파일 크기는 3MB 이하여야 해요!' };
    }

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
