import { type District } from '../../types/types';
import { useDistricts } from '../../utils/hooks/useDistricts';
import { useStore } from '../../store/useStore';
// import Select, { type SingleValue } from 'react-select';
// import { ChangeEvent } from 'react';

export const SelectDistrict = (): JSX.Element => {
  const { isLoading, isError, data } = useDistricts();
  const { setSelectedDistrict, selectedDistrict } = useStore();
  const handleDistrictSelect = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedValue = event.target.value;
    const selectedDistrictObject = data?.find((district: District) => district.district_name === selectedValue);
    setSelectedDistrict(selectedDistrictObject);
    setSelectedDistrict(selectedDistrictObject);
  };

  if (isLoading) {
    return <div className='loading loading-spinner'></div>;
  }
  if (isError) {
    return <p>Error loading districts!</p>;
  }

  // const options = data?.map((district: District) => ({
  //   value: district.district_code,
  //   label: district.district_name,

  // }));

  console.log(selectedDistrict)

  return (
    // <Select
    //   options={options}
    //   placeholder='Escoge un distrito'
    //   className='max-w-1/3 min-w-1/3 rounded-md border border-accent  outline-none cursor-pointer'
    //   onChange={(newValue: SingleValue<{ value: number; label: string; District: District }>) => handleDistrictSelect(newValue)}
    // />
    <label className='flex flex-col font-bold' >
      Selecciona un distrito
      <select
        className=' max-w-1/3 min-w-1/3 rounded-md border border-accent p-2 outline-none cursor-pointer appearance-none'
        onChange={(event) => { handleDistrictSelect(event) }}>
        {data?.map((district: District) => (
          <option key={district.district_code}
            value={district.district_name}
            className='bg-gray-100 text-gray-800 m-5' >
            {district.district_name}
          </option>
        ))}
      </select>
    </label>
  );
};
