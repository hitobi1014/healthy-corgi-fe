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
import HcButton from '@/components/Button/HcButton';

// 캘린더
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';

export default function WorkoutSave() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

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

    // 모든 데이터 저장 전에 set해서 보내기

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

  const formatDate = (date: Date) => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  return (
    <div>
      <h2 className="text-white ml-5 mb-6 mt-4 text-2xl">헬시코기</h2>
      <div className="bg-white mx-5 rounded-xl px-5 py-3 h-[34svh]">
        {/* 제목: 운동인증*/}
        <h2 className="text-center font-bold text-2xl mb-3">운동인증</h2>

        {/* 2번째 아이템들*/}
        <div className="flex justify-around items-center my-5 px-2">
          {/* 날짜 + 컴포넌트 운동종류*/}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date || new Date())}
                dateFormat="yyyy.MM.dd"
                locale={ko}
                // 모바일 최적화 설정
                popperPlacement="bottom-start"
                className="react-datepicker-ignore-onclickoutside"
                maxDate={new Date()}
                // 모바일 환경 최적화 스타일링
                customInput={
                  <button className="flex items-center gap-2">
                    <span className="text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <p className="text-base text-gray-500">
                      {formatDate(selectedDate)}
                    </p>
                  </button>
                }
              />
            </div>
            <div className="flex items-center space-x-3">
              <p className="text-base font-medium">운동종류</p>
              <HcButton size="small" variant="tag">
                헬스
              </HcButton>
            </div>
          </div>

          {/* 사진 업로더*/}
          <div className="w-28 h-28">
            <PhotoUploader
              photos={workoutData.photoList}
              onPhotosChange={handlePhotos}
              maxPhotos={2}
            />
          </div>
        </div>

        {/* 저장 버튼*/}
        <div className="mt-6 flex justify-center">
          <HcButton
            size="large"
            variant="primary"
            className="w-60 py-3 text-xl"
            // onClick={'handleSubmit'}
          >
            저장
          </HcButton>
        </div>
      </div>
    </div>
  );
}
