<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryClass extends Model
{
    use HasFactory;

    protected $fillable = ['category_class', 'description'];

    // App\Models\CategoryClass.php
public function classes()
{
    return $this->hasMany(ClassModel::class, 'category_class_id');
}


}
