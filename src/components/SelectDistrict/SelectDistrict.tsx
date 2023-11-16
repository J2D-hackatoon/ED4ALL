import { useDistricts } from "../../utils/hooks/useDistricts"

export const SelectDistrict = () => {

  const { isLoading, isError, data } = useDistricts();

  console.log("DATAAA", data);

  return (
    // <Select options={districts} placeholder="Escoge un distrito"  className="w-1/4 rounded-md border border-accent min-w-[250px] md:min-w-[450px] outline-none cursor-pointer"/>
    <div className="border border-red-400">test</div>
  )
}
