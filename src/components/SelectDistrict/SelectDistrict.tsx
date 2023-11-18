import type { APIResults } from '../../types/types';
import { useDistricts } from '../../utils/hooks/useDistricts';
import Select from 'react-select';

export const SelectDistrict = (): JSX.Element => {
  const { isLoading, isError, data } = useDistricts();

  if (isLoading) {
    return <div className='loading loading-spinner'></div>;
  }
  if (isError) {
    return <p>Error loading districts!</p>;
  }

  const options = data?.map((district: APIResults) => ({
    value: district.district_code,
    label: district.district_name,
  }));

  return (
    <Select
      options={options}
      placeholder='Escoge un distrito'
      className='max-w-1/3 min-w-1/3 rounded-md border border-accent  outline-none cursor-pointer'
    />
  );
};
