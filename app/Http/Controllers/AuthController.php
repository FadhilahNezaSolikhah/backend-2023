<?php

namespace App\Http\Controllers;

Use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    // membuat fitur register
    public function register(Request $request){
        // validasi data request
        $input = [
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ];
        
        // menginsert data ke table users
        $user = User::create($input);

        $data = [
            'message' => 'User is created succressfully',
        ];

        // mengirim response JSON
        return response()->json($data, 200);
    }

    // membuat fitur login
    public function login(Request $request){
        // Menangkap input user
        $input = [
            'email' => $request->email,
            'password' => $request->password
        ];

        // mengambil data user (DB)
        $user = User::where('email', $input['email'])->first();

        // membandingkan input user dengan data user
        $isLoginSuccesfully  = (
            $input['email'] == $user->email &&
            Hash::check($input['password'], $user->password)
        );

        if ($isLoginSuccesfully) {
            // membuat token untuk user
            $token = $user->createToken('authToken');

            $data = [
                'message' => 'User is login successfully',
                'token' => $token->plainTextToken,
            ];

        // mengirim response JSON
        return response()->json($data, 200);
    } else {
        $data = [
            'message' => 'Username or password is wrong'
        ];
        
        return response()->json($data, 401);
    }
}
}