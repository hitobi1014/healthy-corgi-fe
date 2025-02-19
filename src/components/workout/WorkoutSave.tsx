import { useState } from 'react';
import { WorkoutSaveRequest } from '@/types/workout';
import { WORKOUT_TYPE } from '@/constants/workout';
import { ValidationResult, validation } from './workoutValidation';
import { types } from 'sass';
import Error = types.Error;

export default function WorkOutSave() {
  const [workoutData, setWorkoutData] = useState<WorkoutSaveRequest>({
    photoList: [],
    workoutDateTime: new Date(),
    workoutSatisfaction: null,
    workoutType: WORKOUT_TYPE.GYM,
    workoutName: '',
  });
  // 운동

  const handlePhotos = (e: any) => {
    e.preventDefault();
    // 사진 유효성 검사
    printValidationResult(validation.photo(workoutData.photoList));
  };

  const handleWorkoutDateTime = (e: any) => {
    e.preventDefault();

    printValidationResult(validation.date(workoutData.workoutDateTime));
  };

  const handleWorkoutSatisfaction = (e: any) => {
    e.preventDefault();

    printValidationResult(
      validation.satisfaction(workoutData.workoutSatisfaction)
    );
  };

  const handleWorkoutNameChange = (e: any) => {
    e.preventDefault();
    printValidationResult(
      validation.type(workoutData.workoutType, workoutData?.workoutName)
    );
  };
  /**
   * 저장시 각 데이터 검증 후 이상없는경우 api 호출
   * @param e
   */
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // 데이터 검증 => 날짜, 운동종류, 사진
    printValidationResult(validation.all(workoutData));

    // TODO 데이터 저장 api 호출
  };

  const printValidationResult = (result: ValidationResult) => {
    if (!result.isValid) {
      // 메세지 출력 어떻게할지?
      alert(result.message); // 임시
    }
  };

  return (
    <div>
      {/*  운동인증현황 컴포넌트*/}
      <div>운동인증</div>
      <div>{/*2번째 컴포넌트 운동종류 + 사진*/}</div>
      <div>저장버튼</div>
    </div>
  );
}
