export const Aside = () => {
  return (
      <aside className="w-1/3 md:w-1/4 outline outline-cyan-500 min-h-screen p-4 md:p-8">
        <select className="select w-full max-w-xs appearance-none bg-transparent border-b-2 border-gray-500 p-2 focus:outline-none">
            <option disabled selected>Escoge un distrito</option>
            <option className="p-16 bg-slate-500 text-accent">Gracia</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
        </select>

        <p className="bg-primary">Colores</p>
        <p className="bg-secondary">primary</p>
        <p className="bg-accent">secondary</p>
        <p className="bg-base">accent</p>
        <p className="bg-">background</p>
      </aside>
  )
}
