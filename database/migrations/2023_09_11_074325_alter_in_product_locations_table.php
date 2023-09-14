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
            $table->foreign('product_id', 'lot_location_lot_id_foreign')->references('id')->on('lots');
        });
        Schema::rename('product_locations','lot_locations');
        Schema::table('lot_locations', function (Blueprint $table) {
            $table->renameColumn('product_id','lot_id');
            $table->renameColumn('warehouse_id','slot_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {

        Schema::table('lot_locations', function (Blueprint $table) {
            $table->renameColumn('slot_id','warehouse_id');
            $table->renameColumn('lot_id','product_id');
        });
        Schema::rename('lot_locations','product_locations');
        Schema::table('product_locations', function (Blueprint $table) {
            $table->dropForeign('lot_location_lot_id_foreign');
            $table->foreign('product_id', 'product_location_product_id_foreign')->references('id')->on('products');
        });

    }
};
