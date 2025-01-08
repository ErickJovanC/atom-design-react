import { Header } from "./header/Header";
import { Button } from "basic-ui";
import { ButtonGroup } from "./utils/ButtonGroup";
import { Select } from "./form/Select";
import { Table } from "./table/Table";

const MainInterface = () => {
  return (
    <>
      <Header />
      <div class="container mx-auto px-4 py-6">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <span className="text-3xl font-bold mb-4">Clases</span><br>
            </br>
            <span className="text-gray-600 mb-6">Organiza y administra fácilmente tus clases, profesores, materias y alumnos en un solo lugar.</span>
          </div>
          <div className="col-span-6">
            <div className="flex items-center gap-4">
              <Button children="Actualizar" size="xl" className='bg-gray-100 border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-200' />
              <Button children="Importar Clases" size="xl" className='bg-gray-100 border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-200' />
              <Button children="+ Crear Clase" size="xl" className='bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600' />
            </div>
          </div>
          <div className="col-span-12">
            <hr className="my-2"/>
          </div>
          <div className="col-span-12 flex gap-4 mb-4">
            <ButtonGroup
              items={[
                {
                  label: "General",
                  isActive: false,
                  src: "#",
                },
                {
                  label: "Alumnos",
                  isActive: false,
                  src: "#"
                },
                {
                  label: "Profesores",
                  isActive: false,
                  src: "#"
                },
                {
                  label: "Descuentos",
                  isActive: false,
                  src: "#"
                },
                {
                  label: "Clases",
                  isActive: true,
                  src: "#"
                }
              ]}
            />
          </div>
          <div className="col-span-12">
            <div className="text-2xl font-bold my-2">Listado de clases</div>
          </div>
          <div className="col-span-6">
            <div className="flex justify-between items-center mb-4">
              <div className="relative w-2/3">
                <input type="text" placeholder="Buscar" className="w-full border border-gray-300 rounded px-4 py-2" />
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div class="flex gap-4 mb-4">
              <Select options={[
                {
                  label: "Todos los niveles",
                  value: "#"
                },
                {
                  label: "Primaria",
                  value: "#"
                },
                {
                  label: "Secundaria",
                  value: "#"
                },
                {
                  label: "Superior",
                  value: "#"
                }
              ]}/>
              <Select options={[
                {
                  label: "Todos los sellos",
                  value: "#"
                  },
                  {
                    label: "Sello A",
                    value: "#"
                  },
                  {
                    label: "Sello B",
                    value: "#"
                  }
              ]}/>
              <Select options={[
                {
                  label: "Todos los colegios",
                  value: "#"
                },
                {
                  label: "Colegio A",
                  value: "#"
                },
                {
                  label: "Colegio B",
                  value: "#"
                }
              ]}/>
            </div>
          </div>
          <div className="col-span-12">
              <Table
                columns={[
                  'Clase',
                  'Clave',
                  'Sello',
                  'Colegio',
                  'Ciclo escolar',
                  'Nivel',
                  'Grupo base',
                  'Acciones'
                ]}
                data={[
                  {
                    'Clase': 'Ciencias Naturales',
                    'Clave': '1RED',
                    'Sello': 'Patitos',
                    'Colegio': 'Colegio A',
                    'Ciclo escolar': '2024 -2025',
                    'Nivel': 'Secundaria',
                    'Grupo base': '1° Primero Secundaria B'
                  },
                  {
                    'Clase': 'Matemáticas',
                    'Clave': '1Blue',
                    'Sello': 'Gatitos',
                    'Colegio': 'Del Valle',
                    'Ciclo escolar': '2024 - 2025',
                    'Nivel': 'Secundaria',
                    'Grupo base': '3ro Secundaria A'
                  },
                  {
                    'Clase': 'Lectura y Compresión',
                    'Clave': '1Yellow',
                    'Sello': 'Patitos',
                    'Colegio': 'Colegio B',
                    'Ciclo escolar': '2023 -2025',
                    'Nivel': 'Secundaria',
                    'Grupo base': '6to Primaria C'
                  }
              ]}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainInterface;