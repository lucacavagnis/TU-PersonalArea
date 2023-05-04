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
        Schema::table('products', function (Blueprint $table) {
            $table->rename('lots');
        });

        Schema::table('lots', function (Blueprint $table) {
            $table->dropForeign('product_data_data_id_foreign');
            $table->renameColumn('data_id','product_id');
            $table->foreign('product_id', 'product_data_data_id_foreign')->references('id')->on('product_data')->onDelete('cascade')->onUpdate('cascade');


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('lots', function (Blueprint $table) {
            $table->rename('products');
        });

        Schema::table('lots', function (Blueprint $table) {
            $table->dropForeign('product_pysicla_product_id_foreign');
            $table->renameColumn('product_id','data_id');
            $table->foreign('data_id', 'product_data_data_id_foreign')->references('id')->on('product_data')->onDelete('cascade')->onUpdate('cascade');
        });
    }
};
