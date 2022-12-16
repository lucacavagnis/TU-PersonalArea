<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_services', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('service_id');
            $table->string('value', 100)->nullable();
            $table->timestamps();

            $table->foreign('service_id', 'product_service_id_foreign')->references('id')->on('services');
            $table->foreign('product_id', 'service_product_id_foreign')->references('id')->on('services');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_services');
    }
}
