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
        Schema::table('product_locations', function (Blueprint $table) {
            $table->dropForeign('product_location_product_id_foreign');
            $table->foreign('product_id', 'product_location_product_id_foreign')->references('id')->on('products');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('product_locations', function (Blueprint $table) {
            $table->dropForeign('product_location_product_id_foreign');
            $table->foreign('product_id', 'product_location_product_id_foreign')->references('id')->on('lots');
        });
    }
};
