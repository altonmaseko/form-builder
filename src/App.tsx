import { useState } from 'react'
import { formStore, FormFieldType, InputType } from './store/formStore'
import FormField from './components/FormField'

import { motion } from 'motion/react'

const App = () => {

  let { formFields, addField, resetForm } = formStore()

  let [label, setLabel] = useState<string>('')
  let [type, setType] = useState<InputType | 'select'>('select')

  const handleAddField = () => {
    if (type == 'select' || !label.trim()) return

    let field: FormFieldType = {
      id: Date.now(),
      label,
      type
    }

    addField(field)
    setLabel('')
  }
  const handleResetForm = () => {
    resetForm()
    setLabel('')
    setType('select')
  }

  return (
    <motion.div drag dragConstraints={{ top: 0, bottom: 0, right: 0, left: 0 }} className='shadow flex flex-col items-center gap-4 p-8 bg-[#191a21] text-white min-w-[400px] rounded-lg'>
      <h1>Alton's Form Builder</h1>
      <header className='flex flex-col w-full gap-2 justify-center items-center'>
        <input value={label} onChange={(e) => setLabel(e.currentTarget.value)} placeholder='Title of Field' className='p-2 text-black rounded-lg w-full' type="text" />
        <select value={type} onChange={(e) => setType(e.currentTarget.value as InputType)} className='text-black p-2 rounded-lg w-full' name="type" id="typeSelector">
          <option value="select" disabled>Select Input Field Type</option>
          <option value="text">Plain Text</option>
          <option value="date">Date</option>
          <option value="number">Number</option>
          <option value="password">Password</option>
          <option value="file">Take In File</option>
        </select>
        <div className='flex gap-2 justify-end w-full'>
          <button onClick={handleAddField} className='px-4 py-2 rounded bg-teal-500 transition-all hover:scale-105 active:scale-95'>Add Field</button>
          <button onClick={handleResetForm} className='px-4 py-2 rounded bg-[indianred] transition-all hover:scale-105 active:scale-95'>Reset Form</button>
        </div>
      </header>
      <main className='w-full flex flex-col gap-2'>
        {/* Dynamically render all the Fields */}
        {formFields.map(({ id, label, type }, i) => (
          <FormField key={i} label={label} type={type} id={id} />
        ))}
      </main>
    </motion.div>
  )
}

export default App