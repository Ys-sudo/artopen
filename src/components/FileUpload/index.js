import React from 'react';

function FileUpload(props) {
  const {field, form} = props;

  const handleChange = (e) => {
    const file  =  e.currentTarget.files[0];
    const reader = new FileReader();
    const imgTag = document.getElementById("myimage");
    imgTag.title = file.name;
    reader.onload = function(event) {
      imgTag.src = event.target.result;
    };
    reader.readAsDataURL(file);
    form.setFieldValue(field.name, file);
  };

  return (
    <div>
      <input type={'file'} onChange={(o) => handleChange(o)} className={'form-control'}/>
        <img src={''} alt="" id={'myimage'}/>
    </div>
  );
}

export default FileUpload;
