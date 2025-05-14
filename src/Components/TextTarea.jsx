export default function TextTarea({ name, rows, placeholder }) {
    return (
      <div>
      <label htmlFor={name}>{placeholder}</label>
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        rows={rows}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-aquamarine-500 focus:outline-none focus:ring-0 focus:border-aquamarine-600"
      />
      </div>
    );
  }
  