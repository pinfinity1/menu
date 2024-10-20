'use client';
import {Logo} from '@/Components/Logo/Logo';
import {Header} from '@/Components/Header/Header';
import {MenuItem} from '@/Components/MenuItem/MenuItem';
import {Suspense} from 'react';
import Loading from '@/app/loading';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';


const queryClient = new QueryClient();

export default async function Home() {
 
  return (
      <main
          className="w-full relative md:max-w-[80%] lg:max-w-[40%] mx-auto h-full md:border md:shadow font-picoopic px-4 py-4">
        <Suspense fallback={<Loading/>}>
          <QueryClientProvider client={queryClient}>
            <Logo/>
            <Header/>
            <MenuItem/>
          </QueryClientProvider>
        </Suspense>
      </main>
  );
}
