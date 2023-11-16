import Select from "react-select"
export const SelectDistrict = () => {
    const options = [
        // Aquí iran los distritos
        { value: 'chocolate', label: 'distrito1' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

  return (
    <Select options={options} placeholder="Escoge un distrito"  className="w-1/5 rounded-md border border-accent min-w-[250px] md:min-w-[450px] outline-none cursor-pointer"/>
  )
}
