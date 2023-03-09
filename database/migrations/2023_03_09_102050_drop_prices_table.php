<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::dropIfExists('prices');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::create('prices', function (Blueprint $table) {
            $table->id();
            $table->float('value');
            $table->float('original_value');
            $table->unsignedBigInteger('product_id');
            $table->timestamps();
        });
    }
};
