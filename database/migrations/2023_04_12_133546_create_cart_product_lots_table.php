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
        Schema::create('cart_product_lots', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('cart_product_id');
            $table->unsignedBigInteger('lot_id');
            $table->unsignedBigInteger('qty');
            $table->timestamps();

            $table->foreign('cart_product_id','cart_prod_lot_id_key')->references('id')->on('cart_products');
            $table->foreign('lot_id','lot_cart_prod_lot_id_key')->references('id')->on('lots');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cart_product_lots');
    }
};
