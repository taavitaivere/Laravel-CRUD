<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 2000 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Cubet Techno Labs](https://cubettech.com)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[Many](https://www.many.co.uk)**
- **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
- **[DevSquad](https://devsquad.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[OP.GG](https://op.gg)**
- **[WebReinvent](https://webreinvent.com/?utm_source=laravel&utm_medium=github&utm_campaign=patreon-sponsors)**
- **[Lendio](https://lendio.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Notes

### docker 

Docker container start:

``` bash
./vendor/bin/sail up
```
Open docker container:

``` bash 
docker ps

docker exec -it example-app-laravel.test-1 /bin/bash
```

Docker container stop:

``` bash
./vendor/bin/sail down
```

### Artisan command:

Server command:

``` bash
php artisan serve

npm run dev

npm run watch
```

Database command:

``` bash
php artisan migrate:fresh
```

Generate controller: 

``` bash
php artisan make:controller ContactController
php artisan make:model Contact
```

### CRUD (Create, Read, Update, Delete) Step by step

Create

Creating migration, model, controller, [resource, factory(dummy data)]
``` bash
php artisan make:model Contact -a
```
Creating policy permission.
``` bash
php artisan make:policy ContactPolicy --model=Contact
```

Created views:
resources/views/contact
* create.blade.php
* edit.blade.php
* show.blade.php
* index.blade.php

Created controller methods:
* __construct() - Added Auth middleware to all methods
* show(Contact $contact)
  * Passing contact ID from URL
  * Automatically getting model from provided ID
  * Passing contact model as a parameters to blade view
    * compact('contact') - short hand for creating arrays using key:value pairs with the same name
* index()
  * getting all contacts via eloquent static helper function
  * Passing an array of contacts models to blade view
  * compact('contacts') - short hand for creating arrays using key:value pairs with the same name
* store(Request $request) 
  * Passing form data using POST request 
  * Data validation(making all fields required)
  * Creating a new contact that is related to the auth user.
  * Redirect to a URL that gets the contact id from previously created contact
  
Added new routes:
example-app/routes/web.php

CRUD view endpoints

* /contacts/create
  * Get create form
  * GET method
  * Return contact.create blade view
* /contact/{contact}/edit
  * Get edit form
  * GET method
  * return contact.edit blade view
* /contacts/{contact}
  * Get detail view
  * GET method
  * return contact.show blade view
* /contacts
  * Get list view
  * GET method
  * return contact.index blade view
  
CRUD form endpoints
* /contacts
  * Create contact endpoint
  * POST form method ``` method="POST" ```
  * Send data to database
  * Specify form action ``` action="{{ route('contact.store') }}"```
* /contacts/{contact}
  * Edit contact endpoint
  * POST form method ``` method="POST" ```
  * Send modified data to database
  * Use PATCH method via form parameters ``` @method('PATCH') ```
  * Specify form action ``` action="{{ route('contact.update', [$contact]) }}" ```
  
### Snippets
``` Php
// Translate
{{ __('Add contact') }}

// Use previous value from request
:value="old('country')
```  

Checkbox component:
``` Php
@props(['disabled' => false])
@props(['selected' => false])

<input  
    @checked($selected) 
    type="checkbox" 
    {{$disabled ? 'disabled' : '' }} 
    {!! $attributes->merge(['class' => 'rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50']) !!}
>
```

Calling out checkbox component:
``` Php
<x-checkbox 
    id="employee" 
    class="block mt-1 w-full" 
    name="employee" 
    :selected="old('employee') ?? $contact->employee"  
    autofocus 
/>
```

ContactPolicy.php
* Return user_id who created the contact
```php
return $user->id === $contact->user_id;
```
ContactPolicy implementation with controller
* Only user who created the contact can update 
```php
if ($request->user()->cannot('update', $contact)) {
            abort(403);
        }
```
### Git commands

Change current branch to master: git checkout master

Change current branch to development and create if it does not exist: git checkout -b development 

Push changes to git: git push

Pull changes to git: git pull

Add git commit message: git commit -m ""

Add files to be committed soon: git add

Pull local master branch to current branch: git merge master

Show current status: git status

Get git history: git reflog

Get file difference: git diff | less/more

Undo file changes: git restore

List local branches: git branch

Update metadata: git fetch origin

