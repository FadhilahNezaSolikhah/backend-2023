<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function index (){
        $students = Student::all();

        // jika data kosong maka kirim status code 204
        if($students->isEmpty()){
            $data = [
                'message' => 'Resource is empty',
            ];

        return response()->json($data, 204);
        }
        $data = [
            'message' => 'Get all students succesfully',
            'data' => $students,
        ];


        return response()->json($data, 200);
    }


    public function show($id){
        $student = Student::find($id);

        // jika data tidak ditemukan maka kirim status code 404
        if(!$student){
            $data = [
                'message' => 'Student not found',
            ];

            return response()->json($data, 404);
        }

        $data = [
            'message' => "Show detail resource",
            'data' => $student,
        ];

        // mengembalikan data dan status code 200
        return response()->json($data, 200);
    }
    public function store(Request $request) {

        // validasi data request
        $request->validate([
            'nama' => 'required',
            'nim' => 'required',
            'email' => 'required',
            'jurusan' => 'required',
        ]);
        
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];

        $student = Student::create($input);
        
        $data = [
            'message' => 'Student is created succesfully',
            'data' => $student,
        ];

        return response()->json($data, 201);
    }

    public function update(Request $request, $id){
        $student = Student::find($id);

        // jika data tidak ditemukan maka kirim status code 404
        if(!$student){
            $data = [
                'message' => 'Student not found',
            ];

            return response()->json($data, 404);
        }

        $student->update([
            'nama' => $request->nama ?? $student->nama,
            'nim' => $request->nim ?? $student->nim,
            'email' => $request->email ?? $student->email,
            'jurusan' => $request->jurusan ?? $student->jurusan
        ]);

        $data = [
            'message' => 'Student is updated succesfully',
            'data' => $student,
        ];

        return response()->json($data, 200);
    }

    public function destroy($id){
        $student = Student::find($id);
        $student->delete();

        $data = [
            'message' => 'Student is deleted succesfully',
        ];

        // jika data tidak ditemukan maka kirim status code 404
        if(!$student){
            $data = [
                'message' => 'Student not found',
            ];

            return response()->json($data, 404);
        }

        return response()->json($data, 200);
    }
}
