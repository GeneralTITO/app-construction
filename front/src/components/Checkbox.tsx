export const RadioButton = ({ label, name, register, value, ...rest }: any) => {
  return (
    <label className="inline-flex items-center">
      <input
        type="radio"
        value={value}
        name={name}
        {...rest}
        {...register}
        className="form-checkbox h-6 w-6 text-blue-500 rounded-full"
      />
      <span className="ml-2">{label}</span>
    </label>
  );
};
