import { useDistricts } from '../../utils/hooks/useDistricts';
import { SelectDistrict } from '../SelectDistrict/SelectDistrict';
export const Aside = (): JSX.Element => {
  const { data } = useDistricts();

  const listDistricts = data?.map(district => {
    return <li key={district.district_name}>{district.district_name}</li>;
  });
  return (
    // el aside ha de estar dentro de un parent con el main
    <aside className='min-h-96 hidden md:flex flex-col'>
      <SelectDistrict />
      <ul>{listDistricts}</ul>
    </aside>
  );
};
