import AppLayout from '@/layouts/app-layout';
import about from '@/routes/about';
import { type About, type BreadcrumbItem } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { LoaderCircle } from 'lucide-react';
import InputError from '@/components/input-error';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'About Page',
        href: about.edit().url,
    },
];

export default function About() {
    const { about: aboutData } = usePage<{ about: About }>().props;

    const { data, setData, patch, processing, errors } = useForm({
        title: aboutData.title,
        description: aboutData.description,
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        patch(`/about/${aboutData.id}`, {
            preserveScroll: true,
        });
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="About Page" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl bg-white p-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <Input
                            id="title"
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                            className="mt-1"
                        />
                        <InputError message={errors.title} className="mt-1" />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <Textarea
                            id="description"
                            rows={4}
                            value={data.description}
                            onChange={e => setData('description', e.target.value)}
                            className="mt-1"
                        />
                        <InputError message={errors.description} className="mt-1" />
                    </div>

                    <div className="flex justify-end">
                        <Button type="submit" disabled={processing}>
                            {processing && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
                            Save Changes
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
