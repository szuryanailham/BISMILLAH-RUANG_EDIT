<?php

namespace App\Http\Controllers;

use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class GoogleAuthController extends Controller
{
    // Redirect ke Google
   public function redirectToGoogle()
{
    /** @var \Laravel\Socialite\Two\AbstractProvider $provider */
$provider = Socialite::driver('google');

return $provider->with(['prompt' => 'select_account'])->redirect();
}


    // Callback dari Google
      public function handleGoogleCallback()
    {
        $googleUser = Socialite::driver('google')->user();
            $user = User::where('google_id', $googleUser->getId())->first();
            if (!$user) {
                $newUser = User::create([
                    'name' => $googleUser->getName(),
                    'email' => $googleUser->getEmail(),
                    'email_verified_at' => now(),
                    'remember_token' => Str::random(60),
                    'google_id' => $googleUser->getId(),
                ]);

                Auth::login($newUser);

                // return redirect()->intended('/');
                 return redirect()->route('home')
                    ->with('success', 'Anda Berhasil Login!');
            } else {
                Auth::login($user);
                 return redirect()->route('home')
                    ->with('success', 'Anda Berhasil Login!');
            }
    }
}
