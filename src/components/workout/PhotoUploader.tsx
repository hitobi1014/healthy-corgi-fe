import React from 'react';
import { ValidationResult, validation } from './workoutValidation';

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
    <div className="grid grid-cols-2 gap-2">
      {/*  이미 업로드된 사진들 보여주기*/}
      {photos.map((photo, index) => (
        <div key={index} className="relative aspect-square">
          <img
            src={URL.createObjectURL(photo)}
            alt={`운동 인증 사진 ${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
          {/*  삭제 버튼*/}
          <button
            onClick={() => handleRemovePhoto(index)}
            className="absolute top-2 right-2 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center"
            type="button"
          >
            x
          </button>
        </div>
      ))}

      {/*  새 사진 추가 버튼 (최대 개수 미만일 때만 표시*/}
      {photos.length < maxPhotos && (
        <div className="relative aspect-square bg-gray-100 rounded-lg">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl mb-2">📸</span>
            <span className="text-sm text-gray-500">
              {photos.length === 0 ? '운동 인증 사진 추가' : '추가 사진 업로드'}
            </span>
          </div>
          <input
            type="file"
            accept="image/*"
            // capture="environment" // 선택적 모바일에서 카메라 바로열기, 나중에 테스트 후 수정
            className="absolute inset-0 opacity-0"
            onChange={handleFileChange}
          />
        </div>
      )}
    </div>
  );
};

export default PhotoUploader;
