"use client";
import { supabaseClient } from "app/database/supabase";
import React, { useEffect, useState } from "react";

const Form = () => {
  /* Vamos a manejar las variables de nuestro formulario */
  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [curp, setCurp] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [sex, setSex] = useState("");
  const [address, setAddress] = useState("");

  /* Creamos funcion para mandar datos del formulario */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabaseClient.from("usuarios").insert([
      {
        name,
        last_name,
        curp,
        phone_number,
        email,
        birthdate,
        sex,
        address,
      },
    ]);
    console.log(data);
    console.log(error);
  };

  /*
  TAREA
  - Mandar los formuarios a nuestra base de datos
  - Investigar los tipos de campos del formulario correctos
  - En la funcion recuperar la información y mandarla a la base de datos
  - En el campo y el campo dirección, mandar a traer información con useEffect
  */

  return (
    <>
      <form className="form-horizontal">
        <fieldset>
          {/* Form Name */}
          <legend>Form Name</legend>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="name">
              Nombre
            </label>
            <div className="col-md-4">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Nombre aquí"
                className="form-control input-md"
              />
            </div>
          </div>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="last_name">
              Apellidos
            </label>
            <div className="col-md-4">
              <input
                id="last_name"
                name="last_name"
                type="text"
                placeholder="Apellidos aquí"
                className="form-control input-md"
              />
            </div>
          </div>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="curpo">
              CURP
            </label>
            <div className="col-md-4">
              <input
                id="curp"
                name="curp"
                type="text"
                placeholder="CURP (18)"
                className="form-control input-md"
              />
            </div>
          </div>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="phone_number">
              Teléfono
            </label>
            <div className="col-md-4">
              <input
                id="phone_number"
                name="phone_number"
                type="text"
                placeholder="Teléfono"
                className="form-control input-md"
              />
            </div>
          </div>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="email">
              Correo
            </label>
            <div className="col-md-4">
              <input
                id="email"
                name="email"
                type="text"
                placeholder="email@email.com"
                className="form-control input-md"
              />
            </div>
          </div>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="birthdate">
              Fecha de Nacimiento
            </label>
            <div className="col-md-4">
              <input
                id="birthdate"
                name="birthdate"
                type="date"
                placeholder="dd/mm/yyyy"
                className="form-control input-md"
              />
            </div>
          </div>
          {/* Select Basic */}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="sex">
              Sexo
            </label>
            <div className="col-md-4">
              <select id="sex" name="sex" className="form-control">
                <option value={1}>Option one</option>
                <option value={2}>Option two</option>
              </select>
            </div>
          </div>
          {/* Select Basic */}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="address">
              Dirección
            </label>
            <div className="col-md-4">
              <select id="address" name="address" className="form-control">
                <option value={1}>Option one</option>
                <option value={2}>Option two</option>
              </select>
            </div>
          </div>
        </fieldset>
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </>
  );
};

export default Form;
