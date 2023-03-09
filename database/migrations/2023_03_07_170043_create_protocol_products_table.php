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
        Schema::create('protocol_products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('protocol_id');
            $table->unsignedBigInteger('product_id');
            $table->timestamps();

            $table->foreign('protocol_id', 'product_protocol_protocol_id_foreign')->references('id')->on('protocols');
            $table->foreign('product_id', 'product_protocol_product_id_foreign')->references('id')->on('physical_products');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('protocol_products');
    }
};
