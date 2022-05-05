<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function show(Contact $contact)
    {
        return view('contact.show', compact('contact'));
        // return view('contact.show', ['contact' => $contact]);
    }

    public function edit(Contact $contact){

       return view('contact.edit', compact('contact'));
    }

    public function index()
    {
        $contacts = Contact::all();
        return view('contact.index', compact('contacts'));
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'city' => 'required',
            'phone' => 'required',
            'age' => 'required',
            'country' => 'required',
            'image' => 'nullable|image|max:2048',
        ]);

        $imagePath = $request->image ? $request->image->store('contactImage', 'public') : null;

        $contact = auth()->user()->contacts()->create([
            'name' => $request->name,
            'city' => $request->city,
            'phone' => $request->phone,
            'age' => $request->age,
            'country' => $request->country,
            'employee' => $request->employee,
            'image'=> $imagePath,
        ]);

        return redirect(route('contact.show', [$contact]));
    }
    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */

    public function update(Contact $contact, Request $request)
    {
        $request->validate([
            'name' => 'required',
            'city' => 'required',
            'phone' => 'required',
            'age' => 'required',
            'country' => 'required',
            'image' => 'nullable|image|max:2048',
        ]);

        if ($request->user()->cannot('update', $contact)) {
            abort(403);
        }

        if ($request->image) {
            $image = ['image' => $request->image->store('contactImage', 'public')];
        }
        else if($request->removeImage) {
            $image = ['image' => null];
        } else {
            $image = [];
        }

        $contact->update(array_merge(
            [
                'name' => $request->name,
                'city' => $request->city,
                'phone' => $request->phone,
                'age' => $request->age,
                'country' => $request->country,
                'employee' => $request->employee,
            ],
            $image
        ));

        return redirect(route('contact.show', [$contact]));
    }

    public function destroy(Contact $contact, Request $request)
    {
        if ($request->user()->cannot('delete', $contact)) {
            abort(403);
        }

        $contact->delete();

        return redirect(route('contact.index'));
    }
}
