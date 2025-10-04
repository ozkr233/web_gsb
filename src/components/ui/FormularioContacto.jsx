
'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/Button';

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const initialValues = {
  nombreAcudiente: '',
  correo: '',
  telefono: '',
  nombreEstudiante: '',
  gradoInteres: '',
  mensaje: '',
};

function FormularioContacto() {
  const [status, setStatus] = useState('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
  });

  const onSubmit = async (data) => {
    if (!serviceId || !templateId || !publicKey) {
      console.warn('Configura las variables de EmailJS en .env.local');
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      await emailjs.send(serviceId, templateId, data, publicKey);
      setStatus('success');
      reset(initialValues);
    } catch (error) {
      console.error('Error al enviar el formulario', error);
      setStatus('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-6 rounded-3xl bg-neutral-white p-8 shadow-card"
    >
      <div className="grid gap-2">
        <label htmlFor="nombreAcudiente" className="text-sm font-semibold text-neutral-dark">
          Nombre del acudiente *
        </label>
        <input
          id="nombreAcudiente"
          type="text"
          className="rounded-2xl border border-neutral-dark/10 px-4 py-3 text-sm shadow-sm focus:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue/40"
          placeholder="María Fernanda Rojas"
          {...register('nombreAcudiente', { required: 'Ingresa tu nombre completo.' })}
        />
        {errors.nombreAcudiente ? (
          <p className="text-xs font-medium text-primary-red">{errors.nombreAcudiente.message}</p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <label htmlFor="correo" className="text-sm font-semibold text-neutral-dark">
          Correo electrónico *
        </label>
        <input
          id="correo"
          type="email"
          className="rounded-2xl border border-neutral-dark/10 px-4 py-3 text-sm shadow-sm focus:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue/40"
          placeholder="contacto@ejemplo.com"
          {...register('correo', {
            required: 'Ingresa un correo electrónico válido.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Revisa el formato del correo.',
            },
          })}
        />
        {errors.correo ? (
          <p className="text-xs font-medium text-primary-red">{errors.correo.message}</p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <label htmlFor="telefono" className="text-sm font-semibold text-neutral-dark">
          Teléfono de contacto *
        </label>
        <input
          id="telefono"
          type="tel"
          className="rounded-2xl border border-neutral-dark/10 px-4 py-3 text-sm shadow-sm focus:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue/40"
          placeholder="+57 300 000 0000"
          {...register('telefono', {
            required: 'Indica un teléfono de contacto.',
          })}
        />
        {errors.telefono ? (
          <p className="text-xs font-medium text-primary-red">{errors.telefono.message}</p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <label htmlFor="nombreEstudiante" className="text-sm font-semibold text-neutral-dark">
          Nombre del estudiante *
        </label>
        <input
          id="nombreEstudiante"
          type="text"
          className="rounded-2xl border border-neutral-dark/10 px-4 py-3 text-sm shadow-sm focus:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue/40"
          placeholder="Nombre del estudiante"
          {...register('nombreEstudiante', { required: 'Ingresa el nombre del estudiante.' })}
        />
        {errors.nombreEstudiante ? (
          <p className="text-xs font-medium text-primary-red">{errors.nombreEstudiante.message}</p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <label htmlFor="gradoInteres" className="text-sm font-semibold text-neutral-dark">
          Grado de interés *
        </label>
        <select
          id="gradoInteres"
          className="rounded-2xl border border-neutral-dark/10 px-4 py-3 text-sm shadow-sm focus:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue/40"
          {...register('gradoInteres', { required: 'Selecciona un grado.' })}
        >
          <option value="">Selecciona una opción</option>
          <option value="Sexto">Sexto</option>
          <option value="Septimo">Septimo</option>
          <option value="Octavo">Octavo</option>
          <option value="Noveno">Noveno</option>
          <option value="Décimo">Décimo</option>
          <option value="Once">Once</option>
        </select>
        {errors.gradoInteres ? (
          <p className="text-xs font-medium text-primary-red">{errors.gradoInteres.message}</p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <label htmlFor="mensaje" className="text-sm font-semibold text-neutral-dark">
          Cuéntanos más sobre tu familia
        </label>
        <textarea
          id="mensaje"
          rows={4}
          className="rounded-2xl border border-neutral-dark/10 px-4 py-3 text-sm shadow-sm focus:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue/40"
          placeholder="Queremos conocer su enfoque académico y actividades extracurriculares..."
          {...register('mensaje')}
        />
      </div>

      <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <Button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando...' : 'Enviar solicitud'}
        </Button>
        {status === 'success' ? (
          <p className="text-sm font-semibold text-primary-blue">Gracias por escribirnos. Te contactaremos muy pronto.</p>
        ) : null}
        {status === 'error' ? (
          <p className="text-sm font-semibold text-primary-red">No pudimos enviar tu mensaje. Inténtalo más tarde.</p>
        ) : null}
      </div>
    </form>
  );
}

export default FormularioContacto;
