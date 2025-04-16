import React from 'react';
import '@/components/workout/PhotoUploader.scss';
import {
  ValidationResult,
  validation,
} from '@/components/workout/workoutValidation';

interface PhotoUploaderProps {
  photos: File[];
  onPhotosChange: (files: File[]) => void;
  maxPhotos?: number;
}

const PhotoUploader = ({
  photos,
  onPhotosChange,
  maxPhotos = 2,
}: PhotoUploaderProps) => {
  // 파일 선택시 처리
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const newPhotos = [...photos, file];

    const validationResult = validation.photo(newPhotos);
    if (!validationResult.isValid) {
      alert(validationResult.message);
      return;
    }

    // 기존 사진 배열에 사진 추가
    onPhotosChange([...photos, file]);
  };

  // 사진 삭제 함수
  const handleRemovePhoto = (index: number) => {
    const newPhotos = photos.filter((_, i) => i !== index);
    onPhotosChange(newPhotos);
  };
  return (
    <div className="photo-uploader">
      {/*  이미 업로드된 사진들 보여주기*/}
      {photos.map((photo, index) => (
        <div key={index} className="photo-item">
          <img
            src={URL.createObjectURL(photo)}
            alt={`운동 인증 사진 ${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
          {/*  삭제 버튼*/}
          <button
            onClick={(e) => {
              e.stopPropagation(); // 클릭이벤트 방지
              handleRemovePhoto(index);
            }}
            className="delete-button"
            type="button"
          >
            x
          </button>
        </div>
      ))}

      {/*  새 사진 추가 버튼 (최대 개수 미만일 때만 표시*/}
      {photos.length < maxPhotos && (
        <div className="photo-add">
          <div className="cross-container">
            <div className="cross"></div>
          </div>
          <input
            type="file"
            accept="image/*"
            // capture="environment" // 선택적 모바일에서 카메라 바로열기, 나중에 테스트 후 수정
            onChange={handleFileChange}
          />
        </div>
      )}
    </div>
  );
};

export default PhotoUploader;
