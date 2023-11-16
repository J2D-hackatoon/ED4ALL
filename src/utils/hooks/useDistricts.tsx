import { useQuery } from '@tanstack/react-query';
import { fetchDistricts } from '../apis/fetchDistricts';

export const useDistricts = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['districts'],
    queryFn: fetchDistricts,
  });

  return {
    isLoading,
    isError,
    data,
  };
};
