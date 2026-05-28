"use client";

import { useState } from "react";
import Input from "@/src/components/ui/Input";
import Label from "@/src/components/ui/Label";
import { useRouter } from "next/navigation";
import Link from "next/dist/client/link";
import {Button} from "@/src/components/common/Button";
import { apiService } from "@/src/services/service";

export default function Register() {
  const [status, setStatus] = useState<{ tipo?: string; mensaje?: string }>({});
  const router = useRouter();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const apellido = formData.get("apellido");
    const nombre = formData.get("nombre");

    try {
    const datos = await apiService.register({ nombre, apellido, email, password });

    if (datos.error) {
      setStatus({ tipo: "error", mensaje: datos.error });
    } else {
      setStatus({ tipo: "exito", mensaje: "¡Registro exitoso! Redirigiendo al perfil..." });
      
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }
  } catch (error) {
    setStatus({ tipo: "error", mensaje: "Error al conectar con el servidor." });
  }
  }
    
    

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Register for an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {status.mensaje && (
    <div className={`mb-4 p-3 rounded-lg text-sm font-medium text-center ${
      status.tipo === "exito" 
        ? "bg-green-100 text-green-800 border border-green-200" 
        : "bg-red-100 text-red-800 border border-red-200"
    }`}>
      {status.mensaje}
    </div>
  )}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <Label htmlFor="nombre">
                Nombre de usuario
              </Label>
              <div className="mt-2">
                <Input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  autoComplete="name"
                  placeholder="Nombre de usuario"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="apellido">
                Apellido
              </Label>
              <div className="mt-2">
                <Input
                  type="text"
                  id="apellido"
                  name="apellido"
                  required
                  autoComplete="family-name"
                  placeholder="Apellido de usuario"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">
                Email address
              </Label>
              <div className="mt-2">
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="email@ejemplo.com"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password"> Password </Label>
                <div className="text-sm">
                </div>
              </div>
              <div className="mt-2">
                <Input
                  type="password"
                  id="password"
                  name="password"
                  required
                  autoComplete="current-password"
                  placeholder="*********"
                  />
              </div>
            </div>

            <div className="flex items-center justify-between" >
              <Button 
                type="button" 
                onClick={() => router.push("/login")}
                >
                Login
                </Button>
              <Button
                type="submit">
                Register
              </Button>
            </div>
          </form>   

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
