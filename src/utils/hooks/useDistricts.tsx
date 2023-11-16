import { useQuery } from '@tanstack/react-query';
import { fetchDistricts } from '../apis/fetchDistricts';
// import type { APIResults } from '../../types/types'; puede traer errores

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
