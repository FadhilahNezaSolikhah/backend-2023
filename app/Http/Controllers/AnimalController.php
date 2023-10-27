<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    // property animal
    public $animals = ["beruang"];

    // method untuk menampilkan semua hewan
    public function index(){
        echo "Menampilkan semua hewan <br>";

        // loop properti animals
        foreach($this->animals as $animal){
            echo "-$animal <br>";
        }
    }
    // method untuk menambahkan hewan
    public function store(Request $request){
        echo "Menambahkan hewan baru <br>";

        // menambahkan data ke properti animals
        array_push($this->animals, $request->animal);

        // panggil method index
        $this->index();
    }

    // method untuk mengedit hewan
    public function update(Request $request, $id){
        echo "Mengedit hewan $id <br>";

        // edit data animals
        $this->animals[$id] = $request->animal;

        // panggil method index
        $this->index();
    }

    // method untuk menghapus data hewan
    public function destroy($id){
        echo "Menghapus hewan $id <br>";

        // hapus data animals
        unset($this->animals[$id]);

        // panggil method index
        $this->index();
    }
    
}
