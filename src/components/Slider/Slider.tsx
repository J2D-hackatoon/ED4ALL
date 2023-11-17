import Card from '../Card/Card';
import { useDistricts } from '../../utils/hooks/useDistricts';
import { imagesData } from '../../utils/data/data';

export const Slider = (): JSX.Element => {
  const { data } = useDistricts();

  return (
    <div className='carousel carousel-center w-full  gap-0.5 space-x-4 rounded-box max-w-2xl border p-2'>
      <div className='carousel-item gap-2 items-center p-4 md:p-8'>
        {data?.map(district => {
          // Find the corresponding image data for the district
          const imageData = imagesData.find(
            image =>
              image.name ===
              district.district_name
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, ''),
          );

          if (imageData) {
            return (
              <div key={district._id}>
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
