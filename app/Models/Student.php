<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    // define model attributes to make mass assignment
    protected $fillable = [
        "nama",
        "nim",
        "email",
        "jurusan"
    ];
}
