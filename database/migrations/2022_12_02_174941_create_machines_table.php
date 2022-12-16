<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('machines', function (Blueprint $table) {
            $table->id();
            $table->string('number');
            $table->string('code');
            $table->string('model');
            $table->unsignedBigInteger('place_id')->unique();
            $table->date('start');
            $table->date('end');
            $table->timestamps();

            $table->foreign('place_id', 'machine_place_id_foreign')->references('id')->on('places');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('machines');
    }
};
