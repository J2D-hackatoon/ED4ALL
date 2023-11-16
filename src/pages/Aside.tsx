export const Aside = () => {
  return (
      <aside className="w-1/3 md:w-1/4 outline outline-cyan-500 min-h-screen p-4 md:p-8">
        <select className="select w-full max-w-xs border border-red-500">
            <option disabled selected>Pick your favorite Simpson</option>
            <option className="p-16 bg-slate-500">Gracia</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
        </select>
      </aside>
  )
}
