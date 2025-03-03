import { useState } from 'react';
// import { WorkoutSaveRequest } from '@/types/workout';
import { WorkoutSaveRequest } from '@/types/workout';
// import { WORKOUT_TYPE } from '@/constants/workout';
import { WORKOUT_TYPE } from '@/constants/workout';
import {
  validation,
  ValidationResult,
} from '@/components/workout/workoutValidation';
// import PhotoUploader from '@/components/workout/PhotoUploader';
import PhotoUploader from '@/components/workout/PhotoUploader';

export default function WorkoutSave() {
  const [workoutData, setWorkoutData] = useState<WorkoutSaveRequest>({
    photoList: [],
    workoutDateTime: new Date(),
    workoutSatisfaction: null,
    workoutType: WORKOUT_TYPE.GYM,
    workoutName: '',
  });
  // 운동

  const handlePhotos = (newPhotos: File[]) => {
    setWorkoutData((prev) => ({
      ...prev,
      photoList: newPhotos,
    }));
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
      <div>
        <h2>운동인증</h2>
      </div>
      <div>
        {/*2번째 컴포넌트 운동종류 + 사진*/}
        <div>
          <div>
            <p>날짜로고</p>
            <p>2025.01.28</p>
          </div>
          <div>
            <p>운동종류</p>
            <button>헬스</button>
          </div>
        </div>
        <div className="p-4">
          <PhotoUploader
            photos={workoutData.photoList}
            onPhotosChange={handlePhotos}
            maxPhotos={2}
          />
        </div>
      </div>
      <div>
        <button onClick={handleSubmit}>저장버튼</button>
      </div>
    </div>
  );
}
