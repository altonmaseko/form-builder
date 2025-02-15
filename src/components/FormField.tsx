import { formStore, InputType } from "../store/formStore"

type FormFieldType = { label: string, type: InputType, id: number }

const FormField = ({ label, type, id }: FormFieldType) => {

  let { removeField } = formStore()

  const handleRemoveField = (id: number) => {
    removeField(id)
  }

  return (
    <div className="flex flex-col gap-2 w-full px-4 py-2 rounded-lg shadow-xl bg-[#282a36]">
      <h3>{label}</h3>
      <input className={`p-2 ${type == 'file' ? 'text-white' : 'text-black'} rounded-lg w-full`} type={type} />
      <button onClick={() => handleRemoveField(id)} className='w-fit px-4 py-2 rounded bg-[indianred] transition-all hover:scale-105 active:scale-95'>Remove</button>
    </div>
  )
}

export default FormField