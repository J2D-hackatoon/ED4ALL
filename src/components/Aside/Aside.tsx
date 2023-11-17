import { useState } from 'react';
import { useDistricts } from '../../utils/hooks/useDistricts';
import { SelectDistrict } from '../SelectDistrict/SelectDistrict';
export const Aside = (): JSX.Element => {
  const [selectedDistrict, setSelectedDistrict] = useState(undefined);
  const { data } = useDistricts();
  const listDistricts = data?.map(district => {
    return (
      <li className='space-y-2 divide-y-2' key={district.district_name}>
        <button
          className='h-8 w-40 px-2 text-left hover:bg-primary rounded '
          onClick={() => {
            document.getElementById('my_modal_5').showModal();
            setSelectedDistrict(district);
          }}
        >
          {district.district_name}
        </button>
        <dialog id='my_modal_5' className='modal modal-bottom sm:modal-middle'>
          <div className='modal-box'>
            <h3 className='font-bold text-lg'>
              {selectedDistrict?.district_name}
            </h3>
            <p className='py-4'>
              Press ESC key or click the button below to close
            </p>
            <div className='modal-action'>
              <form method='dialog'>
                {/* if there is a button in form, it will close the modal */}
                <button className='btn'>Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </li>
    );
  });

  return (
    // el aside ha de estar dentro de un parent con el main
    <aside className='min-h-96 hidden md:flex flex-col'>
      <SelectDistrict />
      <ul>{listDistricts}</ul>
    </aside>
  );
};
