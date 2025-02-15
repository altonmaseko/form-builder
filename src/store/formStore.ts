import { create } from "zustand";

type InputType = 'text' | 'date' | 'number' | 'file' | 'password'

type FormFieldType = {
  id: number,
  label: string,
  type: InputType,
}

type FormStore = {
  formFields: FormFieldType[],
  addField: (field: FormFieldType) => void,
  removeField: (id: number) => void,
  resetForm: () => void
}

const formStore = create<FormStore>((set) => ({
  formFields: [],
  addField: (field) => set((state) => ({ formFields: [...state.formFields, field] })),
  removeField: (id) => set((state) => ({ formFields: state.formFields.filter(f => f.id != id) })),
  resetForm: () => set({ formFields: [] })
}))

export { formStore, type FormFieldType, type InputType }