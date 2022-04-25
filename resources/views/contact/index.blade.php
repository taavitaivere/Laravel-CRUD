<x-app-layout>
    <x-slot name="header">
        <h2 class="mr-2 inline-block font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Contact list') }}
        </h2>
        <a class="inline-block px-2 py-1 rounded bg-indigo-600 text-sm text-indigo-50  hover:bg-indigo-400"  href="{{ route('contact.create') }}">
            {{ __('Create') }}
        </a>
    </x-slot>
    <div class="max-w-2xl w-full mx-auto grid grid-cols-3 gap-4 my-8 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        @foreach ($contacts as $contact)
            <div class="max-w-xs w-full border border-gray-300 p-4 mb-4">
                <div class="border-b border-gray-300 p-2">Name: {{ $contact->name }}</div>
                <div class="border-b border-gray-300 p-2">City: {{ $contact->city }}</div>
                <div class="border-b border-gray-300 p-2">Phone: {{ $contact->phone }}</div>
                <div class="border-b border-gray-300 p-2">Age: {{ $contact->age }}</div>
                <div class="border-b border-gray-300 p-2">Country: {{ $contact->country }}</div>
                <div class="border-b border-gray-300 p-2">Employee: {{ $contact->employee ? __('true') : __('false')}}</div>
                <div>
                    <a class="mb-2 block text-center rounded bg-indigo-600 text-indigo-50 p-2 hover:bg-indigo-400"  href="{{ route('contact.edit', [$contact]) }}">
                        {{ __('Edit') }}
                    </a>
                    <a class="block text-center rounded bg-indigo-600 text-indigo-50 p-2 hover:bg-indigo-400"  href="{{ route('contact.show', [$contact]) }}">
                        {{ __('View') }}
                    </a>
                </div>
            </div>
        @endforeach
    </div>

</x-app-layout>
