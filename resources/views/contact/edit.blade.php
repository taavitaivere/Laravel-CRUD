<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Edit contact') }} #{{$contact->id}}
        </h2>
    </x-slot>
    <div class="my-8 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <x-auth-validation-errors class="mb-4" :errors="$errors" />

        <form class="max-w-screen-md w-full" method="POST" action="{{ route('contact.update', [$contact]) }}">
        @method('PATCH')
        @csrf

        <!-- Name -->
            <div>
                <x-label for="name" :value="__('Name')" />

                <x-input id="name" class="block mt-1 w-full" type="text" name="name" :value="old('name') ?? $contact->name"  autofocus />
            </div>
            <div>
                <x-label for="city" :value="__('City')" />

                <x-input id="city" class="block mt-1 w-full" type="text" name="city" :value="old('city') ?? $contact->city"  autofocus />
            </div>
            <div>
                <x-label for="phone" :value="__('Phone')" />

                <x-input id="phone" class="block mt-1 w-full" type="tel" name="phone" :value="old('phone') ?? $contact->phone"  autofocus />
            </div>
            <div>
                <x-label for="age" :value="__('Age')" />

                <x-input id="age" class="block mt-1 w-full" type="text" name="age" :value="old('age') ?? $contact->age"  autofocus />
            </div>
            <div>
                <x-label for="country" :value="__('Country')" />

                <x-input id="country" class="block mt-1 w-full" type="text" name="country" :value="old('country') ?? $contact->country"  autofocus />
            </div>
            <div>
                <x-label for="employee" :value="__('Employee')" />

                <x-checkbox id="employee" class="block mt-1 w-full" name="employee" :selected="old('employee') ?? $contact->employee"  autofocus />
            </div>
            <div class="flex items-center justify-end mt-4">
                <a class="underline text-sm text-gray-600 hover:text-gray-900" href="{{ route('login') }}">
                    {{ __('Already registered?') }}
                </a>

                <x-button class="ml-4">
                    {{ __('Submit') }}
                </x-button>
            </div>
        </form>
    </div>


</x-app-layout>
