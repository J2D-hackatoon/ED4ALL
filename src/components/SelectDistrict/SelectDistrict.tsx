import { useState } from 'react';
import type { APIResults } from '../../types/types';
import { useDistricts } from '../../utils/hooks/useDistricts';
import { useCenters } from '../../utils/hooks/useCenters';
import Select from 'react-select';
import { CenterDetails } from '../CenterDetails/CenterDetails';

export const SelectDistrict = (): JSX.Element => {
  const { isLoading, isError, data } = useDistricts();
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  if (isLoading) {
    return <div className='loading loading-spinner'></div>;
  }
  if (isError) {
    return <p>Error loading districts!</p>;
  }

  const handleDistrictChange = async (selectedOption: any) => {
    setSelectedDistrict(selectedOption);
    console.log(selectedDistrict);
  };

  const districtCode = selectedDistrict?.value || null;

  const {
    isLoading: centersLoading,
    isError: centersError,
    data: centersData,
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  } = useCenters(districtCode);

  const options = data?.map((district: APIResults) => ({
    value: district.district_code,
    label: district.district_name,
  }));

  return (
    <>
      <Select
        options={options}
        placeholder='Escoge un distrito'
        className='w-1/4 rounded-md border border-accent min-w-[250px] md:min-w-[450px] outline-none cursor-pointer'
        onChange={handleDistrictChange}
      />

      {selectedDistrict && (
        <CenterDetails
          selectedDistrict={selectedDistrict}
          centersData={centersData}
        />
      )}

      {centersLoading && <p>Loading centers data...</p>}
      {centersError && <p>Error loading centers data!</p>}
    </>
  );
};
