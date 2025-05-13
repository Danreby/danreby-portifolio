import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import flasher from '@flasher/flasher';

const Results = ({ flash = {}, results = [], pageType = 'sucata', title = 'sucata', wasDone = null, auth }) => {
    useEffect(() => {
        if (flash.message) {
            flasher.render(flash.message);
        }
    }, [flash]);

    return (
        <>
            <Head title="Results" />
            <AuthenticatedLayout user={auth.user}>
                <div className="py-4">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className={`bg-white w-full min-h-[80vh] border-[2px] rounded-md shadow-lg p-4 flex items-center flex-col gap-1 ${wasDone ? 'border-green-500' : 'border-red-500'}`}>
                            <h1 className="text-lg font-bold">{title}</h1>
                            <div className="w-full">
                                <Link href={route('dashboard', { list: pageType })} className="bg-vix-green-100 px-4 py-2 rounded-md text-white border border-[#1f1f1f44] hover:bg-vix-green-200 transition-all duration-500">
                                    Voltar
                                </Link>
                            </div>
                            {wasDone !== null && (
                                <div className={`border p-2 rounded-md ${wasDone ? 'border-green-500' : 'border-red-500'}`}>
                                    {wasDone ? 'Inclusão Realizada' : 'Não Foi Possível Incluir Nenhum Item'}
                                </div>
                            )}
                            {results.success?.map((result) => (
                                <p key={result.id} className="bg-vix-green-200 rounded-sm w-[80%] text-center text-white">
                                    {result.id} {result.message}
                                </p>
                            ))}
                            {results.fail?.map((result) => (
                                <p key={result.id} className="bg-vix-red-100 rounded-sm w-[80%] text-center text-white">
                                    {result.id} {result.message}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Results;
