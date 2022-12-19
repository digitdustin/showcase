// if (e.target.files) {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       if (typeof reader.result === "string") {
//         setImage(reader.result);
//       }
//     };
//   }

export const handleFileUpload = ({
  e,
  setImage,
}: {
  e: React.ChangeEvent<HTMLInputElement>;
  setImage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  if (e.target.files) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setImage(reader.result);
      }
    };
  }
};
