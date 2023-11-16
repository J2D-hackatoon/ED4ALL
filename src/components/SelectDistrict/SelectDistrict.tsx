import { useDistricts } from '../../utils/hooks/useDistricts';
import Select from 'react-select';

export const SelectDistrict = () => {
  const { isLoading, isError, data } = useDistricts();

  console.log('DATAAA', data);

  const options = data?.map((district: any) => ({
    value: district.district_code,
    label: district.district_name,
  }));

  return (
    <Select
      options={options}
      placeholder='Escoge un distrito'
      className='w-1/4 rounded-md border border-accent min-w-[250px] md:min-w-[450px] outline-none cursor-pointer'
    />
  );
};
