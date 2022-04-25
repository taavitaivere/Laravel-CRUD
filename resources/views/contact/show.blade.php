<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Contact') }} #{{$contact->id}}
        </h2>
    </x-slot>
    <div class="max-w-2xl w-full mx-auto my-8 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div class="max-w-2xl w-full border border-gray-300 p-4 mb-4">
            <div class="border-b border-gray-300 p-2">Name: {{ $contact->name }}</div>
            <div class="border-b border-gray-300 p-2">City: {{ $contact->city }}</div>
            <div class="border-b border-gray-300 p-2">Phone: {{ $contact->phone }}</div>
            <div class="border-b border-gray-300 p-2">Age: {{ $contact->age }}</div>
            <div class="border-b border-gray-300 p-2">Country: {{ $contact->country }}</div>
            <div class="border-b border-gray-300 p-2">Employee: {{ $contact->employee ? __('true') : __('false')}}</div>
            <div>
                <a class="block text-center rounded bg-indigo-600 text-indigo-50 p-2 hover:bg-indigo-400"  href="{{ route('contact.edit', [$contact]) }}">
                    {{ __('Edit') }}
                </a>
            </div>
        </div>
    </div>

</x-app-layout>

