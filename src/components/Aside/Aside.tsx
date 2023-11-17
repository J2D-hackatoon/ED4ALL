
import { SelectDistrict } from "../SelectDistrict/SelectDistrict"
export const Aside = (): JSX.Element => {
  return (
    // el aside ha de estar dentro de un parent con el main
      <aside className="min-h-96 hidden md:flex">
        <SelectDistrict />
      </aside>
  )
}
