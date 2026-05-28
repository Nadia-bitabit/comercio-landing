"use client";

const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  }
]

import { Button } from '@/src/components/common/Button'
import { apiService } from '@/src/services/service';
import {
  BriefcaseIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  MapPinIcon,
} from '@heroicons/react/20/solid'

import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';

export default function Example() {

  const [usuario, setUsuario] = useState<any>(null);
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }
    setLoading(true);
      apiService.getPerfil(token)
      .then((datos) => {
        if (!datos.error) {
          console.log("Datos del perfil:", datos);
          setUsuario(datos.usuario);
        } else {
          localStorage.removeItem("token");
          router.push("/login");
        }
      })
      .catch(() => {
        router.push("/login");
      })
      .finally(() => {
      setLoading(false); 
    });
  }, [router]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] mt-20 text-teal-700">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-teal-200 border-t-teal-700 mb-4"></div>
        <p className="font-bold text-lg animate-pulse">Cargando perfil...</p>
      </div>
    );
  }

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push("/login");
    }

  return (
    <div className="lg:flex flex-col lg:justify-between pt-25 px-6">
        <div className="flex min-w-0 gap-x-4">
            <img alt="" src={usuario?.imageUrl} className="size-12 flex-none rounded-full bg-gray-50" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-gray-900">{usuario?.nombre}</p>
              <p className="mt-1 truncate text-xs/5 text-gray-500">{usuario?.email}</p>
            </div>
        </div>
        <div className="min-w-0 flex-1">
        <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Back End Developer
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <BriefcaseIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
            Full-time
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <MapPinIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
            Remote
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CurrencyDollarIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
            $120k &ndash; $140k
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CalendarIcon aria-hidden="true" className="mr-1.5 size-5 shrink-0 text-gray-400" />
            Closing on January 9, 2020
          </div>
        </div>
            <div className="mt-6 flex items-center gap-x-3">
            <Button onClick={handleLogout} >Cerrar sesión</Button>
            </div>
        </div>
        

    </div>
  )
}
