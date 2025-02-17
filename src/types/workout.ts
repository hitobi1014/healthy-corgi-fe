import { WORKOUT_TYPE, WORKOUT_SATISFACTION } from '../constants/workout';

export type WorkoutType = (typeof WORKOUT_TYPE)[keyof typeof WORKOUT_TYPE];
export type WorkoutSatisfaction = typeof WORKOUT_SATISFACTION;

export interface WorkoutSaveRequest {
  photoList: File[]; // 운동 인증 사진(최대 2장), 운동 시작, 종료 인증할경우
  workoutDateTime: Date;
  workoutSatisfaction: WorkoutSatisfaction;
  workoutType: WorkoutType;
  workoutName?: string; // 사용자 정의 운동명 (optional: workoutType이 OTHERS인 경우에만 입력)
}
