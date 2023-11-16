import Select from "react-select"
import {useState, useEffect} from "react"

export const SelectDistrict = () => {

  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    // Fetch data from your backend
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/districts");
        const data = await response.json();

        // Transform data into the format expected by react-select
        const options = data.map((district: any) => ({
          value: district.district_code,
          label: district.district_name,
        }));

        // Set the options in the state
        setDistricts(options);
      } catch (error) {
        console.error("Error fetching districts:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);


    // const options = [
    //     // Aquí iran los distritos
    //     { value: 'chocolate', label: 'distrito1' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    // ]

  return (
    <Select options={districts} placeholder="Escoge un distrito"  className="w-1/4 rounded-md border border-accent min-w-[250px] md:min-w-[450px] outline-none cursor-pointer"/>
  )
}
