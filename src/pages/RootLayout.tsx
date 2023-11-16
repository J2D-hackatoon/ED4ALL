export const RootLayout = () => {
  return (
    <main className="min-h-screen outline outline-red-500 flex">
        <aside className="w-1/3 md:w-1/4 outline outline-cyan-500 min-h-screen p-4 md:p-8">
        <select className="select w-full max-w-xs">
            <option disabled selected>Pick your favorite Simpson</option>
            <option>Gracia</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
        </select>
        </aside>
        <div className="flex flex-col p-4 md:p-8">
            <h1>TITLE</h1>
            <div></div>
        </div>
    </main>
  )
}
