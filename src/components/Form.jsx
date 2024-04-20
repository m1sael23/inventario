"use client";
import React, { useState } from "react";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qxmxgrkvordlsjkrntrc.supabase.co'; // Tu URL de Supabase
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4bXhncmt2b3JkbHNqa3JudHJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1NzYwNzEsImV4cCI6MjAyOTE1MjA3MX0.Bt90PhJ_qotu-KlBrZTZp3isoQ6fu4bupGvQhxmkK1M'; // Tu clave API de Supabase

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Form = () => {
  // Estado para cada campo del formulario
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [cantidad, setCantidad] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!nombre || !precio || !descripcion || !cantidad) {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
    const precioNumero = Number(precio);
    const cantidadNumero = Number(cantidad);
  
    if (isNaN(precioNumero) || isNaN(cantidadNumero)) {
      alert('Precio y cantidad deben ser números.');
      return;
    }
  
    const { data, error } = await supabase
    .from('productos')
    .insert([
      {
        nombre: nombre,
        precio: precio,
        descripcion: descripcion,
        cantidad: cantidad
      }
    ]);
  
  if (error) {
    console.error('Error al insertar el producto:', error);
  } else {
    console.log('Producto insertado con éxito:', data);
  }
  

    
  };

  // Formulario HTML
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
      <input type="text" placeholder="Precio" value={precio} onChange={e => setPrecio(e.target.value)} />
      <input type="text" placeholder="Descripción" value={descripcion} onChange={e => setDescripcion(e.target.value)} />
      <input type="text" placeholder="Cantidad" value={cantidad} onChange={e => setCantidad(e.target.value)} />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default Form;
