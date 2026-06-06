"use client";

import { useState } from "react";
import Input from "@/src/components/ui/Input";
import Label from "@/src/components/ui/Label";
import { useRouter } from "next/navigation";
import { Button } from "@/src/components/common/Button";
import { apiService } from "@/src/services/service";

export default function Login() {
  const [status, setStatus] = useState<{ tipo?: string; mensaje?: string }>({});
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    
    try {
      const datos = await apiService.login(email, password);
      if (datos.token) {
        localStorage.setItem("token", datos.token);
        setStatus({ tipo: "exito", mensaje: "¡Inicio de sesión correcto! Entrando..." });
        setTimeout(() => {
          router.push("/perfil"); 
        }, 1500);
      } else {
        setStatus({ tipo: "error", mensaje: "Credenciales incorrectas." });
      }
    } catch (error) {
      setStatus({ tipo: "error", mensaje: "Error al conectar con el servidor." });
    }
  };

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
            Sign in to your account
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
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
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

            <div className="flex items-center justify-between">
              
              <Button 
      type="button" 
      onClick={() => router.push("/register")}
    >
      Register
    </Button>
    <Button type="submit">
                Sign in
              </Button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}
