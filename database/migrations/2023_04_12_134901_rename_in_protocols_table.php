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
        Schema::table('protocol_products', function (Blueprint $table) {
            $table->dropForeign( 'product_protocol_product_id_foreign');
            $table->renameColumn('product_id','lot_id');
            $table->foreign('lot_id', 'product_protocol_product_id_foreign')->references('id')->on('lots')->onDelete('cascade')->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('protocol_products', function (Blueprint $table) {
            $table->dropForeign( 'product_protocol_product_id_foreign');
            $table->renameColumn('lot_id','product_id');
            $table->foreign('product_id', 'product_protocol_product_id_foreign')->references('id')->on('lots')->onDelete('cascade')->onUpdate('cascade');
        });
    }
};
