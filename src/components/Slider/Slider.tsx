import Card from '../Card/Card';
import { useDistricts } from '../../utils/hooks/useDistricts';
import { imagesData } from '../../utils/data/data';
import { useState } from 'react';
interface SliderProps {
  imageRoute: string;
  districtName: string;
}
export const Slider = (): JSX.Element => {
  const { data } = useDistricts();
  const [selectedCard, setSelectedCard] = useState<SliderProps | null>(null);


  const handleCardClick = (imageRoute: string, districtName: string): void => {
    setSelectedCard({ imageRoute, districtName });
  };
  console.log(selectedCard);

  return (
    <div className='carousel carousel-center 
    rounded-box border 
    flex justify-center md:justify-normal 
    max-h-96 md:p-2'>
      <div className='carousel-item gap-2 items-center p-2 md:p-4 flex flex-col md:flex-row '>
        {data?.map(district => {
          // Find the corresponding image data for the district
          const imageData = imagesData.find(
            image =>
              image.name ===
              district.district_name
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, ''),
          );

          if (imageData != null) {
            return (
              <div key={district._id} className='max-w-xl '
                onClick={() => { handleCardClick(imageData.route, district.district_name); }
                }
              >
                <Card
                  imageRoute={imageData.route}
                  districtName={district.district_name}
                />
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};
